# Simple Test API

This project is a simple API built using TypeScript and Express. It serves as a basic template for creating RESTful APIs.

## Project Structure

```
simple-test-api
├── src
│   ├── app.ts               # Main entry point of the application
│   ├── controllers          # Contains controllers for handling requests
│   │   └── index.ts         # Exports TestController class
│   ├── routes               # Defines API routes
│   │   └── index.ts         # Exports setRoutes function
│   └── types                # Contains TypeScript types
│       └── index.ts         # Exports interfaces for request and response objects
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd simple-test-api
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

## Usage

Once the application is running, you can access the API at `http://localhost:3000/test`. This endpoint will return a simple message.

## License

This project is licensed under the MIT License.