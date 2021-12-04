import { getCsrfToken, getSession } from "next-auth/client";
import LayoutAccount from "../../components/layout/layoutAccount";
import { verifyToken } from "../../utils/handleJwt";

import axios from "axios";
import PromCard from "../../components/common/promCard";
import { API } from "../../consts/api";

export default function Promociones({message,data,list}){
    return(
        <LayoutAccount>
            <section>
                <header className="bg-hdr-wood py-8" >
                    <h1 className="text-yellow-500 text-3xl font-black text-center" >Promociones</h1>
                </header>
                <div className="p-4 flex justify-between " >
                    {list.map((promo,i)=>(
                        <PromCard key={promo._id} index={i+1} promo={promo} />
                    ))}
                </div>
            </section>
        </LayoutAccount>
    )
}
export async function getServerSideProps({req,res}){
    try{
        const session=await getSession({req});
        
        
        if(session){
           
            const result=await verifyToken(session.accessToken);
            
            
            if(result){
                const list=await axios.get(`${API}/order/listPromo`);
                const dataList=await list.data;
                return{
                    props:{
                        message:"Estás logeado",
                        data:result,
                        list:dataList
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
    }catch(err){
        return{
            props:{
                message:"Ha ocurrido un error",
                data:err
            }
        }
    }
}