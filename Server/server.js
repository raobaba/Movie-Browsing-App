const express = require('express');
const axios = require('axios');
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;
app.get('/api/search', async (req, res) => {
  const { query,page } = req.query; // Change this line to use req.query
  console.log(query);
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${process.env.API_KEY}&page=${page}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/filter', async (req, res) => {
  try {
    const { name, year, title } = req.query;
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&y=${year}&t=${name}&apikey=${process.env.API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
