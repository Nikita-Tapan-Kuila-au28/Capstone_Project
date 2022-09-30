import express from "express";

import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config();
 import AuthRoute from "./Routes/Authroute.js";
 import UserRoute from "./Routes/UserRoute.js";
 import postRoute from "./Routes/postRoute.js";
 import cors from "cors";



const port=process.env.PORT || 4000;

//Routes
const app=express();




//middlewares

app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
app.use("/auth", AuthRoute)
app.use('/user',UserRoute)
app.use("/post",postRoute)







app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})