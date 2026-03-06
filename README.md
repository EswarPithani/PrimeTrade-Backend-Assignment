# PrimeTrade Backend Developer Assignment

This project is a scalable REST API with Authentication, Role-Based Access, and CRUD operations along with a basic React frontend for testing APIs.

---

## Tech Stack

Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt password hashing
- Swagger API Documentation

Frontend
- React.js
- Vite
- Axios

---

## Features

### Authentication
- User Registration
- User Login
- JWT Token Authentication
- Password Hashing

### Role-Based Access
- user
- admin

### Notes CRUD API
- Create Note
- Get Notes
- Update Note
- Delete Note

### Frontend
- Register user
- Login user
- Dashboard access with JWT
- CRUD operations for notes

---

## API Documentation
Swagger API Docs:
http://localhost:5000/api-docs


---

## Project Structure

backend
├── config
├── controllers
├── middleware
├── models
├── routes
├── utils
└── server.js

frontend
├── src
├── pages


Run backend:

npm run dev

### Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173
---

## Scalability Notes

This project is designed with scalable architecture:

- Modular route and controller structure
- JWT authentication middleware
- Role-based access control
- API versioning (`/api/v1`)
- Swagger documentation for easy integration

Future Improvements:
- Redis caching
- Docker containerization
- Microservices architecture
- Load balancing

Swagger API Docs:
