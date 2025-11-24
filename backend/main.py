from fastapi import FastAPI
from routes.route import app_router
from routes.db import connect_to_mongo, close_mongo_connection
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",      
    allow_credentials=True,      
    allow_methods=["GET", "POST"],         
    allow_headers=["*"],         
)

app.include_router(app_router)

@app.get("/")
async def root():
    return {"Welcome to the Space Exploration Server! check these links for data endpoints:- /facts /planets /universe /contact/submit"}

@app.on_event("startup")
async def startup_db_client():
    await connect_to_mongo()

@app.on_event("shutdown")
async def shutdown_db_client():
    await close_mongo_connection()