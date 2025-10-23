import json
from fastapi import APIRouter
from pathlib import Path

app_router = APIRouter()

json_path = Path(__file__).parent.parent / "json" 

@app_router.get("/facts")
async def facts():
    data=json.load(open(json_path / "facts.json"))
    return data
