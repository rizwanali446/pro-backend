import dotenv from "dotenv";
//import mongoose from "mongoose";
//import {DB_NAME} from "./constants";
import connectDB from "./db/dbindex.js";

dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running at port : ${
            process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("mongodb connetion failed !!!", error)
})




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