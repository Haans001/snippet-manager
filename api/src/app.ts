import express from 'express';
import cors from 'cors';
import api from './api';
import HttpException from './exceptions/HttpException';
import errorMiddleware from './api/middleware/errorMiddleware';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', api());

app.use((req, res, next) => {
  const err = new HttpException(404, 'Not Found');
  next(err);
});

app.use(errorMiddleware);

app.listen(5000, () => {
  console.log('#####################################################');
  console.log(`Server started at port ${5000}. Happy Hacking!`);
  console.log('#####################################################');
});
