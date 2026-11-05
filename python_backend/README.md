# Raithu Rajayam – Python Backend & Database Guide

This folder contains the complete **Python** backend, SQLite schema, automated database seeding, and RESTful API endpoints for the **Raithu Rajayam (Indian Agricultural Crop Production Analysis System)**.

---

## Files Included

1. **`database.py`**:
   - SQLite 3 schema generator and dataset seed script.
   - Creates `states`, `crops`, `production_records`, and `users` tables.
   - Seeds all official Directorate of Economics & Statistics (DES) agricultural datasets.

2. **`app.py`**:
   - Full **Flask** REST API application.
   - Provides endpoints for states, crops, production queries, agronomic recommendations, and farmer authentication.

3. **`standalone_server.py`**:
   - **Zero-Dependency Python 3 Server** utilizing only Python's built-in standard library (`http.server`, `sqlite3`, `json`).
   - Runs out-of-the-box on any machine with Python 3 without requiring `pip install`.

4. **`requirements.txt`**:
   - Standard dependencies for Flask, CORS, and Gunicorn.

---

## How to Run in Visual Studio Code

### Option A: Pure Python 3 (Zero Dependencies Required)
If you don't want to install extra pip packages:
```bash
# 1. Initialize SQLite database
python3 python_backend/database.py

# 2. Run standalone server
python3 python_backend/standalone_server.py
```
Your API will be active at `http://127.0.0.1:5000/api/health` and `http://127.0.0.1:5000/api/states`.

---

### Option B: Flask REST API
```bash
# 1. (Optional) Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r python_backend/requirements.txt

# 3. Seed Database
python python_backend/database.py

# 4. Run Flask Server
python python_backend/app.py
```

---

## Available API Endpoints

- `GET /api/health`: Health status & verified data citations
- `GET /api/states`: List of all 36 Indian states & UTs (supports `?zone=` and `?tier=`)
- `GET /api/states/<state_id>`: Deep-dive state dossier (soil, irrigation, cultivars)
- `GET /api/crops`: Complete crop database (supports `?category=`)
- `POST /api/recommendations`: Calculate crop suitability score based on state, season, and soil
- `POST /api/auth/login`: Mobile OTP and Kisan ID verification
- `GET /api/export/csv`: Export full production dataset as CSV
