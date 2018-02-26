// @flow
import express from 'express';
import bodyParser from 'body-parser';
import type {$Request, $Response} from 'express';
import productRoutes from './routes/products.routes';
const app = express();
import {PORT} from './globals/config';
// import mongoose from 'mongoose';
//
// mongoose.connect(CONNECTION_STRING);
// mongoose.Promise = global.Promise;
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//test
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req: $Request, res: $Response) => {
  res.status(200);
  res.json({
    message: 'hi',
  });
});
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON http://localhost/${PORT}`);
});
