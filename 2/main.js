const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const animales = ['Perro', 'Gato', 'Pez'];
const productos = ['Pan', 'Leche', 'Huevos'];
const datos = ['uno', 'dos', 'tres', 'cuatro'];

app.post('/pop/animales', (req, res) => {
    const eliminado = animales.pop();
    res.json({ eliminado, restantes: animales });
});

app.post('/pop/productos', (req, res) => {
    const eliminado = productos.pop();
    res.json({ eliminado, restantes: productos });
});

app.post('/pop/datos', (req, res) => {
    const eliminados = [];
    while (datos.length > 0) eliminados.push(datos.pop());
    res.json({ eliminados });
});

app.get('/obtener/animales', (req, res) => res.json(animales));
app.get('/obtener/productos', (req, res) => res.json(productos));
app.get('/obtener/datos', (req, res) => res.json(datos));

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
