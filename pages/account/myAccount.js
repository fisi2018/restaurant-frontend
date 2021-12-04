import LayoutAccount from "../../components/layout/layoutAccount";
import {getSession, signOut} from "next-auth/client";
import {MdAccountCircle, MdPassword} from "react-icons/md";
import { verifyToken } from "../../utils/handleJwt";
import { API } from "../../consts/api";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
export default function MyAccount({message,data}){
    return(
        <LayoutAccount>
            <section className="flex flex-col w-full">
            <div className=" bg-hdr-wood flex flex-col items-center p-6" >
            {data.img?
            <img src={`${API}/user/img/${data._id}`} alt="web profile restaurant"/>
            :
            <span className="flex items-center text-white justify-center rounded-full" >
                <MdAccountCircle size="5rem" />
            </span>
            }
            <h1 className="text-center text-3xl text-white font-black " >{data.name}</h1>
            <p className="text-gray-400" >{data.email}</p>
            <article className="flex p-6" >
                <span className="flex flex-col text-white items-center" >
                    <h2>{data.points}</h2>
                    <p className="font-bold text-yellow-500" >Puntos</p>
                </span>
            </article>
            </div>
            <div className="p-4 flex flex-col items-center" >
                <h2 className="text-center text-xl" >Configurar mi cuenta</h2>
                <div className="grid grid-cols-2 py-4 divide-x-4" >
                    <ul className="flex flex-col justify-evenly items-center mr-4" >
                        <li>
                            <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:opacity-80" >
                                <span className="mr-2" >
                                    <MdPassword/>
                                </span>
                                <p>Cambiar contraseña</p>
                                </button>
                        </li>
                        <li>
                            <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:opacity-80" >
                            <span className="mr-2" >
                                <BsFillCreditCard2FrontFill/>
                            </span>
                            <p>Gestionar métodos de pago</p>
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center bg-green-500 text-white py-2 px-4 rounded transition duration-300 hover:opacity-80" >
                                <span className=" mr-2" >
                                    <AiTwotoneSetting/>
                                </span>
                                <p>Cambiar datos personales</p>
                               </button>
                        </li>
                    </ul>
                    <article className="w-60 pl-4" >
                        <img src="https://cdn.pixabay.com/photo/2017/01/26/15/47/bank-2010880_1280.png" alt="cuenta pago credit card" />
                    </article>
                </div>
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
                return{
                    props:{
                        message:"Estás logeado",
                        data:result
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