# 🚀 AI Career Assistant

## 📌 Overview

AI Career Assistant is a production-ready platform designed to help users improve their resumes, identify skill gaps, and receive personalized career guidance using AI.

It combines modern backend architecture with LLM-powered intelligence to simulate a real-world hiring assistant.

---

## 🎯 Key Features

### 📄 Resume Processing

* Upload resumes (PDF)
* Parse and extract structured data
* Identify skills, experience, and keywords

### 🧠 AI Intelligence

* Resume analysis using LLMs
* Skill extraction and classification
* Candidate scoring based on job requirements

### 🔍 Job Matching (RAG)

* Retrieve relevant job descriptions
* Match candidate profile using vector similarity
* Provide personalized recommendations

### 🤖 AI Career Chatbot

* Career guidance using LLM
* Interview preparation
* Resume improvement suggestions

### 🧾 Memory System

* Store user history
* Track improvements over time

### ⚙️ Agent Workflow

* Multi-step reasoning (LangChain agents)
* Resume → Skills → Match → Feedback pipeline

---

## 🏗️ Tech Stack

### Backend

* Node.js
* Express.js

### AI Layer

* Python
* LLM (OpenAI / local models)
* LangChain

### Database

* MongoDB (user + resume data)

### Vector Database

* FAISS / Pinecone

### Deployment

* Backend: Render
* Frontend: Vercel (planned)

---

## 📁 Project Structure

backend/
├── src/
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ └── app.js
├── server.js

ai-service/
├── resume_parser/
├── embeddings/
├── rag_pipeline/

---

## 🚧 Current Status

* ✅ Backend initialized
* ✅ Basic API structure
* ✅ Resume upload API (dummy)

---

## 🗺️ Roadmap

### Phase 1 (Backend Foundation)

* [ ] File upload (PDF)
* [ ] MongoDB integration
* [ ] User schema
* [ ] Resume storage

### Phase 2 (AI Integration)

* [ ] Resume parsing (Python service)
* [ ] Skill extraction
* [ ] Embedding generation

### Phase 3 (RAG System)

* [ ] Vector DB setup
* [ ] Job matching system

### Phase 4 (Advanced Features)

* [ ] Candidate scoring
* [ ] Chatbot
* [ ] Agent workflows

### Phase 5 (Deployment)

* [ ] Backend deployment (Render)
* [ ] Frontend (basic UI)
* [ ] End-to-end testing

---

## ⚡ Getting Started

```bash
npm install
npm run dev
```

---

## 📌 Vision

Build a system that replicates how top recruiters evaluate candidates — powered by AI.

---

## 🧠 Author Note

This project is built as a high-impact, production-level system to demonstrate full-stack + AI engineering capabilities.
