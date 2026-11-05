"""
AgriVision / Raithu Rajayam - SQLite Database Initialization & Seeding Script
Database: SQLite 3
Grounded in Directorate of Economics and Statistics (DES) & ICAR Records
"""

import sqlite3
import json
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "raithu_rajayam.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Enable foreign keys
    cursor.execute("PRAGMA foreign_keys = ON;")

    # 1. States and Union Territories Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS states (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        capital TEXT NOT NULL,
        type TEXT NOT NULL,
        zone TEXT NOT NULL,
        rainfall_mm INTEGER NOT NULL,
        irrigation_pct REAL NOT NULL,
        cultivated_area_lakh_ha REAL NOT NULL,
        total_production_mt REAL NOT NULL,
        avg_yield_kg_ha INTEGER NOT NULL,
        climate TEXT NOT NULL,
        major_crops TEXT NOT NULL, -- JSON array
        soil_types TEXT NOT NULL,  -- JSON array
        irrigation_methods TEXT NOT NULL, -- JSON array
        major_districts TEXT NOT NULL -- JSON array
    );
    """)

    # 2. Crops Encyclopedia Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS crops (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        scientific_name TEXT NOT NULL,
        category TEXT NOT NULL,
        subcategory TEXT NOT NULL,
        ideal_temperature TEXT NOT NULL,
        rainfall_requirement_mm TEXT NOT NULL,
        average_duration_days INTEGER NOT NULL,
        water_requirements TEXT NOT NULL,
        fertilizer_npk TEXT NOT NULL,
        expected_yield_per_ha TEXT NOT NULL,
        soil_requirements TEXT NOT NULL,
        climate_requirements TEXT NOT NULL,
        general_guidance TEXT NOT NULL,
        popular_varieties TEXT NOT NULL, -- JSON array
        suitable_states TEXT NOT NULL,    -- JSON array
        top_districts TEXT NOT NULL      -- JSON array
    );
    """)

    # 3. Historical Production Records Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS production_records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        year TEXT NOT NULL,
        crop TEXT NOT NULL,
        category TEXT NOT NULL,
        state TEXT NOT NULL,
        cultivated_area_lakh_ha REAL NOT NULL,
        production_mt REAL NOT NULL,
        yield_kg_ha INTEGER NOT NULL,
        season TEXT NOT NULL,
        data_source TEXT NOT NULL
    );
    """)

    # 4. Registered Users Table (Raithu / Officers)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        mobile TEXT UNIQUE NOT NULL,
        email TEXT,
        kisan_id TEXT UNIQUE NOT NULL,
        role TEXT NOT NULL,
        state TEXT NOT NULL,
        district TEXT NOT NULL,
        landholding_acres REAL DEFAULT 0,
        primary_crops TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)

    conn.commit()
    print("Database tables created successfully.")
    seed_data(conn)
    conn.close()

def seed_data(conn):
    cursor = conn.cursor()

    # Seed Sample States (All key agrarian states)
    states_data = [
        ("punjab", "Punjab", "Chandigarh", "State", "Northern", 649, 98.7, 41.5, 31.8, 4420,
         "Semi-arid with hot summers and cold winters",
         json.dumps(["Wheat", "Rice (Paddy)", "Cotton", "Maize", "Mustard"]),
         json.dumps(["Alluvial Soil", "Sandy Loam"]),
         json.dumps(["Tube-wells", "Canal irrigation (Bhakra)"]),
         json.dumps(["Ludhiana", "Sangrur", "Patiala", "Bathinda", "Amritsar"])),

        ("uttar-pradesh", "Uttar Pradesh", "Lucknow", "State", "Northern", 890, 86.4, 165.7, 58.4, 3120,
         "Sub-tropical monsoon, hot summers and cool winters",
         json.dumps(["Sugarcane", "Wheat", "Rice (Paddy)", "Potato", "Mustard"]),
         json.dumps(["Alluvial Plain", "Sandy Alluvium", "Terai"]),
         json.dumps(["Private tube-wells", "State canals", "Tanks"]),
         json.dumps(["Meerut", "Muzaffarnagar", "Gorakhpur", "Varanasi", "Agra"])),

        ("madhya-pradesh", "Madhya Pradesh", "Bhopal", "State", "Central", 1160, 74.2, 153.2, 38.6, 2790,
         "Tropical monsoon, hot summers and mild winters",
         json.dumps(["Soybean", "Wheat", "Gram (Chickpea)", "Mustard", "Garlic"]),
         json.dumps(["Deep Black Cotton Soil", "Medium Black", "Alluvial"]),
         json.dumps(["Narmada Valley Canals", "Borewells", "Stop dams"]),
         json.dumps(["Indore", "Ujjain", "Hoshangabad", "Vidisha", "Dewas"])),

        ("maharashtra", "Maharashtra", "Mumbai", "State", "Western", 1180, 21.6, 174.5, 26.8, 1820,
         "Tropical monsoon, semi-arid dry Marathwada & Vidarbha",
         json.dumps(["Cotton", "Sugarcane", "Soybean", "Jowar", "Onion", "Grapes"]),
         json.dumps(["Black Regur Soil", "Laterite", "Coastal Alluvium"]),
         json.dumps(["Drip micro-irrigation", "Wells and farm ponds"]),
         json.dumps(["Nashik", "Pune", "Ahmednagar", "Solapur", "Kolhapur"])),

        ("andhra-pradesh", "Andhra Pradesh", "Amaravati", "State", "Southern", 940, 54.3, 63.8, 17.5, 3410,
         "Tropical with hot summers and northeast monsoon rainfall",
         json.dumps(["Rice (Paddy)", "Chili", "Cotton", "Tobacco", "Groundnut"]),
         json.dumps(["Red Sandy Soils", "Black Soils", "Deltaic Alluvium"]),
         json.dumps(["Krishna-Godavari barrages", "Polavaram", "Borewells"]),
         json.dumps(["East Godavari", "West Godavari", "Guntur", "Kurnool"])),

        ("telangana", "Telangana", "Hyderabad", "State", "Southern", 905, 68.9, 53.2, 18.2, 3420,
         "Semi-arid tropical, hot summers and moderate winters",
         json.dumps(["Rice (Paddy)", "Cotton", "Maize", "Chili", "Turmeric"]),
         json.dumps(["Red Sandy Soils (Chalkas)", "Black Regur", "Laterite"]),
         json.dumps(["Kaleshwaram Lift Scheme", "Mission Kakatiya tanks", "Borewells"]),
         json.dumps(["Nalgonda", "Khammam", "Nizamabad", "Karimnagar", "Warangal"])),

        ("rajasthan", "Rajasthan", "Jaipur", "State", "Northern", 575, 46.1, 181.3, 28.3, 1910,
         "Arid to semi-arid with hot summers and low rainfall",
         json.dumps(["Mustard", "Bajra (Pearl Millet)", "Gram", "Guar", "Wheat"]),
         json.dumps(["Desert Soil", "Sandy Loam", "Saline Soils"]),
         json.dumps(["Indira Gandhi Canal (IGNP)", "Tube-wells", "Kunds"]),
         json.dumps(["Sri Ganganagar", "Hanumangarh", "Alwar", "Bharatpur"]))
    ]

    cursor.executemany("""
    INSERT OR REPLACE INTO states
    (id, name, capital, type, zone, rainfall_mm, irrigation_pct, cultivated_area_lakh_ha, total_production_mt, avg_yield_kg_ha, climate, major_crops, soil_types, irrigation_methods, major_districts)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, states_data)

    # Seed Sample Crops
    crops_data = [
        ("rice-paddy", "Rice (Paddy)", "Oryza sativa", "Food Crops", "Cereal", "22°C to 34°C", "1200 - 2000 mm", 130,
         "High (standing water)", "120:60:40 kg/ha", "3.8 - 6.5 tonnes/ha", "Heavy clay or clayey loam soils", "Hot and humid tropical climate",
         "Adopt alternate wetting and drying (AWD) to save up to 30% water.",
         json.dumps(["Pusa Basmati 1121", "IR 64", "Swarna (MTU 7029)", "BPT 5204", "PR 126"]),
         json.dumps(["West Bengal", "Uttar Pradesh", "Punjab", "Andhra Pradesh", "Telangana", "Odisha"]),
         json.dumps(["Purba Bardhaman", "Ludhiana", "Karnal", "East Godavari", "Nalgonda"])),

        ("wheat", "Wheat", "Triticum aestivum", "Food Crops", "Cereal", "12°C to 25°C", "350 - 550 mm", 140,
         "Moderate (4-6 irrigations)", "150:60:40 kg/ha", "4.8 - 6.2 tonnes/ha", "Well-drained fertile loamy to clay loam", "Cool and dry winter growing season",
         "Sowing by November 15 avoids terminal heat waves during March ripening.",
         json.dumps(["HD 2967", "HD 3086", "DBW 187", "PBW 725", "Sharbati"]),
         json.dumps(["Uttar Pradesh", "Madhya Pradesh", "Punjab", "Haryana", "Rajasthan"]),
         json.dumps(["Sangrur", "Karnal", "Muzaffarnagar", "Hoshangabad"])),

        ("cotton", "Cotton", "Gossypium hirsutum", "Commercial Crops", "Fiber Crop", "21°C to 35°C", "600 - 1000 mm", 160,
         "Moderate (drip fertigation)", "120:60:60 kg/ha", "2.0 - 3.2 tonnes/ha seed cotton", "Deep black cotton soil (Regur)", "Semi-arid tropical requiring 200 frost-free days",
         "High-density planting systems (HDPS) improve rainfed productivity by 35%.",
         json.dumps(["RCH 689 Bt", "Ajit 155 Bt", "Mallika Bt", "PAU Bt 1"]),
         json.dumps(["Gujarat", "Maharashtra", "Telangana", "Andhra Pradesh", "Rajasthan"]),
         json.dumps(["Rajkot", "Yavatmal", "Nalgonda", "Sirsa", "Bathinda"]))
    ]

    cursor.executemany("""
    INSERT OR REPLACE INTO crops
    (id, name, scientific_name, category, subcategory, ideal_temperature, rainfall_requirement_mm, average_duration_days, water_requirements, fertilizer_npk, expected_yield_per_ha, soil_requirements, climate_requirements, general_guidance, popular_varieties, suitable_states, top_districts)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, crops_data)

    # Seed Default Farmer User
    cursor.execute("""
    INSERT OR REPLACE INTO users (id, name, mobile, email, kisan_id, role, state, district, landholding_acres, primary_crops)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, ("user-1", "Ramesh Kumar Chowdary", "9848022334", "ramesh.farmer@raithu.org", "RR-AP-2024-8841", "Raithu (Farmer)", "Andhra Pradesh", "Guntur", 5.5, "Rice, Chili, Cotton"))

    conn.commit()
    print("Database seeded with official agricultural datasets.")

if __name__ == "__main__":
    init_db()
