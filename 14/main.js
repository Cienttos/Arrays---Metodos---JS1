const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const letras = ['a', 'b', 'c', 'd', 'e'];
const numeros = [1, 2, 3, 4, 5];

app.get('/reverse/letras', (req, res) => {
  res.json([...letras].reverse());
});
app.get('/reverse/numeros', (req, res) => {
  res.json([...numeros].reverse());
});
app.post('/reverse/texto', (req, res) => {
  const { texto } = req.body;
  const invertido = texto.split('').reverse().join('');
  res.json({ resultado: invertido });
});

app.listen(3000, () => console.log('http://localhost:3000'));