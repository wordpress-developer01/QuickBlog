import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/AdminRoutes.js';
import blogRouter from './routes/BlogRoutes.js';


const app = express();

await connectDB();

app.use(cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true
}));
app.use(express.json());

app.get('/', (req, res)=> res.send("API is Working"))
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT)
})

export default app;