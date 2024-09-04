

1. **Create Docker Network**

   Create a custom Docker network for the project:

   ```bash
   docker network create money-tracker-network
   ```

2. **Create Docker Volume**

   Create a volume to persist PostgreSQL data:

   ```bash
   docker volume create postgres-data
   ```

3. **Build and Run the Containers**

   Use Docker Compose to build and run the project containers:

   ```bash
   docker compose up -d --build
   ```

   This command will build the images and start the containers in detached mode.

## Accessing the Application

- **Angular Frontend**: Access the Angular application at `http://localhost:4200`.

- **Spring Boot Backend**: The Spring Boot application will be available at `http://localhost:8080`.

- **PostgreSQL Database**: The PostgreSQL database is accessible at `jdbc:postgresql://money-tracker-postgres:5432/money-tracker` with the credentials `root/root`.

## Stopping the Containers

To stop the running containers, use:

```bash
docker compose down
```