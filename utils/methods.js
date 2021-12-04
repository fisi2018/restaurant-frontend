import axios from "axios"
import { API } from "../consts/api";

export const methodGet=async (url)=>{
try{
    const response=await axios.get(`${API}/${url}`);
    const data=await response.data;
    return data;
}catch(err){
    return {
        message:"Ha ocurrido un error",
        error:err
    }
}
}
export const methodPost=async(url,form,headers={})=>{
    try{
        const response=await axios.post(`${API}/${url}`,form,
        {
            headers
        }),
        data=await response.data;
        return data;
    }catch(err){
        return{
            message:"Ha ocurrido un error",
            error:err
        }
    }
}