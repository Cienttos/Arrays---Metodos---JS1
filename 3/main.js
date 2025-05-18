const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const colores = [];
const tareas = ['Lavar platos', 'Hacer la cama'];
const usuarios = ['Ana', 'Luis'];

app.post('/unshift/colores', (req, res) => {
  colores.unshift('Rojo', 'Verde', 'Azul');
  res.json({ colores });
});

app.post('/unshift/tareas', (req, res) => {
  tareas.unshift('¡Pagar facturas!');
  res.json({ tareas });
});

app.post('/unshift/usuario', (req, res) => {
  const { nombre } = req.body;
  if (nombre) usuarios.unshift(nombre);
  res.json({ usuarios });
});

app.get('/obtener/colores', (req, res) => res.json(colores));
app.get('/obtener/tareas', (req, res) => res.json(tareas));
app.get('/obtener/usuarios', (req, res) => res.json(usuarios));

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
