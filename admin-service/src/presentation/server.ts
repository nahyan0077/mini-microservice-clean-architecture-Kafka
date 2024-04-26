import express, {Application, NextFunction, Request, Response} from 'express'
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { adminRouter } from '../infrastructure/routes/adminRoutes';
import { dependancies } from '../config/dependencies';


const app: Application = express()
const PORT: number = 5000

app.use(express.json());
app.use(cookieParser());

app.use(adminRouter(dependancies))

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const errorResponse={
        errors:[{message:err.message}]
    }
    return res.status(500).json(errorResponse)
});

app.listen(PORT,()=>{
    console.log(`The admin-service is listening to the port ${PORT}`);
})

export default app