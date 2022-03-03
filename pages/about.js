import Layout from "../components/layout";

export default function About(){
    return(
        <Layout>
            <section className="bg-hdr-wood p-4 flex flex-col justify-end xl:justify-center min-h-screen" >
                <div className="grid grid-cols-1 pt-12 md:pt-0 md:grid-cols-3 gap-8" >
                    <div className=" rounded-xl bg-white p-4 flex flex-col justify-center items-center " >
                        <img className="animate-bounce w-40 h-auto" src="https://cdn.pixabay.com/photo/2018/11/07/13/47/space-3800434_1280.png" />
                        <h2 className="text-3xl font-black text-green-500 " >Nuestra misión</h2>
                        <p className="text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sint quod ipsam libero incidunt voluptatum, non ullam labore culpa, voluptates totam natus consequuntur, velit facilis sed amet exercitationem nobis adipisci!</p>
                    </div>
                    <div className=" rounded-xl flex flex-col items-center justify-center bg-white p-4" >
                        <img className="animate-bounce w-40 h-auto" src="https://cdn.pixabay.com/photo/2019/06/13/09/41/business-4271251_1280.png" />
                        <h2 className="text-3xl font-black text-yellow-500" >Nuestra visión</h2>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus repellendus totam quam vero harum quia aspernatur esse veritatis aut. Voluptates labore maxime fuga tempora veniam recusandae molestiae aspernatur cumque.</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 flex flex-col justify-center items-center" >
                        <img className="animate-bounce w-40 h-auto" src="https://cdn.pixabay.com/photo/2017/05/15/23/44/heart-icon-2316451_1280.png" />
                        <h2 className="text-3xl font-black text-blue-500" >Nuestros valores</h2>
                        <p className="text-center" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ex. Velit atque illum doloribus, animi minima dicta eos? Sed veritatis impedit aut modi beatae quod reprehenderit, unde aspernatur blanditiis tempora.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}