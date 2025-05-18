const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const numeros = [5, 12, 8, 130, 44];
const palabras = ['sol', 'mariposa', 'elefante', 'luz', 'computadora'];
const usuarios = [
  { nombre: 'Ana', activo: true },
  { nombre: 'Luis', activo: false },
  { nombre: 'Pedro', activo: true }
];

app.get('/filter/mayores10', (req, res) => {
  res.json(numeros.filter(n => n > 10));
});
app.get('/filter/palabras', (req, res) => {
  res.json(palabras.filter(p => p.length > 5));
});
app.get('/filter/activos', (req, res) => {
  res.json(usuarios.filter(u => u.activo).map(u => u.nombre));
});

app.listen(3000, () => console.log('http://localhost:3000'));