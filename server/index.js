import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app  = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


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
