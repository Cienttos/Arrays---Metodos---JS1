const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const numeros = [10, 20, 30, 40, 50, 60];
const peliculas = ['Matrix', 'Inception', 'Avatar', 'Titanic', 'Rocky'];
const letras = ['A', 'B', 'C', 'D', 'E', 'F'];

app.get('/slice/numeros', (req, res) => {
  res.json(numeros.slice(0, 3));
});
app.get('/slice/peliculas', (req, res) => {
  res.json(peliculas.slice(2, 5));
});
app.get('/slice/letras', (req, res) => {
  res.json(letras.slice(-3));
});

app.listen(3000, () => console.log('http://localhost:3000'));