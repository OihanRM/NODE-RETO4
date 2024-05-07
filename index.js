// Filename: index.js

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Import path module for file paths

console.log('Running AFG web service index');

// Import Router
const apiRoutes = require("./api-routes");

// Initialize the app
const app = express();

// Enable CORS
app.use(cors());

// Configure body-parser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/afg', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

if (!db) {
    console.log("Error connecting to db");
} else {
    console.log("DB connected successfully");
}

// Setup server port
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route for serving index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Launch app to listen to specified port
app.listen(port, () => {
    console.log(`Running RestHub for AFG on port ${port}`);
});

// Define API routes
app.use('/api', apiRoutes);
