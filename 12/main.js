const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const numeros = [2, 4, 6, 8];
const enteros = [1, 2, 3, 4];
const productos = [
  { precio: 100 },
  { precio: 200 },
  { precio: 300 }
];

app.get('/reduce/suma', (req, res) => {
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  res.json({ resultado: suma });
});
app.get('/reduce/multi', (req, res) => {
  const multi = enteros.reduce((acc, n) => acc * n, 1);
  res.json({ resultado: multi });
});
app.get('/reduce/total', (req, res) => {
  const total = productos.reduce((acc, obj) => acc + obj.precio, 0);
  res.json({ resultado: total });
});

app.listen(3000, () => console.log('http://localhost:3000'));