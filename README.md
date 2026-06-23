# 🚀 Full Stack CI/CD Pipeline

> Production-ready end-to-end DevOps pipeline built using React, Node.js, Docker, GitHub Actions, Docker Hub and Render.

This project was created to demonstrate practical DevOps skills by automating the entire deployment lifecycle instead of focusing only on CRUD functionality.

---

## 🎯 Project Objective

The main objective of this project was to build a complete CI/CD pipeline where every code push automatically:

- Builds Docker images
- Pushes images to Docker Hub
- Triggers deployment on Render
- Pulls the latest image
- Deploys the application to production

This project demonstrates how modern deployment automation works in real-world applications.

---

## 🏗️ System Architecture

```text
                Developer
                    │
                    │
                Git Push
                    │
                    ▼

          GitHub Repository
                    │
                    ▼

           GitHub Actions CI
                    │
         ┌──────────┴──────────┐
         │                     │
         ▼                     ▼

 Build Frontend Image   Build Backend Image
         │                     │
         ▼                     ▼

      Docker Hub          Docker Hub
         │                     │
         ▼                     ▼

 Render Deploy Hook   Render Deploy Hook
         │                     │
         ▼                     ▼

 Render Pull Latest   Render Pull Latest
      Docker Image      Docker Image
         │                     │
         ▼                     ▼

Frontend Production   Backend Production
```

---

## ⚙️ Tech Stack

### Frontend

- React
- Vite
- Bootstrap

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### DevOps

- Docker
- Docker Hub
- GitHub Actions
- Render
- Deploy Hooks
- GitHub Secrets

---

## 📁 Project Structure

```text
.
├── frontend
│
├── backend
│
└── .github
    └── workflows
        ├── frontend.yml
        └── backend.yml
```

---

## 🔄 CI/CD Workflow

### Frontend Pipeline

```text
Frontend Code Change
          │

      Git Push
          │

 GitHub Actions Run
          │

Docker Image Build
          │

Push To Docker Hub
          │

Trigger Render Hook
          │

Render Pull Latest Image
          │

Frontend Deployed
```

---

### Backend Pipeline

```text
Backend Code Change
          │

      Git Push
          │

 GitHub Actions Run
          │

Docker Image Build
          │

Push To Docker Hub
          │

Trigger Render Hook
          │

Render Pull Latest Image
          │

Backend Deployed
```

---

## ✨ Features

- ✅ React frontend containerized using Docker
- ✅ Node.js backend containerized using Docker
- ✅ MongoDB Atlas integration
- ✅ GitHub Actions automation
- ✅ Docker Hub integration
- ✅ Render automated deployment
- ✅ Deploy Hooks integration
- ✅ Environment variable management
- ✅ Production deployment automation
- ✅ End-to-end CI/CD pipeline

---

## 🔐 Environment Variables

### Frontend

```env
VITE_BACKEND_URL=your_backend_url
```

### Backend

```env
MONGO_URI=your_mongodb_connection_string

PORT=3001
```

---

## 🧠 Problems Solved During Development

This project involved solving multiple real-world deployment issues:

- Docker image automation
- Render deployment configuration
- Environment variable handling
- Vite build-time variables
- Port binding issues
- GitHub Secrets management
- Docker Hub image synchronization
- Production debugging

---

## 🎓 Skills Demonstrated

### Development

- React
- Node.js
- Express.js
- MongoDB Atlas

### DevOps

- Git
- GitHub
- Docker
- Docker Hub
- GitHub Actions
- CI/CD
- Render
- Deploy Hooks
- GitHub Secrets
- Environment Variables
- Production Debugging

---

## 🧠 Key Learning

Building a CRUD application was straightforward.

The actual challenge was designing, automating and debugging a complete production deployment pipeline.

This project focuses more on DevOps practices and CI/CD implementation rather than CRUD functionality.

---

## 🚀 Future Improvements

- Kubernetes deployment
- AWS deployment
- Nginx reverse proxy
- Monitoring integration
- Logging integration

---

## 👨‍💻 Author

Mohd Tajul

GitHub: https://github.com/mohdtajul