# SafetyEye
## AI-Powered Workplace PPE Compliance & Occupancy Monitoring System

SafetyEye is a real-time AI surveillance system that detects PPE violations and tracks workplace occupancy using a custom-trained YOLOv8 model.

---

## Core Features

- Custom YOLOv8 model trained on construction safety dataset  
- Real-time multi-camera detection  
- PPE detection: Helmet, Mask, Safety Vest  
- Rule-based violation engine  
- Risk classification (Low / Medium / High)  
- Alert generation and logging  
- Live dashboard with compliance analytics  
- Occupancy trend visualization  

---

## System Architecture

Camera Feed → Frame Processing → YOLOv8 Inference →  
Violation Logic → Alert System → Database Logging →  
Live Dashboard (Analytics + Compliance Stats)

---

## Model Performance

- Precision: 90.5%  
- Recall: 77.4%  
- mAP@50: 84.9%  
- Inference Speed: ~5 ms per frame  

---

## Technology Stack

### Deep Learning
- YOLOv8 (Ultralytics)  
- PyTorch  

### Backend
- Python  
- Flask  
- Socket.IO  

### Frontend
- React.js  

### Computer Vision
- OpenCV  

---

## Dataset

- Construction Site Safety Image Dataset  
- Source: Kaggle (Roboflow)  
- Classes: Helmet, Mask, Safety Vest, NO-Helmet, NO-Mask, NO-Safety Vest, Person, Machinery, Vehicle  

---

## Run Locally

### Backend
```bash
pip install -r requirements.txt
python app.py

