// Importing the required modules from Express
import express from 'express'; // Express framework for building web applications
import bodyParser from 'body-parser'; // Middleware for parsing request bodies
import { setRoutes } from './routes/index'; // Importing the function to set up routes

// Creating an instance of an Express application
const app = express(); 

// Middleware to parse JSON request bodies
app.use(bodyParser.json()); 

// Setting up the routes for the application
setRoutes(app); 

// Defining the port number for the server to listen on
const PORT = process.env.PORT || 3000; 

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Logging a message to indicate the server is running
});