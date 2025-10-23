from fastapi import FastAPI
from routes.db_route import app_router
app = FastAPI()

app.include_router(app_router)
@app.get("/")
async def root():
    return {"Welcome to the Space Exploration Server!"}