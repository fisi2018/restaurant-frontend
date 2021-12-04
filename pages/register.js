import { getSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Loader from "../components/common/loader";
import { useForm } from "../components/hooks/useForm";
import Layout from "../components/layout";
import { methodPost } from "../utils/methods";
import { validationRegister } from "../utils/validation";
import toast,{Toaster} from "react-hot-toast";
const initForm={
    name:"",
    email:"",
    password:"",
    code:""
}
export default function Register(){
    const {form,errors,handleChange}=useForm(initForm,validationRegister);
    const [loading,setLoading]=useState(false);
    const [show,setShow]=useState(false);
    const {push}=useRouter();
    const getCode=async(e)=>{
        e.preventDefault();
        if(Object.keys(errors).length===0){
            setLoading(true);
            const result=await methodPost("user/generateCode",{email:form.email});
            if(result.error) toast.error(result.message);
            setLoading(false);
            setShow(true);
        }else{
            errors.name&&toast.error(errors.name);
            errors.email&&toast.error(errors.email);
            errors.password&&toast.error(errors.password);
        }
    }
    const registerUser=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.set("name",form.name);
        formData.set("email",form.email);
        formData.set("password",form.password);
        formData.set("code",form.code);
        setLoading(true);
        const result=await methodPost("user/register",formData,{authorization:`Bearer ${form.code}`});
        if(result.error){
            toast.error(result.message);
            setLoading(false);
        }
        else{

            setLoading(false);
            push("/login");
            }
    }
    return(
        <Layout>
            <section className="min-h-screen bg-form-login flex justify-center items-center" >
                <Toaster/>
                {
                    show?
                    <form onSubmit={registerUser} className="flex flex-col bg-white p-6 border-yellow-500 border-t-4" >
                        <h1 className="text-center text-xl mb-4" >Confirmación de email</h1>
                        <label htmlFor="code">
                            Código de verificación
                        </label>
                        <input value={form.code} onChange={handleChange} placeholder="e.g. 123456" name="code" className={`input-form`} type="text"/>
                        <span className="flex justify-center mt-4 " >
                        {loading?
                        <Loader/>:
                         <button type="submit" className="rounded-full text-white bg-yellow-500 py-3 px-6 transition-all duration-300 shadow-xl hover:-translate-y-2 hover:shadow-2xl" >Confirmar email</button>
                         }
                    </span>
                    </form>
                    :
                <form onSubmit={getCode} className="flex flex-col bg-white p-6 border-yellow-500 border-t-4">
                    <h1 className="text-center text-xl mb-4" >Registro de usuarios</h1>
                    <label htmlFor="names">Nombres</label>
                    <input value={form.name} onChange={handleChange} className={`rounded ring-0 focus:ring-0 focus:outline-0 focus:ring-offset-0 ring-offset-0 border-0 bg-transparent outline-0 ${errors.name?` border focus:border-red-500 border-red-500`:`border focus:border-green-500 border-green-500`}`} placeholder="e.g. Roberto Martinez" name="name" type="text"/>
                    <label htmlFor="email">Email</label>
                    <input value={form.email} onChange={handleChange} className={` rounded ring-0 focus:ring-0 focus:outline-0  focus:ring-offset-0 ring-offset-0 border-0 bg-transparent outline-0 ${errors.email?`border focus:border-red-500 border-red-500`:`border focus:border-green-500 border-green-500`}`} placeholder="e.g. micorreo@gmail.com" name="email" type="email"/>
                    <label htmlFor="password">Password</label>
                    <input value={form.password} onChange={handleChange} className={` rounded ring-0 focus:ring-0 focus:outline-0  focus:ring-offset-0 ring-offset-0 border-0 bg-transparent outline-0  ${errors.password?`border focus:border-red-500 border-red-500`:`border focus:border-green-500 border-green-500`}`} placeholder="e.g. 12345678" name="password" type="password"/>
                    <span className="flex justify-center mt-4 " >
                        {loading?
                        <Loader/>:
                         <button type="submit" className="rounded-full text-white bg-yellow-500 py-3 px-6 transition-all duration-300 shadow-xl hover:-translate-y-2 hover:shadow-2xl" >Registrar usuario</button>
                         }
                    </span>
                </form>
                }
            </section>
        </Layout>
    )
}
export async function getServerSideProps({req,res}){
    const session=await getSession({req});
    if(session){
        return{
           redirect:{
               destination:"/account",
               permanent:false
           },
           props:{}
       }
    }else{
        return{
            props:{
                message:"Registro"
            }
        }
    }
}