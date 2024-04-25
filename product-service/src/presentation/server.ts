import express, {Application, NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

dotenv.config();

const app: Application = express()
const PORT: number = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.listen(PORT,()=>{
    console.log(`The auth-service is listening to the port ${PORT}`);
})

export default app