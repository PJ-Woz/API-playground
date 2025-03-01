import { Router } from 'express'; // Import the Router class from the express library
import { TestController } from '../controllers'; // Import the TestController from the controllers directory

const router = Router(); // Create a new router instance

// Define a route for GET requests to the /test endpoint
router.get('/test', (req, res) => {
    const controller = new TestController(); // Create an instance of TestController
    controller.getTest(req, res); // Call the getTest method to handle the request and response
});

// Function to set up routes
export const setRoutes = (app: any) => {
    app.use('/', router);
};