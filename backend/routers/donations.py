from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from database import get_database
from routers.auth import get_current_user

router = APIRouter()

class Donation(BaseModel):
    amount: float
    donor_name: str
    donor_email: str
    message: str = ""
    date: str

db = get_database()

@router.get("/", response_model=List[Donation])
async def get_donations(current_user = Depends(get_current_user)):
    donations = await db.donations.find().to_list(100)
    return donations

@router.post("/", response_model=Donation)
async def create_donation(donation: Donation):
    donation_dict = donation.dict()
    result = await db.donations.insert_one(donation_dict)
    donation_dict["_id"] = str(result.inserted_id)
    return donation_dict

@router.get("/total")
async def get_total_donations(current_user = Depends(get_current_user)):
    pipeline = [{"$group": {"_id": None, "total": {"$sum": "$amount"}}}]
    result = await db.donations.aggregate(pipeline).to_list(1)
    total = result[0]["total"] if result else 0
    return {"total": total}
