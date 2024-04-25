import express, {Application, NextFunction, Request, Response} from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
import {dependencies} from '../config/dependancies'
import {addProduct} from "../infrastructure/route/addProducts"

dotenv.config();

const app: Application = express()
const PORT: number = 4000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(addProduct(dependencies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    const errorResponse = {
      errors: [{ message: err?.message || 'Something went wrong' }],
    };
    return res.status(500).json(errorResponse);
});


app.listen(PORT,()=>{
    console.log(`The auth-service is listening to the port ${PORT}`);
})

export default app