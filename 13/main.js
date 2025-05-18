const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const numeros = [40, 1, 5, 200, 15];
const palabras = ['sol', 'mariposa', 'elefante', 'luz', 'computadora'];
const personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 25 },
  { nombre: 'Pedro', edad: 18 }
];

app.get('/sort/numeros', (req, res) => {
  res.json([...numeros].sort((a, b) => a - b));
});
app.get('/sort/palabras', (req, res) => {
  res.json([...palabras].sort());
});
app.get('/sort/edades', (req, res) => {
  const ordenado = [...personas].sort((a, b) => a.edad - b.edad);
  res.json(ordenado.map(p => `${p.nombre} (${p.edad} años)`));
});

app.listen(3000, () => console.log('http://localhost:3000'));