from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field
from typing import List, Optional
from bson import ObjectId
from database import get_database
from routers.auth import get_current_user

router = APIRouter()

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, field=None, config=None):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __get_pydantic_json_schema__(cls, core_schema, handler):
        return {
            "type": "string",
            "format": "objectid",
        }

class Sermon(BaseModel):
    id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
    title: str
    speaker: str
    date: str
    summary: str
    audio_url: Optional[str] = None
    video_url: Optional[str] = None

    class Config:
        validate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

db = get_database()

@router.get("/", response_model=List[Sermon])
async def get_sermons():
    sermons = await db.sermons.find().to_list(100)
    return sermons

@router.get("/{sermon_id}", response_model=Sermon)
async def get_sermon(sermon_id: str):
    sermon = await db.sermons.find_one({"_id": ObjectId(sermon_id)})
    if not sermon:
        raise HTTPException(status_code=404, detail="Sermon not found")
    return sermon

@router.post("/", response_model=Sermon)
async def create_sermon(sermon: Sermon, current_user = Depends(get_current_user)):
    sermon_dict = sermon.dict(by_alias=True)
    result = await db.sermons.insert_one(sermon_dict)
    sermon_dict["_id"] = str(result.inserted_id)
    return sermon_dict

@router.put("/{sermon_id}", response_model=Sermon)
async def update_sermon(sermon_id: str, sermon: Sermon, current_user = Depends(get_current_user)):
    result = await db.sermons.update_one({"_id": ObjectId(sermon_id)}, {"$set": sermon.dict(exclude={"id"}, by_alias=True)})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Sermon not found")
    return sermon

@router.delete("/{sermon_id}")
async def delete_sermon(sermon_id: str, current_user = Depends(get_current_user)):
    result = await db.sermons.delete_one({"_id": ObjectId(sermon_id)})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Sermon not found")
    return {"message": "Sermon deleted"}
