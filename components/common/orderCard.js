import { AiFillCheckCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { validationInfo } from "../../utils/validation";
import { useForm } from "../hooks/useForm";
import {methodPost} from "../../utils/methods";
import toast,{Toaster} from "react-hot-toast";
import Loader from "../common/loader";
import { useState } from "react";
const initForm={
    address:"",
    phone:""
}
export default function OrderCard({order,removeOrder,userId,index,token}){
    const {form,handleChange}=useForm(initForm,validationInfo);
    const [loading,setLoading]=useState(false);
    const submitOrder=async()=>{
        
        const formOrder={
            entrada:(order.entrada && order.entrada._id )?order.entrada._id:0,
            plato:(order.plato && order.plato._id )?order.plato._id:0,
            bebida:(order.bebida && order.bebida._id )?order.bebida._id:0,
            postre:(order.postre && order.postre._id )?order.postre._id:0,
            address:form.address,
            phone:form.phone,
            user:userId
        }
        setLoading(true);
        const response=await methodPost("order/createOrder",formOrder,{"authorization":`Bearer ${token}`});
        setLoading(false);
        if(response.error){
            toast.error(response.message);
        }else{
            toast.success(response.message);
        }
    }
    return(
        <div className=" flex mb-4 bg-gray-200 flex-col rounded w-full shadow-my-format divide-y-2 divide-opacity-40 divide-gray-400 " >
            <Toaster/>
            <article className="flex flex-col sm:flex-row w-full justify-around items-center text-sm py-2" >
            <p>Entrada: {(order.entrada && order.entrada.name)?order.entrada.name:"Sin entrada"}</p>
            <p>Plato: {(order.plato && order.plato.name)?order.plato.name:"Sin plato principal"}</p>
            <p>Bebida: {(order.bebida && order.bebida.name)?order.bebida.name:"Sin bebida"}</p>
            <p>Postre: {(order.postre && order.postre.name)?order.postre.name:"Sin postre"}</p>
            </article>
            <article className="flex flex-col sm:flex-row w-full text-sm items-center justify-around my-2 py-2" >
            <p>Total: S/.{order.total_price}</p>
            <p>Puntos acumulados: {order.total_points}</p>
            <nav className="flex" >
                <Popup trigger={<span className=" cursor-pointer text-xl text-green-400 mr-2" >
                <AiFillCheckCircle/>
                    </span>} modal nested>
                    {close => (
                    <div className="p-4" >
                        <h2 className="text-center text-xl" >Confirmar pedido</h2>
                        <ul className="ml-4 list-disc list-outside" >
                            <li>Si todos los pedidos son para la misma dirección, verificar que en todos los formularios de envío la dirección sea exactamente la misma.</li>
                            <li>La dirección es obligatoria, pero el número de celular es opcional.</li>
                        </ul>
                        <form className="flex flex-col" onSubmit={async(e)=>{e.preventDefault();await submitOrder();close();removeOrder({index})}} >
                            <input className="my-2"  onChange={handleChange} value={form.address} placeholder="Dirección" name="address" type="text"/>
                            <input className="my-2" onChange={handleChange} value={form.phone} placeholder="Teléfono" name="phone" type="text"/>
                            <article className="flex justify-center my-2" >
                                {loading ? <Loader/>:
                            <button className=" transition duration-300 hover:bg-yellow-400 rounded bg-yellow-500 text-white py-2 px-4" type="submit" >Enviar</button>
                                 }
                            </article>
                        </form>
                    </div>
                    )}
                </Popup>
            <span onClick={()=>removeOrder({index})} className="cursor-pointer text-xl text-red-500" >
                <MdDelete/>
            </span>
            </nav>
            </article>
        </div>
    )
}