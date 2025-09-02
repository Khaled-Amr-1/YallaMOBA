// src/server.ts
import express from 'express';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello from Express!'));

export default app;
