from fastapi import FastAPI
from routes.db_route import app_router
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",       # The list of allowed origins (ours is '*')
    allow_credentials=True,      # Allow cookies/authentication headers
    allow_methods=["*"],         # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],         # Allow all headers
)

app.include_router(app_router)

@app.get("/")
async def root():
    return {"Welcome to the Space Exploration Server! check these links for data endpoints:- /facts /planets /universe"}
