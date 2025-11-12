# 💡 SkillSwap – A Collaborative Learning Platform

**SkillSwap** is a full-stack web application built using the **MERN (MongoDB, Express, React, Node.js)** stack that enables users to **share skills and learn from each other**.
It’s a platform where learners and professionals can **create profiles, list their skills, connect with others, and exchange knowledge** — fostering a collaborative and community-driven learning environment.

## 🚀 Features

### 👤 User Authentication

* Secure **sign up** and **login** using **JWT (JSON Web Tokens)** for authentication.
* Passwords are encrypted using **bcryptjs** for enhanced security.

### 🧠 Skill Management

* Users can **add their skills**, **work experience**, and **bio** to showcase expertise.
* Each user has a personalized profile with optional **profile photo upload** (via `multer`).

### 🔐 Secure Backend

* Backend built using **Express.js** and **MongoDB** with **Mongoose ODM** for schema management.
* Implements strong error handling and secure environment variable management with `.env`.

### 💬 API Endpoints

* RESTful API for signup, login, and profile retrieval.
* Token-based access control for protected routes.

### 🖥️ Responsive Frontend

* Built with **React.js** and **React Router** for seamless navigation.
* Uses **Axios** for API calls and **React Icons** for a modern UI.

### ☁️ Deployment

* **Frontend:** Deployed on **Vercel**.
* **Backend:** Deployed on **Render** (or any Node.js server).
* MongoDB hosted on **MongoDB Atlas** (or local MongoDB instance).

## 🛠️ Tech Stack

| Layer              | Technology                                 |
| ------------------ | ------------------------------------------ |
| **Frontend**       | React.js, React Router, Axios, React Icons |
| **Backend**        | Node.js, Express.js                        |
| **Database**       | MongoDB (via Mongoose)                     |
| **Authentication** | JWT (jsonwebtoken), bcryptjs               |
| **File Uploads**   | Multer                                     |
| **Deployment**     | Vercel (Frontend), Render (Backend)        |

---

## ⚙️ Project Setup

### 🔸 Prerequisites

Make sure you have installed:

* Node.js (v22.x recommended)
* npm (v10+)
* MongoDB (local or Atlas)

### 🔸 Installation Steps

```bash
# Clone the repository
git clone https://github.com/Tejesh-2004/SkillSwap.git
cd SkillSwap
```

#### 🔹 Backend Setup

```bash
cd server
npm install
# Add your .env file
MONGO_URI=mongodb://localhost:27017/skillswap
PORT=5000
JWT_SECRET=<your-secret-key>
node server.js
```

#### 🔹 Frontend Setup

```bash
cd ../client
npm install
npm start
```

Then open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🌍 Deployment Info

| Component    | Platform | URL                                                                            |
| ------------ | -------- | ------------------------------------------------------------------------------ |
| **Frontend** | Vercel   | [https://skillswap.vercel.app](https://skillswap.vercel.app)                   ||

---

## 📷 Screenshots *(Optional section)*

You can later add:

* 🧾 Login / Signup page
* 👤 Profile page
* 🧠 Skill listing section

---

## 🤝 Contributors

**Developed by:**
👤 [Tejesh](https://github.com/Tejesh-2004)

