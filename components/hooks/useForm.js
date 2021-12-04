import { useEffect, useState } from "react"

export const useForm=(init,validation)=>{
    const[form,setForm]=useState(init);
    const [errors,setErrors]=useState({});
    useEffect(()=>{
        setErrors(validation(form));
    },[form]);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
    return{
        form,
        errors,
        handleChange
    }
}