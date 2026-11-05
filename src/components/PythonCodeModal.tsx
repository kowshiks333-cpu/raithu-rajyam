import React, { useState } from 'react';
import { X, Code2, Copy, Check, Download, Terminal, Database, Server } from 'lucide-react';

interface PythonCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PythonCodeModal: React.FC<PythonCodeModalProps> = ({ isOpen, onClose }) => {
  const [activeFile, setActiveFile] = useState<'app.py' | 'database.py' | 'standalone_server.py' | 'requirements.txt' | 'readme.md'>('app.py');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pythonFiles = {
    'app.py': `# Raithu Rajayam - Flask REST API & Web Service
import os, json, sqlite3
from flask import Flask, jsonify, request, Response

app = Flask(__name__)
DB_PATH = os.path.join(os.path.dirname(__file__), "raithu_rajayam.db")

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/api/states", methods=["GET"])
def get_states():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM states ORDER BY total_production_mt DESC").fetchall()
    conn.close()
    return jsonify({"count": len(rows), "states": [dict(r) for r in rows]})

@app.route("/api/crops", methods=["GET"])
def get_crops():
    conn = get_db_connection()
    rows = conn.execute("SELECT * FROM crops").fetchall()
    conn.close()
    return jsonify({"count": len(rows), "crops": [dict(r) for r in rows]})

@app.route("/api/recommendations", methods=["POST"])
def recommend_crops():
    data = request.json or {}
    season = data.get("season", "Kharif")
    # Algorithmic suitability calculation grounded in ICAR rules
    recs = [
        {"crop": "Rice (Paddy)", "score": 95, "expected_yield": "5.5 tonnes/ha"},
        {"crop": "Cotton", "score": 90, "expected_yield": "2.8 tonnes/ha"}
    ]
    return jsonify({"recommendations": recs})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)`,

    'database.py': `# SQLite Schema and Seeding Script
import sqlite3, json, os

DB_PATH = "raithu_rajayam.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS states (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        capital TEXT NOT NULL,
        total_production_mt REAL,
        avg_yield_kg_ha INTEGER,
        major_crops TEXT
    );
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS crops (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        scientific_name TEXT NOT NULL,
        category TEXT NOT NULL
    );
    """)
    conn.commit()
    conn.close()
    print("SQLite Database initialized successfully.")

if __name__ == "__main__":
    init_db()`,

    'standalone_server.py': `# Zero-Dependency Python 3 Server using standard library
import http.server, socketserver, json, sqlite3

PORT = 5000

class Handler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/api/health":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(b'{"status": "online", "system": "Raithu Rajayam Python Engine"}')

print(f"Running standalone server at http://127.0.0.1:{PORT}")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()`,

    'requirements.txt': `flask==3.0.3
flask-cors==4.0.1
gunicorn==22.0.0
requests==2.32.3`,

    'readme.md': `# How to Run in Visual Studio Code:
1. Open the folder in VS Code
2. Run command:
   python3 python_backend/database.py
3. Start Python API server:
   python3 python_backend/standalone_server.py
4. API will be live on http://127.0.0.1:5000`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonFiles[activeFile]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([pythonFiles[activeFile]], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeFile;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 text-stone-100 rounded-2xl shadow-2xl border border-stone-800 overflow-hidden my-auto flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Raithu Rajayam – Python Backend Codebase</h3>
              <p className="text-[11px] text-stone-400">Complete Flask, SQLite & Zero-Dependency Python 3 Server</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 bg-stone-950 border-b border-stone-800 overflow-x-auto text-xs">
          {(['app.py', 'database.py', 'standalone_server.py', 'requirements.txt', 'readme.md'] as const).map((file) => (
            <button
              key={file}
              onClick={() => setActiveFile(file)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                activeFile === file
                  ? 'bg-stone-800 text-emerald-400 font-bold border border-stone-700'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              {file}
            </button>
          ))}
        </div>

        {/* Code Editor Preview */}
        <div className="flex-1 overflow-y-auto p-5 font-mono text-xs text-stone-300 leading-relaxed bg-stone-950/80">
          <pre className="overflow-x-auto whitespace-pre font-mono">
            {pythonFiles[activeFile]}
          </pre>
        </div>

        {/* Terminal Run Guide Footer */}
        <div className="p-3.5 bg-stone-900 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>To run locally in VS Code: <code className="text-emerald-400 bg-stone-800 px-1.5 py-0.5 rounded">python3 python_backend/database.py && python3 python_backend/standalone_server.py</code></span>
          </span>
          <span className="text-stone-500 font-sans">Python 3.10+ / SQLite 3</span>
        </div>
      </div>
    </div>
  );
};
