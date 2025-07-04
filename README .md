# Infiflow

Project to depict internal workflows for our apps.

A full-stack application for managing workflows and their associated JSON data.  
The backend is built with Node.js, Express, PostgreSQL, and OpenTelemetry tracing.  
The frontend is a React app for browsing, editing, and viewing workflow JSONs.

---

## Features

- List, view, and select workflows
- View and select JSONs associated with a workflow
- Edit and validate JSON data in a user-friendly editor
- Backend API with DTO pattern and PostgreSQL integration
- Logging with Winston and request logging with Morgan
- Distributed tracing with OpenTelemetry (Jaeger/OTLP)
- Modular, type-safe codebase (TypeScript)

---

## Project Structure

```
json_configurator/
│
├── json-editor-be/                # Backend (Node.js/Express)
│   ├── src/
│   │   ├── controllers/           # Express route controllers
│   │   ├── db/                    # Database connection (pg Pool)
│   │   ├── dto/                   # Data Transfer Objects (DTOs)
│   │   ├── queries/               # SQL query modules
│   │   ├── routes/                # Express route definitions
│   │   ├── utils/                 # Logger, tracing, etc.
│   │   └── index.ts               # App entry point
│   └── package.json
│
├── json-editor/                   # Frontend (React)
│   ├── src/
│   │   ├── api/                   # API service modules
│   │   ├── components/            # React components
│   │   ├── context/               # React context providers
│   │   ├── hooks/                 # Custom React hooks
│   │   ├── types/                 # TypeScript types/interfaces
│   │   └── App.tsx                # Main app
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- PostgreSQL (running locally or in a container)
- Docker (for Jaeger tracing, optional but recommended)

---

### Backend Setup

1. **Install dependencies:**
   ```sh
   cd json-editor-be
   npm install
   ```

2. **Configure PostgreSQL:**
   - Start PostgreSQL (e.g., with Podman/Docker):
     ```
     podman run --name postgresDB -e POSTGRES_USER=base -e POSTGRES_PASSWORD=base -p 5434:5432 -d postgres:16-alpine
     ```
   - Create tables and insert sample data (see below).

3. **Run Jaeger for tracing (optional):**
   ```sh
   podman run -d --name jaeger ^
     -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 ^
     -p 16686:16686 -p 14268:14268 -p 4318:4318 ^
     jaegertracing/all-in-one:latest
   ```
   - Jaeger UI: [http://localhost:16686](http://localhost:16686)

4. **Start the backend:**
   ```sh
   npm run dev
   ```

---

### Frontend Setup

1. **Install dependencies:**
   ```sh
   cd json-editor
   npm install
   ```

2. **Start the frontend:**
   ```sh
   npm run dev
   ```
   - App runs at [http://localhost:5173](http://localhost:5173) (default Vite port)

---

## Database Schema & Sample Data

**workflow**
```sql
CREATE TABLE workflow (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
```

**json_data**
```sql
CREATE TABLE json_data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    id_wf INTEGER REFERENCES workflow(id),
    data JSONB NOT NULL
);
```

**Sample Data:**
```sql
INSERT INTO workflow (name) VALUES ('Workflow A'), ('Workflow B');

INSERT INTO json_data (name, id_wf, data) VALUES
  ('JSON_A1', 1, '{
    "messageId": "GSJ-NEON-759-030",
    "orderCode": "-0",
    "orderState": "UNLOADED",
    "stationCode": "B81MPA_AP305"
  }'),
  ('JSON_B1', 2, '{
    "messageId": "GSJ-NEON-759-031",
    "orderCode": "-1",
    "orderState": "LOADED",
    "stationCode": "B81MPA_AP306"
  }');
```

---

## Tracing & Logging

- **Logging:** Uses Winston for application logs and Morgan for HTTP request logs.
- **Tracing:** Uses OpenTelemetry with OTLP exporter. Traces are viewable in Jaeger UI.

---

## API Endpoints

- `GET /api/v1/workflow` — List all workflows
- `GET /api/v1/workflow/:id` — Get workflow by ID (with JSONs)

---

## License

MIT

---

## Author

Florian Hecking