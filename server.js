import express from 'express';
import urlRouter from './urlshortener/urlshortenerRouter.js';
const app = express();
const PORT = 3000;

app.use(express.json())


app.get('/', (req, res)=>{
    res.send("Working")
})

app.use('/url', urlRouter)


app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})