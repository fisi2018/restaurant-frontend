import { getSession, signOut} from "next-auth/client"
import { useRouter } from "next/dist/client/router";
import LayoutAccount from "../../components/layout/layoutAccount";
import { verifyToken } from "../../utils/handleJwt";
import toast,{Toaster} from "react-hot-toast";
import { useEffect } from "react";

export default function Account({message,data,error}){
    if(error)signOut();    
    const {push}=useRouter();
    useEffect(()=>{
        toast.success(message);
    },[]);
    return(
            <LayoutAccount>
                <div >
                    <header className="p-6 bg-hdr-wood" >
            <Toaster/>
            <h1 className="text-3xl text-white text-center font-black" >La Frontera </h1>
            <h2 className="text-center text-white" >Escoge entre una variedad de entradas, plato, bebidas y postres </h2>
                    </header>
            <section className=" min-h-screen grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-2" >
                <div onClick={()=>push("/account/platos")} className=" restaurant-card md:col-span-2">
                    <div className="card-img bg-main-plate">
                        
                    </div>
                    <span>
                        <h2>Platos de fondo</h2>
                        <p>NACIONALES E INTERNACIONALES</p>
                    </span>
                </div>
                <div onClick={()=>push("/account/bebidas")} className="restaurant-card md:row-span-2" >
                    <div className="card-img bg-bebida" ></div>
                    <span>
                        <h2>Bebidas</h2>
                        <p>CÁLIDAS Y FRÍAS</p>
                    </span>
                </div>
                <div onClick={()=>push("/account/entradas")} className="restaurant-card " > 
                <div className="card-img bg-entrada " ></div>
                <span>
                        <h2>Entradas</h2>
                        <p>DE DISTINTOS PRECIOS</p>
                    </span>
                </div>
                <div onClick={()=>push("/account/postres")} className="restaurant-card " >
                    <div className=" card-img bg-postre " >
                    </div>
                    <span >
                        <h2 >Postres</h2>
                        <p >DULCES Y SALADOS</p>
                    </span>
                </div>
            </section>
            

                </div>
            </LayoutAccount>
        
    )
}
export async function getServerSideProps({req,res}){
    const session=await getSession({req});
    
    if(session){
        const result=await verifyToken(session.accessToken);
            
            if(result){
                return{
                    props:{
                        message:"Estás logeado",
                        data:result
                    }
                }
            }else{
                return{
                    props:{
                        message:"Expiró el tiempo de sesion",
                        error:true
                    }
                }
            }
    }else{
        return{
           redirect:{
               destination:"/login",
               permanent:false
           },
           props:{}
       }
    }
}