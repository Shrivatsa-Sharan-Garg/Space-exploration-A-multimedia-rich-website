import os
import logging
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient 
from motor.core import AgnosticDatabase, AgnosticCollection # Type hints for clarity

load_dotenv()

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO) 

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")
DATABASE_NAME = "space_exploration_db"
COLLECTION_NAME = "contact_messages"

client: AsyncIOMotorClient = None
db: AgnosticDatabase = None
contact_collection: AgnosticCollection = None

async def connect_to_mongo():
    """Initializes the asynchronous Motor MongoDB connection."""
    global client, db, contact_collection
    try:
        client = AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=5000)
        
        await client.admin.command('ping')
        logger.info("Successfully connected to MongoDB with Motor!")
        
        db = client[DATABASE_NAME]
        contact_collection = db[COLLECTION_NAME]
    
    except Exception as e:
        logger.error(f"Could not connect to MongoDB: {e}")
        client = None 
        db = None
        contact_collection = None

async def close_mongo_connection():
    """Closes the MongoDB connection gracefully."""
    global client
    if client:
        client.close()
        logger.info("MongoDB connection closed.")

def get_contact_collection() -> AgnosticCollection | None:
    """Returns the contact messages collection object for dependency injection."""
    if contact_collection is None:
        logger.warning("MongoDB contact_collection is unavailable. Database connection failed.")
        return None
    return contact_collection
