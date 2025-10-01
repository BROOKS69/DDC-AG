from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from database import get_database
from routers.auth import get_current_user

router = APIRouter()

class News(BaseModel):
    title: str
    content: str
    author: str
    date: str
    image_url: Optional[str] = None

db = get_database()

@router.get("/", response_model=List[News])
async def get_news():
    news = await db.news.find().to_list(100)
    return news

@router.get("/{news_id}", response_model=News)
async def get_news_item(news_id: str):
    news_item = await db.news.find_one({"_id": news_id})
    if not news_item:
        raise HTTPException(status_code=404, detail="News item not found")
    return news_item

@router.post("/", response_model=News)
async def create_news(news: News, current_user = Depends(get_current_user)):
    news_dict = news.dict()
    result = await db.news.insert_one(news_dict)
    news_dict["_id"] = str(result.inserted_id)
    return news_dict

@router.put("/{news_id}", response_model=News)
async def update_news(news_id: str, news: News, current_user = Depends(get_current_user)):
    result = await db.news.update_one({"_id": news_id}, {"$set": news.dict()})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="News item not found")
    return news

@router.delete("/{news_id}")
async def delete_news(news_id: str, current_user = Depends(get_current_user)):
    result = await db.news.delete_one({"_id": news_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="News item not found")
    return {"message": "News item deleted"}
