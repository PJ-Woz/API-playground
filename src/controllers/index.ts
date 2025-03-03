// Importing necessary modules from Express
import { Request, Response } from 'express';

// Defining the TestController class
export class TestController {
    // Method to handle GET requests to the /test endpoint
    public getTest(req: Request, res: Response): void {
        // Sending a simple JSON response with a message
        res.json({ message: 'Hello' });
    }
}