const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

const API_KEY = '3bf006d9547742b791df11f63f810b2f';

app.get('/top-headlines', async (req, res) => {
  const { category } = req.query;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.get('/everything', async (req, res) => {
  const { q } = req.query;
  const url = `https://newsapi.org/v2/everything?q=${q}&sortBy=popularity&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log('Proxy running on port 3000'));