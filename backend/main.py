from fastapi import FastAPI
app = FastAPI()

@app.get("/")
async def root():
    return {"Welcome to the Space Exploration Server!"}