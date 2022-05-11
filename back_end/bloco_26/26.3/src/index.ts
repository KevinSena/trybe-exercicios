import express, { Express, Request, Response } from "express";
import "express-async-errors"

import userRouter from './routes/userRoute';

const app: Express = express();

app.use(express.json());
const PORT: number = 3000;

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Rodando na porta: http://localhost:${PORT}`);
})