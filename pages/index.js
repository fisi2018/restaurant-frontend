import Layout from "../components/layout";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
export default function Home(){
    const {push}=useRouter();
    return(
        <Layout>
            <section className="bg-main-restaurant xl:pl-8 bg-cover min-h-screen flex items-center" >
                <aside className="p-4 max-w-2xl flex items-center sm:items-start flex-col" >
                    <h1 className=" text-6xl sm:text-8xl text-white xl:text-9xl font-bold" >Bienvenido! </h1>
                    <p className="text-xl text-center sm:text-left  text-white">Comience a realizar sus pedidos desde la comodidad de su casa. En nuestro catálogo encontrará una gran variedad de platos.</p>
                    

                    <Link href="/" >
                    <a className="rounded-xl xl:text-2xl  text-lg my-6 py-2 px-4 font-bold bg-yellow-600 text-white">
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