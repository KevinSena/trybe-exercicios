import express, { Express, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Books from './database/models/BookModel';
require('dotenv').config();

const app: Express = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', async (_req: Request, res: Response) => {
  const result = await Books.findAll()
  return res.status(StatusCodes.OK).json(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});