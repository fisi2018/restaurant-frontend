import Layout from "../components/layout";
import { Loader } from "@googlemaps/js-api-loader"
import { useEffect } from "react";
export default function Location(){
    
    return(
        <Layout>
            <section className="bg-hdr-wood flex flex-col xl:justify-center justify-end items-center min-h-screen pb-4" >
                <h1 className="text-gray-200 font-bold md:text-xl 2xl:text-3xl xl:mb-8 text-lg text-center" >Ubícanos en cualquiera de nuestras sucursales</h1>
                <div className="w-full px-4 sm:px-20" >
                    <iframe className="w-full h-96"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.2367035493517!2d-70.24567886271673!3d-18.014215277966983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf6393804e3f%3A0x43d0eb4612e0fc5f!2sRestaurant%20La%20Frontera!5e0!3m2!1ses-419!2spe!4v1638479786274!5m2!1ses-419!2spe"  ></iframe>
                </div>
            </section>
        </Layout>
    )
}