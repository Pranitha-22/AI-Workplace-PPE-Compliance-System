AI Workplace PPE Compliance System (SafetyEye)

AI-powered real-time monitoring system for detecting PPE violations and tracking workplace occupancy using YOLOv8.

🚀 Core Features

Custom YOLOv8 model trained on construction safety dataset

Real-time multi-camera detection

PPE detection: Helmet, Vest, Mask

Rule-based violation engine

Risk classification (Low / Medium / High)

Alert generation & logging

Live dashboard with compliance analytics

Occupancy trend visualization

🧠 Architecture

Camera Feed → Frame Processing → YOLOv8 Inference →
Violation Logic → Alert System → Database Logging →
Live Dashboard (Analytics + Compliance Stats)

📊 Model

Model: YOLOv8 (Ultralytics)

Dataset: Construction Site Safety Dataset (Roboflow – Kaggle)

Metrics: mAP, Precision, Recall (include your numbers here)

Data augmentation applied for robustness

⚙️ Tech Stack

Backend:

Python

PyTorch

Ultralytics YOLOv8

OpenCV

FastAPI / Flask

Frontend:

React.js

Chart Visualizations

Storage:

SQLite / CSV logging

🔍 Violation Logic Example

If:

Person detected

No overlapping helmet detection

→ Generate violation: NO HARDHAT
→ Assign risk level
→ Log event
→ Trigger alert

📈 Dashboard Includes

Live detection feed

Active violation table

PPE compliance percentage

Occupancy tracking

Alert history

🎥 Demo

Full walkthrough:
[YouTube Demo Link]

▶️ Run Locally
pip install -r requirements.txt
python backend/app.py

Frontend:

cd frontend
npm install
npm start
🎯 Engineering Highlights

End-to-end model training pipeline

Real-time inference optimization

Custom violation rule engine

Full-stack integration

Scalable monitoring architecture
