import { FaHamburger } from "react-icons/fa";

import Link from "next/link";
import { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { MdAccountCircle, MdDeliveryDining, MdLocalOffer, MdOutlineLogout } from "react-icons/md";
import { useOrderContext } from "../../stateManagement/contexts/OrderContext";
import { signOut } from "next-auth/client";
export default function AsideResponsive(){
    const [panel,setPanel]=useState(false);
    const {index}=useOrderContext();
    return(
        <>
        <div className={`fixed z-50 transition duration-500 left-0 bottom-0 sm:hidden ${panel?" translate-y-1/4 -translate-x-1/4 ":" -translate-x-full -rotate-90  translate-y-full"} `} >
            <aside className={` relative w-96 transform  h-96 rounded-full bg-yellow-500 flex justify-center items-center`} >
                <Link href="/account" >
                    <a className=" text-white absolute flex flex-col items-center top-0 transform -translate-x-16 translate-y-8 " >
                        <span className="text-2xl" >
                            <BiRestaurant/>
                        </span>
                        <p>Inicio</p>
                    </a>
                </Link>
                <Link href="/account/promociones" >
                    <a className=" text-white absolute flex flex-col items-center top-0 transform translate-x-12 translate-y-12 " >
                        <span className="text-2xl" >
                            <MdLocalOffer/>
                        </span>
                        <p>Promociones</p>
                    </a>
                </Link>
                <Link href="/account/pedidos" >
                    <a className="absolute flex flex-col items-center text-white right-0 transform -translate-x-4 -translate-y-8" >
                        <span className="text-2xl relative" >
                            <MdDeliveryDining/>
                            {index!==0 &&
                                <span className="absolute animate-bounce -right-1 -top-2 text-xs font-bold flex justify-center items-center w-4 h-4 text-white bg-red-500 rounded-full" >
                                    <p>{index}</p>
                                </span>
                               } 
                        </span>
                        <p>Mis pedidos</p>
                    </a>
                </Link>
                <Link href="/account/myAccount" >
                    <a className=" text-white flex flex-col items-center absolute transform right-0 translate-y-16 -translate-x-12" >
                        <span className="text-2xl" >
                            <MdAccountCircle/>
                        </span>
                        <p>Mis cuenta</p>
                    </a>
                </Link>
                <button onClick={()=>signOut()} className="text-white flex flex-col items-center" >
                    <span className="text-2xl" >
                            <MdOutlineLogout/>
                        </span>
                        <p>Cerrar sesión</p>
                </button>
            </aside>
        </div>
            <button onClick={()=>panel?setPanel(false):setPanel(true)}  className="fixed animate-bounce text-xl z-50 bottom-4 right-4 flex justify-center items-center text-white bg-yellow-500 w-12 h-12 rounded-full sm:hidden " >
                <FaHamburger/>
            </button>
            </>
    )
}