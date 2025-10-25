import json
from fastapi import APIRouter, HTTPException, status 
from pathlib import Path
from typing import Dict, Any
import logging 
from .schemas.schema import ContactMessage
from .db import get_contact_collection 

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app_router = APIRouter()

JSON_BASE_PATH = Path(__file__).parent.parent / "json"

def load_json_data(filename: str) -> Dict[str, Any]:
    """Handles reading and validating static JSON files for data endpoints."""
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

@app_router.get("/universe")
async def get_all_space_facts() -> Dict[str, Any]:
    return load_json_data("universe.json")

@app_router.get("/planets")
async def get_all_space_facts() -> Dict[str, Any]:
    return load_json_data("planets.json")

@app_router.post("/contact/submit")
async def submit_contact_form(message: ContactMessage):
    """
    Receives contact form data, validates it using Pydantic, and saves it to MongoDB.
    """
    contact_collection = get_contact_collection()

    if contact_collection is None:
        logger.error("Database connection is unavailable. Failed to save contact message.")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="The message service is temporarily unavailable. The database is unreachable."
        )

    try:
        message_dict = message.model_dump(exclude_none=True)
        result = await contact_collection.insert_one(message_dict)
        logger.info(f"Successfully saved contact message with MongoDB ID: {result.inserted_id}")
        logger.info(f"Name: {message.name}, Email: {message.email}")
        
        return {
            "status": "success",
            "message": f"Thank you, {message.name}! Your message has been successfully saved to MongoDB."
        }

    except Exception as e:
        logger.error(f"MongoDB write error during contact submission: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="There was an internal error saving your message. Please try again later."
        )
