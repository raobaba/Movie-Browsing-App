const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
