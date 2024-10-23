Here's a simple installation document you can use for setting up your project:

---

# Installation Guide

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Steps to Install and Run the Project

### 1. Clone the Repository
First, clone the project repository to your local machine:
```bash
git clone <https://github.com/rishabhjambhulkar/ConnectVerse/tree/main>

```

### 2. Set Up the API Server
Navigate to the `api` directory and install the required dependencies:
```bash
cd api
npm install
```

After the installation is complete, you can run the server using:
```bash
npx nodemon index.js
```

### 3. Set Up the Client
Next, navigate to the `client` directory and install the necessary dependencies:
```bash
cd client
npm install
```

To start the frontend development server, run:
```bash
npm run dev
```

## Accessing the Application
- The backend server will be running on `http://localhost:4000` (or whichever port you have configured).
- The frontend application will typically be available at `http://localhost:5173` (or the port specified in your Vite configuration).

