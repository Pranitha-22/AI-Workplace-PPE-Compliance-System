# SafetyEye
## AI-Powered Workplace PPE Compliance & Occupancy Monitoring System

SafetyEye is a real-time AI-based surveillance system that detects PPE (Helmet, Mask, Safety Vest) violations and monitors workplace occupancy using a custom-trained YOLOv8 model. The system integrates deep learning, rule-based compliance logic, and a live analytics dashboard for industrial safety environments.

---

## 🚀 Core Features

- Custom-trained YOLOv8 model for PPE detection  
- Real-time multi-camera monitoring  
- Person detection and occupancy counting  
- Rule-based violation engine  
- Temporal validation logic to reduce false positives  
- Risk classification (Low / Medium / High)  
- Alert generation and logging  
- Live dashboard with compliance analytics  
- Occupancy trend visualization  

---

## 🧠 System Architecture

**Pipeline:**

Camera Feed  
→ Frame Processing (OpenCV)  
→ YOLOv8 Inference  
→ Violation Logic Engine  
→ Alert System  
→ Database Logging  
→ Live Dashboard (Analytics + Compliance Stats)

---

## 📊 Model Details

- Model: YOLOv8 (Ultralytics)  
- Framework: PyTorch  
- Dataset: Construction Site Safety Image Dataset (Roboflow / Kaggle)  
- Data Augmentation applied for robustness  

### Performance Metrics

- Precision: 90.5%  
- Recall: 77.4%  
- mAP@50: 84.9%  
- Average Inference Speed: ~5 ms per frame  

---

## 🗂 Dataset

- Source: https://www.kaggle.com/datasets/construction-site-safety-image-dataset-roboflow  
- Classes:
  - Helmet  
  - Mask  
  - Safety Vest  
  - NO-Helmet  
  - NO-Mask  
  - NO-Safety Vest  
  - Person  
  - Machinery  
  - Vehicle  

---

## 🖥 Dashboard Capabilities

- Live video stream with detection overlays  
- Active violation table  
- PPE compliance percentage visualization  
- Occupancy tracking  
- Alert severity classification  
- Historical violation logs  

---

## ⚙️ Technology Stack

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

### Data Storage
- SQLite / CSV Logging  

---

## 🛠 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/AI-Workplace-PPE-Compliance-System.git
cd AI-Workplace-PPE-Compliance-System
```

### Backend Setup

```bash
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📌 Engineering Highlights

- End-to-end YOLOv8 training pipeline  
- Real-time inference optimization  
- Custom PPE violation rule engine  
- Scalable multi-camera architecture  
- Full-stack AI system integration  
- Structured logging and alert management  

---

## 🔮 Future Improvements

- Docker-based deployment  
- Cloud-based model serving  
- Edge device deployment  
- Automated email/SMS escalation  
- Multi-site monitoring support  

---
