import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoMdClose} from "react-icons/io";
import { useScroll } from "../hooks/useScroll";
export default function Header(){
    const {pathname,push}=useRouter();
    const {scroll}=useScroll();
    const [panel,setPanel]=useState(false);
    return(
        <header className={`fixed transition duration-300 border-b-2  2xl:text-2xl border-opacity-25 z-40 right-0 left-0 top-0 py-6 shadow-inner-header flex flex-col lg:flex-row justify-around items-center ${scroll && "bg-gray-900"} `} >
            <span className="flex justify-center items-center" >
                <h1 className="font-black text-white text-2xl">La Frontera</h1>
            </span>
            <button onClick={()=>setPanel(true)} className="text-white text-xl lg:hidden" >
                <GiHamburgerMenu />
            </button>
            <aside className={`transition duration-500  fixed flex flex-col inset-0 bg-white lg:hidden transform ${panel?"translate-y-0":"-translate-y-full"} `} >
                <ul className="w-full h-4/5 bg-gray-700 flex flex-col " >
                    <li className=" relative flex-1  " >
                        <Link href="/" >
                        <a className="transition duration-500 hover:text-yellow-500 font-black hover:bg-gray-600 text-gray-300 absolute w-full h-full flex justify-center items-center " >Inicio</a>
                        </Link>
                    </li>
                    <li className="flex-1 relative " >
                        <Link href="/about" >
                        <a className=" transition duration-500 hover:text-yellow-500 font-black hover:bg-gray-600 text-gray-300 absolute w-full h-full flex justify-center items-center " >Acerca de nosotros</a>
                        </Link>
                    </li>
                    <li className="flex-1 relative" >
                        <Link href="/contact" >
                        <a className=" transition duration-500 hover:text-yellow-500 font-black hover:bg-gray-600 text-gray-300 absolute w-full h-full flex justify-center items-center " >Contacto</a>
                        </Link>
                    </li>
                    <li className="flex-1 relative" >
                         <Link href="/location" >
                        <a className=" transition duration-500 hover:text-yellow-500 font-black hover:bg-gray-600 text-gray-300 absolute w-full h-full flex justify-center items-center " >Ubicación</a>
                        </Link>
                    </li>
                </ul>
                <nav className=" flex flex-col" >
                    <Link href="/login" >
                    <a className=" transition duration-500 hover:bg-white bg-gray-200 font-black text-gray-700 py-2 text-center" >Iniciar sesión</a>
                    </Link>
                    <Link href="/register" >
                    <a className=" transition duration-500 hover:bg-white bg-gray-200 py-2 text-yellow-500 font-black text-center" >Registrarse</a>
                    </Link>
                </nav>
                <span className=" flex-1 flex bg-gray-700 justify-center items-center" >
                    <button className="text-3xl text-gray-200" onClick={()=>setPanel(false)} >
                        <IoMdClose/>
                    </button>
                </span>
            </aside>
            <nav className="hidden lg:block" >
                <Link href="/" >
                <a className={`mx-2 font-extrabold relative ${pathname==="/"?"text-yellow-500 after:bottom-0 after:right-1/4 after:absolute after:block after:bg-yellow-500 after:h-0.5 after:w-1/2":"text-gray-300"}`} >INICIO</a></Link>
                <Link href="/about" >
                <a className={`mx-2 font-extrabold relative ${pathname==="/about"?"text-yellow-500 after:bottom-0 after:right-1/4 after:absolute after:block after:bg-yellow-500 after:h-0.5 after:w-1/2":"text-gray-300"}`}>ACERCA DE NOSOTROS</a>
                </Link>
                <Link href="/contact">
                <a className={`mx-2 font-extrabold relative ${pathname==="/contact"?"text-yellow-500 after:bottom-0 after:right-1/4 after:absolute after:block after:bg-yellow-500 after:h-0.5 after:w-1/2":"text-gray-300"}`}>
                    CONTACTO
                </a>
                </Link>
                <Link href="/location" >
                <a className={`mx-2 font-black relative ${pathname==="/location"?"text-yellow-500 after:bottom-0 after:right-1/4 after:absolute after:block after:bg-yellow-500 after:h-0.5 after:w-1/2":"text-gray-300"}`}>UBICACIÓN</a>
                </Link>
            </nav>
            <nav className="hidden lg:block" >
                <button onClick={()=>push("/login")} className="mx-3 py-2 px-4 font-bold text-gray-100 border-2 rounded-lg border-gray-200 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white " >Login</button>
                <button onClick={()=>push("/register")} className="mx-3 py-2 px-4 font-bold bg-yellow-600 text-gray-100 rounded-lg">Register</button>
            </nav>
        </header>
    )
}