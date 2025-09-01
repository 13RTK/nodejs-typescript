import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.post('/', (req, res) => {
  const body = req.body;

  console.log(body);

  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
