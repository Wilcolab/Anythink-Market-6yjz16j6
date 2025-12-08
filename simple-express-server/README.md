# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the setup of an Express application with Docker and Nodemon for automatic reloading during development.

## Project Structure

```
simple-express-server
├── Dockerfile
├── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Docker (for running the application in a container)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd simple-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server using Nodemon, run:

```
yarn start
```

The server will listen on port 8001.

### Running with Docker

To build and run the application using Docker, follow these steps:

1. Build the Docker image:

   ```
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.