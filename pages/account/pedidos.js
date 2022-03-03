import { getSession } from "next-auth/client";
import LayoutAccount from "../../components/layout/layoutAccount";
import { verifyToken } from "../../utils/handleJwt";
import {FaCheese} from "react-icons/fa";
import {BiRestaurant,BiDrink} from "react-icons/bi";
import {FcProcess} from "react-icons/fc";
import { GiCupcake } from "react-icons/gi";
import Link from "next/link";
import { useOrderContext } from "../../stateManagement/contexts/OrderContext";
import OrderCard from "../../components/common/orderCard";
import { API } from "../../consts/api";
import { MdDelete } from "react-icons/md";
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import OrderCardSocket from "../../components/common/orderCardSocket";
export default function Pedidos({message,data,token}){
   
    const {addOrder,socket,ordenDb,setOrdenDb,orders,index,removerOrder,removeElement}=useOrderContext();
    useEffect(()=>{
        socket.emit("testing socket",data._id);
        socket.on("testing socket",function(msg){
            console.log("mensaje ",msg);
            setOrdenDb(msg);
        });
    },[]);
    useEffect(()=>{
        socket.emit("testing socket",data._id);
        socket.on("testing socket",function(msg){
            console.log("mensaje ",msg);
            setOrdenDb(msg);
        });
    },[orders]);
    const generarPedido=(e)=>{
        e.preventDefault();
        addOrder();
    }
    
    return(
        <LayoutAccount>
            <section className="flex flex-col bg-cover items-center min-h-screen bg-hdr-wood" >
                <h1 className=" w-full text-white text-center py-6 text-3xl font-black" >Sección de pedidos</h1>
                
                <form className="flex my-6 flex-col bg-white p-6 border-yellow-500 border-t-4 shadow-my-format" onSubmit={generarPedido} >
                    <h2 className="text-center mb-4 text-2xl" >Realizar pedido</h2>
                    <article className="mb-3" >{
                        orders[index] && (orders[index].entrada && orders[index].entrada.name)?
                        <div className="flex justify-evenly" >
                            <p className="text-green-500 font-bold" >{orders[index].entrada.name}</p>
                            <img className="w-6 h-auto" src={`${API}/entrada/img/${orders[index].entrada._id}`} alt="entrada restaurant food" />
                            <span onClick={()=>removeElement({category:"entrada"})} className="flex cursor-pointer justify-center items-center text-lg" >
                                <MdDelete/>
                            </span>
                        </div>
                        :
                        <Link href="/account/entradas" >
                            <a className="text-white bg-green-500 flex py-2 px-4 rounded-md " >
                                <span className="mr-3">
                                    <FaCheese size="1.5rem" />
                                </span>
                                <p >Seleccionar entrada</p>
                            </a>
                        </Link>
                    }
                    </article>
                    <article className="mb-3" >
                        {
                        orders[index] && (orders[index].plato && orders[index].plato.name)?
                        <div className="flex justify-evenly" >
                            <p className="text-yellow-500 font-bold" >{orders[index].plato.name}</p>
                            <img className="w-6 h-auto" src={`${API}/plato/img/${orders[index].plato._id}`} alt="plato principal restaurant food" />
                            <span onClick={()=>removeElement({category:"plato"})} className="flex cursor-pointer justify-center items-center text-lg" >
                                <MdDelete/>
                            </span>
                        </div>
                        :  
                        <Link href="/account/platos">
                            <a className="text-white bg-yellow-500 flex py-2 px-4 rounded-md" >
                                <span className="mr-3" >
                                    <BiRestaurant size="1.5rem" />
                                </span>
                                <p>Seleccionar plato</p>
                            </a>
                        </Link>
                    }
                    </article>
                    <article className="mb-3" >
                        {
                        orders[index] && (orders[index].bebida && orders[index].bebida.name)?
                        <div className="flex justify-evenly" >
                            <p className="text-blue-500 font-bold" >{orders[index].bebida.name}</p>
                            <img className="w-6 h-auto" src={`${API}/bebida/img/${orders[index].bebida._id}`} alt="bebida restaurant food" />
                            <span onClick={()=>removeElement({category:"bebida"})} className="flex cursor-pointer justify-center items-center text-lg" >
                                <MdDelete/>
                            </span>
                        </div>
                        :    
                        <Link href="/account/bebidas">
                            <a className="text-white bg-blue-500 flex py-2 px-4 rounded-md" >
                                <span className="mr-3" >
                                    <BiDrink size="1.5rem" />
                                </span>
                                <p>Seleccionar bebida</p>
                            </a>
                        </Link>
                    }
                    </article>
                    <article className="mb-3" >
                        {
                        orders[index] && (orders[index].postre && orders[index].postre.name)?
                        <div className="flex justify-evenly" >
                            <p className="text-red-500 font-bold" >{orders[index].postre.name}</p>
                            <img className="w-6 h-auto" src={`${API}/postre/img/${orders[index].postre._id}`} alt="postre restaurant food" />
                            <span onClick={()=>removeElement({category:"postre"})} className="flex cursor-pointer justify-center items-center text-lg" >
                                <MdDelete/>
                            </span>
                        </div>
                        :      
                        <Link href="/account/postres">
                            <a className="text-white bg-red-500 flex py-2 px-4 rounded-md" >
                                <span className="mr-3" >
                                    <GiCupcake size="1.5rem" />
                                </span>
                                <p>Seleccionar postre</p>
                            </a>
                        </Link>
                    }
                    </article>
                    <article className="flex justify-center items-center" >
                    <button className="bg-yellow-500 text-white py-2 px-4 font-bold rounded transition duration-300 hover:bg-yellow-400 "  type="submit" >Generar orden</button>
                    </article>
                </form>
                <h2 className="text-yellow-500 font-black text-xl" >Mis pedidos</h2>
                <div className="w-full p-2" >
                    {orders.length!==0 && orders.map((el,i)=>(
                        index-1>=i?
                        <OrderCard key={i} index={i} order={el} token={token} userId={data._id} socket={socket} setOrdenDb={setOrdenDb} removeOrder={removerOrder} />:
                        <div className="flex justify-evenly py-4 bg-gray-200 rounded" >
                            <p className="text-yellow-500 font-bold" >Pedido en proceso</p>
                            <span>
                                <FcProcess/>
                            </span>
                        </div>
                    ))}
                </div>
                <h2 className="text-yellow-500 font-black text-xl" >Pedidos confirmados</h2>
                {ordenDb.map(el=>(
                    <OrderCardSocket orden={el} />
                ))}
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
                        data:result,
                        token:session.accessToken
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
                message:"Ha ocurrido un error ",
                data:err
            }
        }
    }
}