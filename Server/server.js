// server/server.js
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 8000;

// Serve the React app's static files
app.use(express.static(path.join(__dirname, '../client/build')));

// Proxy API requests to the movie database API
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=YOUR_API_KEY`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle all other requests by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
