import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express()
const PORT = 8080

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/auth',proxy("http://localhost:3000/"))
app.use('/product',proxy("http://localhost:4000/"))
app.use('/admin',proxy("http://localhost:5000/"))

app.listen(PORT,()=>{
    console.log(`The gateway is listening to the port ${PORT}`);
})
