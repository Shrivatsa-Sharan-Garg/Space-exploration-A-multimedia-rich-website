# 🪐 Space-Facts Backend Operations Guide (FastAPI/Uvicorn)

This document provides all the necessary instructions for setting up the local development environment, installing dependencies, and running the backend API server.

---

## 1. Prerequisites

Before starting, ensure you have the following installed on your system:

* **Python (3.11+):** The language environment required to run the application.
* **Git:** (Recommended) For cloning the repository and managing code versions.

---

## 2. Environment Setup

We use a **virtual environment** (`venv`) to isolate project dependencies and prevent conflicts with system-wide Python packages.

### 2.1. Create the Virtual Environment

Run this command in the project's root directory:

```bash
python -m venv venv
```
### 2.2. Activate the Environment

Each team member must activate the virtual environment **every time** they start a new terminal session.

| Operating System             | Command                     |
| ---------------------------- | --------------------------- |
| **Windows (PowerShell)**     | `venv\Scripts\Activate.ps1` |
| **Windows (Command Prompt)** | `venv\Scripts\activate`     |
| **Linux/macOS (Bash)**       | `source venv/bin/activate`  |

> ⚠️ **Verification:**  
> You'll know the environment is active when `(venv)` appears at the start of your command prompt line.

---

## 3. Dependency Management

The project uses a `requirements.txt` file to manage all necessary Python packages.  
When adding a new package, remember to update this file and notify the team.

### 3.1. Install Dependencies

Install all required packages (including FastAPI and Uvicorn) using:

```bash
pip install -r requirements.txt
```
### 📝 Note:
If setting up for the first time and requirements.txt does not exist, you can generate it by running:
```bash
pip install fastapi uvicorn
```
```bash
pip freeze > requirements.txt
```
## 4. Running the Server

Our server stack uses **Uvicorn** (ASGI server) and **FastAPI** (modern web framework).

---

### 4.1. Start the Server in Development Mode

Run the following command from the project root directory.  
The `--reload` flag enables fast iteration during development.

```bash
python -m uvicorn main:app --reload
```
| **Parameter** | **Description**                                                                           |
| ------------- | ----------------------------------------------------------------------------------------- |
| `main:app`    | Tells Uvicorn to look for the application instance named `app` inside the `main.py` file. |
| `--reload`    | Enables auto-reloading — the server automatically restarts when a Python file is saved.   |

---

## 4.2. Accessing the API

Once the server is running, you can access the following:

| **Resource**                      | **URL**                                                    |
| --------------------------------- | ---------------------------------------------------------- |
| **Base URL**                      | [http://127.0.0.1:8000](http://127.0.0.1:8000)             |
| **Interactive Docs (Swagger UI)** | [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)   |
| **Alternative Docs (ReDoc)**      | [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc) |

> 🧭 **Tip:**  
> The **Swagger UI** is the primary place to test endpoints interactively!

---

## 5. Finishing Up

When you are done with your session, always **deactivate** the virtual environment to keep your global Python environment clean.

### 5.1. Deactivate the Environment

Run the following command:

```bash
deactivate
```