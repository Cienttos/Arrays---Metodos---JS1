const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const nombres = ['Ana', 'Luis', 'Pedro'];
const numeros = [2, 4, 6, 8];
const personas = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 25 },
  { nombre: 'Pedro', edad: 30 }
];

app.get('/foreach/saludo', (req, res) => {
  const saludos = [];
  nombres.forEach(nombre => saludos.push(`Hola, ${nombre}!`));
  res.json(saludos);
});
app.get('/foreach/doble', (req, res) => {
  const dobles = [];
  numeros.forEach(num => dobles.push(num * 2));
  res.json(dobles);
});
app.get('/foreach/edades', (req, res) => {
  const lista = [];
  personas.forEach(p => lista.push(`${p.nombre} tiene ${p.edad} años`));
  res.json(lista);
});

app.listen(3000, () => console.log('http://localhost:3000'));