import express from 'express';
import 'dotenv/config'
import { connectToMongoDB } from './connection/connection.mjs';
import postRoute from './routes/postRoute.mjs';


connectToMongoDB();


const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api',postRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});