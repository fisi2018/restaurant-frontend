import Layout from "../components/layout";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
export default function Home(){
    const {push}=useRouter();
    return(
        <Layout>
            <section className="bg-main-restaurant bg-cover min-h-screen flex items-center" >
                <aside className="p-4 max-w-2xl flex items-center sm:items-start flex-col" >
                    <h1 className=" text-6xl sm:text-8xl text-white font-bold" >Bienvenido </h1>
                    <p className="text-xl text-center sm:text-left sm:text-2xl text-white">Para poder ocupar todos los servicios de nuestra plataforma es necesario que se registre</p>
                    <Link href="/" >
                    <a className="rounded-lg text-lg my-6 py-2 px-4 font-bold bg-gray-600 text-white">
                        Realizar pedido
                    </a>
                    </Link>
                </aside>
            </section>
            <section className=" min-h-screen grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-3 gap-1 sm:gap-2" >
                <div onClick={()=>push("/login")} className=" restaurant-card sm:col-span-2">
                    <div className="card-img bg-main-plate">
                        
                    </div>
                    <span>
                        <h2>Platos de fondo</h2>
                        <p>NACIONALES E INTERNACIONALES</p>
                    </span>
                </div>
                <div onClick={()=>push("/login")} className="restaurant-card sm:row-span-2" >
                    <div className="card-img bg-bebida" ></div>
                    <span>
                        <h2>Bebidas</h2>
                        <p>CÁLIDAS Y FRÍAS</p>
                    </span>
                </div>
                <div onClick={()=>push("/login")} className="restaurant-card " > 
                <div className="card-img bg-entrada " ></div>
                <span>
                        <h2>Entradas</h2>
                        <p>DE DISTINTOS PRECIOS</p>
                    </span>
                </div>
                <div onClick={()=>push("/login")} className="restaurant-card " >
                    <div className=" card-img bg-postre " >
                    </div>
                    <span >
                        <h2 >Postres</h2>
                        <p >DULCES Y SALADOS</p>
                    </span>
                </div>
            </section>
        </Layout>
    )
}