import express, { response } from 'express';
import 'express-async-errors' ;
import './database/connection';
import routes from './routes';
const app = express();
import path from 'path';
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')))


app.listen(3000);