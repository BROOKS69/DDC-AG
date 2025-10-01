from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URL = os.getenv("MONGO_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "church_db")

client = AsyncIOMotorClient(MONGO_URL)
database = client[DATABASE_NAME]

async def connect_to_mongo():
    try:
        # Ping the database to verify connection
        await client.admin.command('ping')
        print("Connected to MongoDB")
    except Exception as e:
        print(f"Failed to connect to MongoDB: {e}")

def get_database():
    return database
