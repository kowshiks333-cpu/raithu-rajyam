"""
Raithu Rajayam - Zero-Dependency Python 3 Built-in HTTP & SQLite Server
Runs out-of-the-box on standard Python 3.10+ without needing 'pip install'.
"""

import http.server
import socketserver
import json
import sqlite3
import os
import urllib.parse

PORT = 5000
DB_PATH = os.path.join(os.path.dirname(__file__), "raithu_rajayam.db")

class RaithuApiHandler(http.server.BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_GET(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path

        if path == "/api/health":
            self._send_json(200, {
                "status": "online",
                "server": "Python 3 Standalone HTTP Server",
                "database": "SQLite 3",
                "title": "Raithu Rajayam Agricultural Intelligence System"
            })
        elif path == "/api/states":
            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            rows = conn.execute("SELECT * FROM states ORDER BY total_production_mt DESC").fetchall()
            conn.close()

            states = []
            for r in rows:
                d = dict(r)
                d["major_crops"] = json.loads(d["major_crops"])
                d["soil_types"] = json.loads(d["soil_types"])
                d["irrigation_methods"] = json.loads(d["irrigation_methods"])
                d["major_districts"] = json.loads(d["major_districts"])
                states.append(d)

            self._send_json(200, {"count": len(states), "states": states})
        elif path == "/api/crops":
            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            rows = conn.execute("SELECT * FROM crops").fetchall()
            conn.close()

            crops = []
            for r in rows:
                d = dict(r)
                d["popular_varieties"] = json.loads(d["popular_varieties"])
                d["suitable_states"] = json.loads(d["suitable_states"])
                d["top_districts"] = json.loads(d["top_districts"])
                crops.append(d)

            self._send_json(200, {"count": len(crops), "crops": crops})
        elif path.startswith("/api/states/"):
            state_id = path.replace("/api/states/", "").strip()
            conn = sqlite3.connect(DB_PATH)
            conn.row_factory = sqlite3.Row
            row = conn.execute("SELECT * FROM states WHERE id = ?", (state_id,)).fetchone()
            conn.close()

            if row:
                d = dict(row)
                d["major_crops"] = json.loads(d["major_crops"])
                d["soil_types"] = json.loads(d["soil_types"])
                d["irrigation_methods"] = json.loads(d["irrigation_methods"])
                d["major_districts"] = json.loads(d["major_districts"])
                self._send_json(200, d)
            else:
                self._send_json(404, {"error": "State not found"})
        else:
            self._send_json(404, {"error": "Endpoint not found"})

    def do_POST(self):
        parsed_url = urllib.parse.urlparse(self.path)
        path = parsed_url.path
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)

        try:
            body = json.loads(post_data.decode('utf-8')) if post_data else {}
        except Exception:
            body = {}

        if path == "/api/auth/login":
            mobile = body.get("mobile", "9848022334")
            self._send_json(200, {
                "status": "authenticated",
                "user": {
                    "id": f"user-{mobile[-4:]}",
                    "name": f"Raithu {mobile[-4:]}",
                    "mobile": mobile,
                    "kisan_id": f"RR-AP-2024-{mobile[-4:]}",
                    "role": "Raithu (Farmer)",
                    "state": "Andhra Pradesh",
                    "district": "Guntur"
                }
            })
        elif path == "/api/recommendations":
            season = body.get("season", "Kharif")
            recs = [
                {
                    "crop": "Rice (Paddy - BPT 5204)",
                    "suitability_score": 95,
                    "season": season,
                    "expected_yield": "5.2 tonnes/ha"
                },
                {
                    "crop": "Bt Cotton (RCH 689)",
                    "suitability_score": 90,
                    "season": season,
                    "expected_yield": "2.8 tonnes/ha"
                }
            ]
            self._send_json(200, {"recommendations": recs})
        else:
            self._send_json(404, {"error": "POST endpoint not found"})

    def _send_json(self, status_code, payload):
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self._send_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(payload, indent=2).encode('utf-8'))

if __name__ == "__main__":
    print(f"Starting Raithu Rajayam Standalone Python Server on http://127.0.0.1:{PORT}")
    with socketserver.TCPServer(("", PORT), RaithuApiHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer shutting down gracefully.")
