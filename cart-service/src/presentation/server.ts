import express, { Application } from 'express'
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'

const app: Application = express()
const PORT: number = 5000

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

app.listen(PORT,()=>{
    console.log(`The cart-service is listening to the port ${PORT}`);
})

export default app
