import axios from "axios";
import { getSession } from "next-auth/client";
import Card from "../../components/common/card";
import LayoutAccount from "../../components/layout/layoutAccount";
import { API } from "../../consts/api";
import { verifyToken } from "../../utils/handleJwt";
export default function Entradas({message,data}){
    return(
        <LayoutAccount>
        <section className="bg-hdr-wood " >
            <h1 className="text-center text-white text-3xl font-black py-4">Entradas</h1>
            <div className="p-2 justify-items-center max-w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row auto-rows-auto" >

            {data!==""?
                data.map((el)=>(
                    <Card category="entrada" el={el} />
                ))
            :
            <p>{message}</p> }
            </div>
        </section>
        </LayoutAccount>
    )
}
export async function getServerSideProps({req,res}){
    const session=await getSession({req});
    if(session){
        const result=await verifyToken(session.accessToken);
        if(result){
            let entradas="";
            let message="";
            try{
                const response=await axios.get(`${API}/entrada/entradas`,{headers:{
                    "Authorization":`Bearer ${session.accessToken}`
                }});
                entradas=await response.data;
                message="Datos obtenidos exitosamente"
            }catch(err){
                message=err.message;
            } 
                return{
                    props:{
                        message,
                        data:entradas
                    }
                }
        }else{
                return{
           redirect:{
               destination:"/account",
               permanent:false
           },
           props:{}
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