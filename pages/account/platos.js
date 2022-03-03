import { getSession } from "next-auth/client";
import axios from "axios";
import {API} from "../../consts/api";
import {verifyToken} from "../../utils/handleJwt";

import LayoutAccount from "../../components/layout/layoutAccount";
import Card from "../../components/common/card";

export default function Platos({data,message}){
    return(
        <LayoutAccount>
            <section className="bg-hdr-wood min-h-screen bg-cover " >
                <h1 className="text-white text-center xl:text-5xl text-3xl font-black py-4" >Platos principales</h1>
                <div className="p-2 justify-items-center max-w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-row auto-rows-auto" >

            {data && data!==""?
                data.map((el)=>(
                    <Card category="plato" el={el} />
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
                const response=await axios.get(`${API}/plato/platos`,{headers:{
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