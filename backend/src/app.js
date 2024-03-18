// Import the express module
const express = require("express");

// Import the spotifyRoute module
const spotifyRoute = require("./routers/spotifyRoute.js"); // Assuming 'spotifyRoute.mjs' is the ESM file

// Create an express app
const app = express();

// Use the spotifyRoute middleware
app.use("/app/v1/spotify/", spotifyRoute);

// Export the app
module.exports = app;
