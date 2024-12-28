/* Especialidades:
    - marketing
    - developers
    - QAs
    - ventas
*/


import {home, marketing, developers, qas, ventas} from './creaHtml.mjs';
import express from 'express';
/* const express = require('express'); */

const app = express();
const port = 3000;

// HOME ----------------------------
app.get('/', (req, res) => {
    res.send(home()); // home
});

// MARKETING -----------------------
app.get('/marketing', (req, res) => {
    res.send(marketing());
});

// DEVELOPERS ----------------------
app.get('/developers', (req, res) => {
    res.send(developers());
});

// QAS -----------------------------
app.get('/qas', (req, res) => {
    res.send(qas());
});

// VENTAS --------------------------
app.get('/ventas', (req, res) => {
    res.send(ventas());
});

// 404 Error -----------------------
app.use((req, res) => {
    res.status(404).send('Not Found');
});


app.listen(port, () => {
    console.log('listening on port ' + port);
});