
## Setup

### Database Setup

1. Install MySQL and start the MySQL server.

2. Create a new MySQL database and user:
    ```sql
    CREATE DATABASE demoapp;
    CREATE USER 'Admin'@'localhost' IDENTIFIED BY 'password';
    GRANT ALL PRIVILEGES ON demoapp.* TO 'Admin'@'localhost';
    FLUSH PRIVILEGES;
    ```

3. Update your `.env` file in the `server` directory with the following environment variables:
    ```
    DB_USER=Admin
    DB_PASSWORD=password
    DB_DATABASE=demoapp
    DB_HOST=localhost
    DB_PORT=3306
    ```

### Backend Setup

1. Navigate to the `server` directory:
    ```sh
    cd server
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the backend server:
    ```sh
    node app
    ```

### Frontend Setup

1. Navigate to the `todowebapp` directory:
    ```sh
    cd todowebapp
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file based on the `.env.example` and configure your environment variables.

4. Start the React development server:
    ```sh
    npm start
    ```

### Mobile App Setup

1. Navigate to the `todomobileapp` directory:
    ```sh
    cd todomobileapp
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the Expo development server:
    ```sh
    expo start
    ```

## Running the Project

To run the entire project, ensure the backend server, React frontend, and React Native mobile app are all running:

1. Start the backend server (from the `server` directory):
    ```sh
    npm start
    ```

2. Start the React frontend (from the `todowebapp` directory):
    ```sh
    npm start
    ```

3. Start the React Native mobile app (from the `todomobileapp` directory):
    ```sh
    expo start
    ```

## CRUD Operations

The project supports full CRUD operations. Below are examples of the API endpoints:

- **Create**: `POST /api/items`
- **Read**: `GET /api/items` or `GET /api/items/:id`
- **Update**: `PUT /api/items/:id`
- **Delete**: `DELETE /api/items/:id`

