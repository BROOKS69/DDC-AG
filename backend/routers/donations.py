from fastapi import APIRouter, HTTPException
from typing import List
from pydantic import BaseModel, Field
from bson import ObjectId
from database import get_database
from fastapi.encoders import jsonable_encoder

router = APIRouter()

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, core_schema, handler):
        return {
            "type": "string",
            "format": "objectid",
        }

class DonationModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    donor_name: str
    amount: float
    date: str

    class Config:
        validate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

@router.get("/", response_model=List[DonationModel])
async def get_donations():
    db = get_database()
    donations = await db.donations.find().to_list(100)
    return donations

@router.post("/", response_model=DonationModel)
async def create_donation(donation: DonationModel):
    db = get_database()
    donation = jsonable_encoder(donation)
    new_donation = await db.donations.insert_one(donation)
    created_donation = await db.donations.find_one({"_id": new_donation.inserted_id})
    return created_donation

@router.get("/total")
async def get_total_donations():
    db = get_database()
    pipeline = [
        {"$group": {"_id": None, "total": {"$sum": "$amount"}}}
    ]
    result = await db.donations.aggregate(pipeline).to_list(length=1)
    total = result[0]["total"] if result else 0
    return {"total_donations": total}
