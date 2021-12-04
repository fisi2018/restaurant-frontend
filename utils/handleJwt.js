import jwt from "jsonwebtoken";
export const verifyToken=async(token)=>{
    try{
        return jwt.verify(token,process.env.JWT_SECRET);
    }catch(err){
        return null
    }
}