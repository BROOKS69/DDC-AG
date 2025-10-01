from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import sermons, events, news, donations, users, auth
from database import connect_to_mongo

app = FastAPI(title="Church Website API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-vercel-domain.vercel.app"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MongoDB on startup
@app.on_event("startup")
async def startup_event():
    await connect_to_mongo()

# Include routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(sermons.router, prefix="/sermons", tags=["Sermons"])
app.include_router(events.router, prefix="/events", tags=["Events"])
app.include_router(news.router, prefix="/news", tags=["News"])
app.include_router(donations.router, prefix="/donations", tags=["Donations"])
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
async def root():
    return {"message": "Church Website API"}
