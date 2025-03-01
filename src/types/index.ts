// This file defines TypeScript interfaces for request and response objects used in the API.
// It extends the types from the Express library to ensure type safety in the application.

import { Request, Response } from 'express'; // Importing Request and Response types from Express

// Defining an interface for the response structure of the /test endpoint
export interface TestResponse extends Response {
    message: string; // The response will include a message property of type string
}

// Defining an interface for the request structure for the /test endpoint
export interface TestRequest extends Request {
    // You can add additional properties here if needed in the future
}