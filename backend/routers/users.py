from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List
from database import get_database
from routers.auth import get_current_user

router = APIRouter()

class User(BaseModel):
    email: str
    name: str
    role: str = "member"  # member, admin

db = get_database()

@router.get("/", response_model=List[User])
async def get_users(current_user = Depends(get_current_user)):
    users = await db.users.find().to_list(100)
    return users

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str, current_user = Depends(get_current_user)):
    user = await db.users.find_one({"_id": user_id})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/", response_model=User)
async def create_user(user: User, current_user = Depends(get_current_user)):
    user_dict = user.dict()
    result = await db.users.insert_one(user_dict)
    user_dict["_id"] = str(result.inserted_id)
    return user_dict

@router.put("/{user_id}", response_model=User)
async def update_user(user_id: str, user: User, current_user = Depends(get_current_user)):
    result = await db.users.update_one({"_id": user_id}, {"$set": user.dict()})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.delete("/{user_id}")
async def delete_user(user_id: str, current_user = Depends(get_current_user)):
    result = await db.users.delete_one({"_id": user_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "User deleted"}
