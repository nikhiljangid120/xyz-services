# XYZ Technologies - Corporate Website

A modern, fully responsive corporate website for XYZ Technologies, featuring a React frontend and Node.js/Express backend with dual-database integration (SQL & NoSQL).

## 🚀 Features

- **Modern UI/UX**: Glassmorphism design, smooth scroll animations (Framer Motion), and responsive layout.
- **Pages**: Home, Services, About Us, Contact.
- **Backend API**: Node.js/Express server handling contact form submissions.
- **Dual Database Strategy**:
  - **SQL**: SQLite (`server/data/contacts.sqlite`)
  - **NoSQL**: NeDB (`server/data/contacts.db`)

## 🛠 Tech Stack

- **Frontend**: React (Vite), React Router, Framer Motion, Lucide React (Icons), CSS Modules (Variables).
- **Backend**: Node.js, Express, CORS.
- **Database**: SQLite3, NeDB.

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14+ recommended)

### 1. Backend Setup
```bash
cd server
npm install
npm start
```
Server runs on `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```
Client runs on `http://localhost:5173`.

## 🧪 Verification

1. Open the website.
2. Navigate to the **Contact** page.
3. Fill out the form and submit.
4. Check the server console for "Saved to SQLite" and "Saved to NeDB" logs.

## 📱 Responsiveness

The application is fully responsive and optimized for Desktop, Tablet, and Mobile devices.

## 📄 License
MIT
