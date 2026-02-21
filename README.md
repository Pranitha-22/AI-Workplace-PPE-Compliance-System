##AI Workplace PPE Compliance System

#Overview

SafetyEye is an end-to-end AI-powered real-time workplace monitoring system designed to track occupancy levels and detect PPE (Personal Protective Equipment) compliance violations using computer vision.

The system integrates deep learning-based object detection, rule-based violation logic, alert mechanisms, and an interactive analytics dashboard.

#Problem Statement

In industrial and construction environments, lack of safety compliance (helmets, vests, masks) leads to severe workplace risks. Manual supervision is inefficient and inconsistent.

This system automates safety monitoring through AI-driven real-time surveillance analysis.

#System Architecture

The system consists of four core components:

Data Pipeline

Model Training Engine

Real-Time Detection & Violation Logic

Dashboard & Analytics Interface

#Model Training

Dataset:
Construction Site Safety Image Dataset (Roboflow – Kaggle)

Model:
YOLOv8 (Ultralytics)

Training Steps:

Preprocessed YOLO-formatted dataset

Data augmentation for robustness

Train/Validation/Test split

Hyperparameter tuning

Evaluation via mAP, Precision, Recall

Evaluation Metrics:

mAP@0.5

Precision

Recall

F1-score

Real-Time Detection Pipeline

Camera Input (Webcam / CCTV Feed)

Frame Extraction

YOLOv8 Inference

Bounding Box & Label Rendering

Violation Rule Engine (Missing Helmet / Vest / Mask)

Alert Generation

Logging to Database

Dashboard Update

Violation Logic

Example rule:

If detected class == "Person" AND no overlapping bounding box of "Helmet"
→ Mark violation: "NO HARDHAT"
→ Assign risk level
→ Log violation
→ Trigger alert

Violation states:

Detected

Confirmed

Escalated

Dashboard Features

Live camera feed with detection overlays

Real-time occupancy tracking

Active violation table

PPE compliance percentage chart

Occupancy trend graph

Alert notification system

Downloadable reports

Tech Stack

Backend:

Python

PyTorch

Ultralytics YOLOv8

OpenCV

FastAPI / Flask

Frontend:

React.js

Chart.js / Recharts

Data & Storage:

CSV / SQLite / JSON logs

Installation

Clone repository:

git clone https://github.com/yourusername/AI-Workplace-PPE-Compliance-System.git

Install dependencies:

pip install -r requirements.txt

Run backend:

python backend/app.py

Run frontend:

cd frontend
npm install
npm start
Key Engineering Highlights

Custom YOLOv8 training pipeline

Real-time multi-camera inference

Rule-based safety violation engine

Risk scoring logic

Compliance percentage analytics

Structured logging system

Full-stack integration

Future Improvements

Deploy using Docker

Integrate cloud model serving

Multi-site monitoring support

Automated email escalation

Edge device deployment
