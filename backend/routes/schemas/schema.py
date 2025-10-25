from pydantic import BaseModel, Field
from typing import Optional

class ContactMessage(BaseModel):
    """Schema for validating and receiving contact form submissions."""
    name: str = Field(..., description="Full name of the person submitting the form.")
    email: str = Field(..., description="Email address for reply, validated as an email format.")
    phone: Optional[str] = Field(None, description="Optional phone number.")
    subject: Optional[str] = Field(None, description="Subject line of the message.")
    message: str = Field(..., description="The main content of the message.")
