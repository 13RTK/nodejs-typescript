import express from 'express';
import type { Express, Response } from 'express';

import cors from 'cors';
import type URLRequest from './types/URLRequest.ts';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(cors());
app.post('/', (req: URLRequest, res: Response) => {
  const body = req.body;

  console.log(body);

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
