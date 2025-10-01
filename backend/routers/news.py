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

class NewsModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    title: str
    date: str
    content: str

    class Config:
        validate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

@router.get("/", response_model=List[NewsModel])
async def get_news():
    db = get_database()
    news = await db.news.find().to_list(100)
    return news

@router.post("/", response_model=NewsModel)
async def create_news(news: NewsModel):
    db = get_database()
    news_dict = news.dict(by_alias=True)
    new_news = await db.news.insert_one(news_dict)
    created_news = await db.news.find_one({"_id": new_news.inserted_id})
    return created_news

@router.put("/{news_id}", response_model=NewsModel)
async def update_news(news_id: str, news: NewsModel):
    db = get_database()
    news = jsonable_encoder(news)
    update_result = await db.news.update_one({"_id": ObjectId(news_id)}, {"$set": news})
    if update_result.modified_count == 1:
        updated_news = await db.news.find_one({"_id": ObjectId(news_id)})
        if updated_news:
            return updated_news
    raise HTTPException(status_code=404, detail=f"News {news_id} not found")

@router.delete("/{news_id}")
async def delete_news(news_id: str):
    db = get_database()
    delete_result = await db.news.delete_one({"_id": ObjectId(news_id)})
    if delete_result.deleted_count == 1:
        return {"message": f"News {news_id} deleted"}
    raise HTTPException(status_code=404, detail=f"News {news_id} not found")
