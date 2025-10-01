from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from supabase import create_client, Client
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter()
security = HTTPBearer()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_ANON_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        user = supabase.auth.get_user(token)
        return user
    except Exception as e:
        raise HTTPException(status_code=401, detail="Invalid token")

@router.post("/login")
async def login(email: str, password: str):
    try:
        response = supabase.auth.sign_in_with_password({"email": email, "password": password})
        return {"access_token": response.session.access_token, "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Login failed")

@router.post("/register")
async def register(email: str, password: str):
    try:
        response = supabase.auth.sign_up({"email": email, "password": password})
        return {"message": "User registered", "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Registration failed")

@router.post("/logout")
async def logout(current_user = Depends(get_current_user)):
    try:
        supabase.auth.sign_out()
        return {"message": "Logged out"}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Logout failed")
