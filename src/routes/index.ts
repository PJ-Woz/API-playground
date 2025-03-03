import { Router } from 'express'; // Import the Router class from the express library
import { getAngel, createAngel } from '../controllers/angelController'; // Import the getAngel and createAngel functions from the angelController

const router = Router(); // Create a new router instance

// Define a route for GET requests to the /v1/angel/:angelId endpoint
router.get('/v1/angel/:angelId', getAngel); // Call the getAngel function to handle the request and response

// Define a route for POST requests to the /v1/angel endpoint
router.post('/v1/angel', createAngel); // Call the createAngel function to handle the request and response

// Function to set up routes
export const setRoutes = (app: any) => {
    app.use('/', router);
};