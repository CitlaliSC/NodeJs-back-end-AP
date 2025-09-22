import express from 'express';
import ip from 'ip';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({ origin: '*' })); //allow any app to call this app, change later on
app.use(express.json()); // get response on json format

app.get('/', (req, res) => { res.send( { message: 'UP' }) });
console.log(process.env);
app.listen(PORT, ()=> console.log(`Server running on: ${ip.address()}:${PORT}`));