# ACE.IT
A cloud-native, data-driven logging, processing, and analysis platform designed to track and optimize family dynamics, children's behavior, and household routines. By engineering a seamless pipeline from daily data entry to predictive modeling, this project surfaces actionable insights to improve overall quality of life.

## Core Features
*   **Multi-Child Daily Logging:** A responsive frontend tracking variables across three columns (Emelia, César, Artur) covering sleep/wake times, school moods, behavioral triggers (*Schimpfwörter und Gewalt*), and rewards.
*   **Dynamic State Tracking:** Monitoring of household environmental routines (*Kitchen state, Room cleanliness, App routines*) alongside external variables (*Sunset, Sunrise, School schedules*).
*   **Algorithmic Rotation & Governance:** Automated tracking of daily rotations (e.g., bed rotation order: Emelia -> Cesar -> Artur) with override logic for behavioral penalties (skipping turns).
*   **Financial & Behavioral Correlates:** Integrating financial impact tracking (*Bomad App logic*) to cross-reference behavioral lapses with financial or privilege loss.
*   **Predictive Alerts & Intervention:** A machine learning engine that processes historical logs to trigger proactive recommendations (e.g., "Compensate for a bad day" alerts based on poor sleep and school moods).

---

## Architecture & Tech Stack

### 1. Frontend & Ingestion
*   **UI:** Lightweight web application (HTML/JS) optimized for quick, daily data entry.
*   **Diary/Vibe Uploaders:** Integration capabilities for qualitative voice/text note diary updates (*Mein Gefühlsrad app*).

### 2. Backend & Cloud Infrastructure (AWS SAA-C03 Focused)
*   **API Layer:** Amazon API Gateway handling RESTful requests from the frontend.
*   **Compute:** AWS Lambda (Serverless Python functions) ensuring a zero-cost, scale-to-zero backend footprint.
*   **Database:** Amazon DynamoDB (NoSQL) utilizing flexible schemas to handle evolving behavioral metrics over time.

### 3. Data Engineering & Machine Learning (DP-100 Focused)
*   **Data Pipeline:** Scheduled exports of DynamoDB transactional data into Amazon S3 as a data lake.
*   **Analytics & Modeling:** AWS SageMaker pipelines to clean data, perform Exploratory Data Analysis (EDA), and train predictive models to forecast behavioral meltdowns and identify root causes.

---

## Current Status
- [x] Define project scope and architecture overview.
- [ ] Design DynamoDB table schema.
- [ ] Build local frontend HTML template.
- [ ] Deploy AWS Lambda and API Gateway backend.
- [ ] Connect Frontend to AWS Database.
