// Import the required module
const express = require('express');
const app = express();

// Set the port
const PORT = 3000;

// Define a route to return the current time
app.get('/api/time', (req, res) => {
    const currentTime = new Date().toISOString(); // Get current time in ISO format
    res.json({ time: currentTime }); // Respond with the time
});

// Start the server
app.listen(PORT, () => {
    console.log(`Time API is running on http://localhost:${PORT}`);
});
