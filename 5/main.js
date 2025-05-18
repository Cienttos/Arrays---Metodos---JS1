const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

let letras = ['A', 'B', 'C', 'D'];
let nombres = ['Ana', 'Luis', 'Sofía'];
let frutas = ['Manzana', 'Banana', 'Pera'];

app.get('/obtener/letras', (req, res) => res.json(letras));
app.get('/obtener/nombres', (req, res) => res.json(nombres));
app.get('/obtener/frutas', (req, res) => res.json(frutas));

app.post('/splice/letras', (req, res) => {
  letras.splice(1, 2); // Elimina dos desde la posición 1
  res.json({ mensaje: 'Modificado letras' });
});

app.post('/splice/nombres', (req, res) => {
  nombres.splice(1, 0, 'Carlos'); // Inserta en la segunda posición sin eliminar
  res.json({ mensaje: 'Modificado nombres' });
});

app.post('/splice/frutas', (req, res) => {
  frutas.splice(1, 2, 'Kiwi', 'Mango'); // Reemplaza dos desde posición 1
  res.json({ mensaje: 'Modificado frutas' });
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});
