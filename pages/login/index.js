import { getCsrfToken, getSession, signIn } from "next-auth/client";
import {useState} from "react";
import { useForm } from "../../components/hooks/useForm";
import Loader from "../../components/common/loader";
import Layout from "../../components/layout";
import { validationLogin} from "../../utils/validation";
import toast,{Toaster} from "react-hot-toast";
const initForm={
    email:"",
    password:""
}
export default function Login(){
    const {form,errors,handleChange}=useForm(initForm,validationLogin);
    const [loading,setLoading]=useState(false);
    const startLogin=(e)=>{
        e.preventDefault();
        if(Object.keys(errors).length===0){
            setLoading(true);
            signIn("credentials",{email:form.email,password:form.password,callbackUrl:`${window.location.origin}/account`});
            setLoading(false);
        }else{
            errors.email && toast.error(errors.email);
            errors.password && toast.error(errors.password);
        }
    }
    return(
        <Layout>
            <section className="min-h-screen bg-form-login bg-cover flex justify-center items-center " >
                <Toaster/>
                <form onSubmit={startLogin} className="flex flex-col xl:text-xl bg-white p-6 border-yellow-500 border-t-4" >
                    <h1 className="text-center xl:text-2xl text-xl mb-4 " >Inicio de sesión</h1>
                    <label htmlFor="email">Email</label>
                    <input value={form.email} onChange={handleChange} id="input-email-for-credentials-provider" className={`rounded xl:mb-4 ring-0 focus:ring-0 focus:outline-0 focus:ring-offset-0 ring-offset-0 border-0 bg-transparent outline-0 ${errors.email?` border focus:border-red-500 border-red-500`:`border focus:border-green-500 border-green-500`}`} placeholder="e.g. micorreo@gmail.com" name="email" type="email"/>
                    <label htmlFor="password">Password</label>
                    <input value={form.password} onChange={handleChange} id="input-password-for-credentials-provider" className={`rounded ring-0 focus:ring-0 focus:outline-0 focus:ring-offset-0 ring-offset-0 border-0 bg-transparent outline-0 ${errors.password?` border focus:border-red-500 border-red-500`:`border focus:border-green-500 border-green-500`}`} placeholder="e.g. 12345678" name="password" type="password"/>
                    <span className="flex justify-center mt-4 " >
                        {loading?
                        <Loader/>
                        :
                    <button type="submit" className="rounded-full text-white bg-yellow-500 py-3 px-6 transition-all duration-300 shadow-xl hover:-translate-y-2 hover:shadow-2xl" >Iniciar sesión</button>
                        }
                    </span>
                </form>
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
                message:"Desde el servidor"
            }
        }
    }
}