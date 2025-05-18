const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const frutas = [];
const amigos = [];
const numeros = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 

app.post('/enviar/frutas', (req, res) => {
    frutas.push(req.body.valor);
    res.sendStatus(200);
});

app.post('/enviar/amigos', (req, res) => {
    amigos.push(req.body.valor);
    res.sendStatus(200);
});

app.post('/enviar/numeros', (req, res) => {
    const num = Number(req.body.valor);
    if (numeros.length === 0 || num > numeros[numeros.length - 1]) {
        numeros.push(num);
    }
    res.sendStatus(200);
});

app.get('/obtener/frutas', (req, res) => {
    res.json(frutas);
});

app.get('/obtener/amigos', (req, res) => {
    res.json(amigos);
});

app.get('/obtener/numeros', (req, res) => {
    res.json(numeros);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
    