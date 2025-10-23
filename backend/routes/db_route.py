import json
from fastapi import APIRouter, HTTPException
from pathlib import Path
from typing import Dict, Any
import logging 

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_router = APIRouter()

JSON_BASE_PATH = Path(__file__).parent.parent / "json"

def load_json_data(filename: str) -> Dict[str, Any]:
    file_path = JSON_BASE_PATH / filename
    
    if not file_path.exists():
        logger.error(f"FATAL ERROR: Data file DOES NOT EXIST at path: {file_path.resolve()}")
        raise HTTPException(
            status_code=500, 
            detail=f"Data file not found at: {file_path}"
        )
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            data = json.load(file)
            return data
    except json.JSONDecodeError:
        raise HTTPException(
            status_code=500, 
            detail=f"Error decoding JSON data from file: {filename}"
        )
    except Exception as e:
        logger.error(f"Unexpected error loading JSON file {filename}: {e}")
        raise HTTPException(
            status_code=500, 
            detail=f"Unexpected error loading data file: {filename}"
        )


@app_router.get("/facts")
async def get_all_space_facts() -> Dict[str, Any]:
    return load_json_data("facts.json")

@app_router.get("/planets")
async def get_all_space_facts() -> Dict[str, Any]:
    return load_json_data("planets.json")

@app_router.get("/gallery")
async def get_all_space_facts() -> Dict[str, Any]:
    return load_json_data("universe.json")
