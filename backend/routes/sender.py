from fastapi import FastAPI
app = FastAPI()

@app.post("/send")
async def send_message(message):
    return {"Message sent successfully!"}