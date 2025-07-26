*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               # Task Hive

A task management application built with Angular and JSON Server.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

### Option 1: Run both servers simultaneously (Recommended)
```bash
npm run start:dev
```
This command will start both the JSON server (on port 3000) and the Angular development server (on port 4200) concurrently.

### Option 2: Run servers separately

1. Start the JSON Server (in one terminal):
```bash
npm run start:server
```
This will start the JSON server on `http://localhost:3000`

2. Start the Angular development server (in another terminal):
```bash
npm start
```
This will start the Angular app on `http://localhost:4200`

## API Endpoints

The JSON server provides the following endpoints:

- `GET /users` - Get all users
- `GET /users?username={username}&password={password}` - Login
- `POST /users` - Register new user
- `GET /tasks` - Get all tasks
- `POST /tasks` - Create new task
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Delete task
- `GET /projects` - Get all projects
- `GET /status` - Get all status options
- `POST /status` - Create new status

## Default Users

- **Admin**: username: `admin`, password: `admin`
- **Developer**: username: `dev`, password: `dev`

## Features

- User authentication and authorization
- Task management (CRUD operations)
- Project management
- Status management
- Role-based access control

## Development

The application uses Angular proxy configuration to route API calls from `/api/*` to the JSON server running on port 3000. This eliminates CORS issues during development.

## Data Storage

All data is stored in `db.json` file. The JSON server automatically handles ID generation and data persistence.