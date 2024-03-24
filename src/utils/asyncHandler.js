import { Promise } from "mongoose"

//ist method we use below howevr last 2nd mehtod also used below
const asyncHandler = () => {
    (req,res,next)=>{
Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
}
} 

export default asyncHandler

//2nd method belwo:
//just belwo just understand higherorder
// const asyncHandler=()=>{}
// const asyncHandler=(funct)=>()=>{}
// const asyncHandler=(funct)=>async()=>{}

// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json*{
//             success:false
//             message:err.message
//         }
//     }
// }