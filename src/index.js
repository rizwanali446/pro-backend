import dotenv from "dotenv";
//import mongoose from "mongoose";
//import {DB_NAME} from "./constants";
import connectDB from "./db/dbindex.js";

dotenv.config({
    path:'./env'
})
connectDB();
/*  //1st approch
import {express} from "express";
const app=express()

// 1st approahc ifffi ()()
( async()=>{
try{
 await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 app.on("errror", (error)=>{
    console.log("ERRR:",error);
    throw error
 })
app.listen(process.env.PORT,()=>{
    console.log(`App is being listening on port ${process.env.PORT}`);
})
}catch(error){
    console.error("Error:",error) 
    throw err
}
})()
*/