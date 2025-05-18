const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const numeros = [2, 4, 6, 8];
const nombres = ['ana', 'luis', 'pedro'];
const precios = [100, 200, 300];

app.get('/map/x3', (req, res) => {
  res.json(numeros.map(n => n * 3));
});
app.get('/map/mayus', (req, res) => {
  res.json(nombres.map(n => n.toUpperCase()));
});
app.get('/map/iva', (req, res) => {
  res.json(precios.map(p => (p * 1.21).toFixed(2)));
});

app.listen(3000, () => console.log('http://localhost:3000'));