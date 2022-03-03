import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdLocalOffer,MdDeliveryDining,MdAccountCircle,MdOutlineLogout} from "react-icons/md";
import {BiRestaurant} from "react-icons/bi";
import {BsSearch} from "react-icons/bs";
import { signOut } from "next-auth/client";
import { useState } from "react";
import { useOrderContext } from "../../stateManagement/contexts/OrderContext";
export default function Aside(){
    const [active,setActive]=useState(false);
    const {index}=useOrderContext();
    const logout=()=>{
        signOut();
    }
    const changeActive=()=>{
        active?setActive(false):setActive(true);
    }
    return(
        <aside className={`${active?"w-14 xl:w-20 ":" xl:w-96 w-80"} sticky bottom-0 top-0 h-screen hidden sm:block left-0 bg-gray-800 px-2 xl:py-4 transition-all xl:text-xl duration-500`}>
            <article className="relative flex items-center overflow-hidden w-full h-12 p-2" >
                 <h2 className=" absolute right-12 xl:right-16 whitespace-nowrap  text-white " >La Frontera</h2>
                    <button onClick={changeActive}  className="burger-aside flex absolute xl:right-4  right-2 " >
                        <GiHamburgerMenu size="1.5rem" color="white" />
                    </button>
            </article>
            <article className="relative flex items-center overflow-hidden w-full h-12 p-2" >
                <span  className="icon-aside absolute flex items-center justify-center left-2 xl:left-6 transition-all duration-500" >
                    <BsSearch size="1.5rem" color="white"/>
                    </span>
                    <input className="absolute border-b-1 border-gray-400 border-t-0 border-r-0 border-l-0 text-white left-16 transition-all duration-500 bg-transparent focus:border-white focus:ring-0" placeholder="Buscar..." type="search"/>
            </article>
            <ul className="xl:pl-4" >
                <li className="li-aside-profile xl:my-4">
                    <Link href="/account" >
                        <a className="a-aside-profile button-aside hover:bg-white" >
                        <span className="span-icon-profile" >
                                <BiRestaurant size="1.5rem"  />
                            </span>
                            <h3 className="text-white absolute left-16 transition-all duration-500 whitespace-nowrap" >Inicio</h3>
                        </a>
                    </Link>
                </li>
                <li className="li-aside-profile xl:my-4" >
                    <Link href="/account/promociones" >
                        <a className="a-aside-profile button-aside hover:bg-white">
                            <span className="span-icon-profile" >
                                <MdLocalOffer size="1.5rem" />
                            </span>
                            <h3 className="text-white absolute left-16 transition-all duration-500 whitespace-nowrap" >Promociones</h3>
                        </a>
                    </Link>
                </li>
                <li className="li-aside-profile xl:my-4" >
                    <Link href="/account/pedidos" >
                        <a className="a-aside-profile button-aside hover:bg-white" >
                            <span className="span-icon-profile relative" >
                                <MdDeliveryDining size="1.5rem" />
                               {index!==0 &&
                                <span className="absolute animate-bounce -right-1 -top-2 text-xs font-bold flex justify-center items-center w-4 h-4 text-white bg-red-500 rounded-full" >
                                    <p>{index}</p>
                                </span>
                               } 
                            </span>
                            <h3 className="text-white absolute left-16 transition-all duration-500 whitespace-nowrap" >Mis pedidos</h3>
                        </a>
                    </Link>
                </li>
                <li className="li-aside-profile xl:my-4" >
                    <Link href="/account/myAccount" >
                        <a className="a-aside-profile button-aside hover:bg-white" >
                            <span className="span-icon-profile" >
                                <MdAccountCircle size="1.5rem" />
                            </span>
                            <h3 className="text-white absolute left-16 transition-all duration-500 whitespace-nowrap" >Mi cuenta</h3>
                        </a>
                    </Link>
                </li>
                <li className="li-aside-profile xl:my-4" >
                    <button onClick={logout} className="button-aside w-full overflow-hidden relative flex items-center h-full rounded-lg transition-all duration-500 hover:bg-white ">

                            <span className="span-icon-profile " >
                                <MdOutlineLogout  size="1.5rem"  />
                            </span>
                            <h3 className="text-white absolute left-16 transition-all duration-500 whitespace-nowrap" >Cerrar sesión</h3>
                        </button>
                </li>
            </ul>
            <article></article>
        </aside>
    )
}