import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';

dotenv.config();

const app  = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.get('/', (req, res) => {
    res.send('Hello from dallE');
})
    const startServer = async () => {
        try{
            console.log(`MONGO_URL: ${process.env.MONGOURI}`);
            connectDb(process.env.MONGOURI);
            app.listen(8080, () =>{
                console.log('Server is running on port 8080');
            })
        }catch(err){
            console.log(err);
        }
        
    }
    startServer();
