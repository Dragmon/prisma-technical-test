import express from 'express';
import cors from 'cors';

import postsRoutes from './routes/posts.routes.js';

const app = express();
const whiteList = [
  'http://localhost:8080',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:3005',
];
app.use(express.json());

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/api', postsRoutes);

app.listen(3005);
