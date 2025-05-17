import express from 'express';
import cors from "cors";
import router from './routes/auth.js';
import connectToDatabase from "./db/db.js"


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', router)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})