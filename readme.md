# Workelate-assignment

A book review platform where users can browse books, read and write reviews, and
rate books.

## Tech Stack

- **Frontend:** React.js, Tailwind, Mantine UI
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)


## Setup Instructions

### 1. Clone the Repository

```bash
git https://github.com/Pragyan14/Workelate-assignment
cd Workelate-assignment
```

### 2. Navigate to Backend Directory

```bash
cd Backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Set up Environment Variables
Create a .env file inside the Backend folder with the following keys:
```bash
PORT=3000
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_db_name
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=your_access_token
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=refresh_token
REFRESH_TOKEN_EXPIRY=10d
```

### 5. Run the Backend Server
```bash
npm run dev
```

### Frontend Setup

### 6. Navigate to Frontend Directory
```bash
cd ../frontend
```

### 7. Install Dependencies
```bash
npm install
```

### 9. Run the Frontend Server
```bash
npm run dev
```
