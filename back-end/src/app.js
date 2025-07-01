import express from 'express';
import { bebidas } from './data/bebidas.js';
import { pedidos } from './data/pedidos.js';

import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

app.get("/itens/bebidas", (req, res) => {
  res.status(200).json(bebidas);
});

app.get("/pedidos", (req, res) => {
  res.status(200).json(pedidos);
});

export default app;