const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const palabras = ['gato', 'perro', 'loro'];
const numeros = [10, 20, 30, 40, 50];
const ciudades = ['Lima', 'Bogotá', 'Madrid', 'Quito'];

app.get('/indexof/palabra', (req, res) => {
  res.json({ index: palabras.indexOf('perro') });
});
app.get('/indexof/numero', (req, res) => {
  res.json({ index: numeros.indexOf(50) });
});
app.get('/indexof/ciudad', (req, res) => {
  const idx = ciudades.indexOf('Madrid');
  res.json({ mensaje: idx !== -1 ? `Madrid está en la posición ${idx}` : 'Madrid no está' });
});

app.listen(3000, () => console.log('http://localhost:3000'));