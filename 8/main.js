const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
app.use(express.json());

const roles = ['user', 'admin', 'guest'];
const colores = ['rojo', 'azul', 'amarillo', 'verde'];
let numeros = [10, 20, 30];

app.get('/includes/admin', (req, res) => {
  res.json({ existe: roles.includes('admin') });
});
app.get('/includes/verde', (req, res) => {
  res.json({ existe: colores.includes('verde') });
});
app.post('/includes/numero', (req, res) => {
  const { num } = req.body;
  if (numeros.includes(num)) {
    res.json({ mensaje: 'Ya existe' });
  } else {
    numeros.push(num);
    res.json({ mensaje: 'Agregado', numeros });
  }
});

app.listen(3000, () => console.log('http://localhost:3000'));