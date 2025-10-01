from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import List, Optional
from database import get_database
from routers.auth import get_current_user

router = APIRouter()

class Event(BaseModel):
    title: str
    description: str
    date: str
    time: str
    location: str
    image_url: Optional[str] = None

db = get_database()

@router.get("/", response_model=List[Event])
async def get_events():
    events = await db.events.find().to_list(100)
    return events

@router.get("/{event_id}", response_model=Event)
async def get_event(event_id: str):
    event = await db.events.find_one({"_id": event_id})
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

@router.post("/", response_model=Event)
async def create_event(event: Event, current_user = Depends(get_current_user)):
    event_dict = event.dict()
    result = await db.events.insert_one(event_dict)
    event_dict["_id"] = str(result.inserted_id)
    return event_dict

@router.put("/{event_id}", response_model=Event)
async def update_event(event_id: str, event: Event, current_user = Depends(get_current_user)):
    result = await db.events.update_one({"_id": event_id}, {"$set": event.dict()})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

@router.delete("/{event_id}")
async def delete_event(event_id: str, current_user = Depends(get_current_user)):
    result = await db.events.delete_one({"_id": event_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Event not found")
    return {"message": "Event deleted"}
