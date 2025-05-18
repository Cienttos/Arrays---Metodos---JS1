const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const numeros = [10, 20, 30, 40, 50];
const mensajes = ['Hola', '¿Cómo estás?', 'Necesito ayuda'];
const colaAtencion = ['Cliente 1', 'Cliente 2', 'Cliente 3'];

app.post('/shift/numeros', (req, res) => {
  numeros.shift();
  res.json({ numeros });
});

app.post('/shift/mensajes', (req, res) => {
  mensajes.shift();
  res.json({ mensajes });
});

app.post('/shift/cola', (req, res) => {
  colaAtencion.shift();
  res.json({ colaAtencion });
});

app.get('/obtener/numeros', (req, res) => res.json(numeros));
app.get('/obtener/mensajes', (req, res) => res.json(mensajes));
app.get('/obtener/cola', (req, res) => res.json(colaAtencion));

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
