from fastapi import APIRouter, HTTPException
from typing import List
from pydantic import BaseModel, Field, EmailStr
from bson import ObjectId
from database import get_database
from fastapi.encoders import jsonable_encoder

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

class UserModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    email: EmailStr
    full_name: str
    is_admin: bool = False

    class Config:
        validate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

@router.get("/", response_model=List[UserModel])
async def get_users():
    db = get_database()
    users = await db.users.find().to_list(100)
    return users

@router.post("/", response_model=UserModel)
async def create_user(user: UserModel):
    db = get_database()
    user = jsonable_encoder(user)
    new_user = await db.users.insert_one(user)
    created_user = await db.users.find_one({"_id": new_user.inserted_id})
    return created_user

@router.put("/{user_id}", response_model=UserModel)
async def update_user(user_id: str, user: UserModel):
    db = get_database()
    user = jsonable_encoder(user)
    update_result = await db.users.update_one({"_id": ObjectId(user_id)}, {"$set": user})
    if update_result.modified_count == 1:
        updated_user = await db.users.find_one({"_id": ObjectId(user_id)})
        if updated_user:
            return updated_user
    raise HTTPException(status_code=404, detail=f"User {user_id} not found")

@router.delete("/{user_id}")
async def delete_user(user_id: str):
    db = get_database()
    delete_result = await db.users.delete_one({"_id": ObjectId(user_id)})
    if delete_result.deleted_count == 1:
        return {"message": f"User {user_id} deleted"}
    raise HTTPException(status_code=404, detail=f"User {user_id} not found")
