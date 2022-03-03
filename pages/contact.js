import Layout from "../components/layout";

export default function Contact(){
    return(
        <Layout>
            <section className="bg-hdr-wood flex justify-center min-h-screen items-center " >
                <div className="flex flex-col  items-center pt-16" >
                    <h1 className="text-white font-black xl:text-5xl text-3xl mb-6 mt-12 " >Contáctanos</h1>
                    <aside className="flex flex-col divide-y-2 md:divide-y-0 md:flex-row bg-white p-4 md:divide-x divide-gray-500 " >
                        <div className=" flex py-8 flex-col items-center px-4" >
                            <img className="w-20 h-auto" src="https://cdn.pixabay.com/photo/2014/07/10/14/58/letters-389108_1280.png" />
                            <h2 className=" my-4 text-gray-500 font-black text-center text-2xl" >Envíanos un correo</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi a error culpa recusandae ipsum, ipsa voluptas dicta rem tempore facere, in maxime neque excepturi. Temporibus omnis esse delectus asperiores adipisci!</p>
                        </div>
                        <div className="flex py-8 flex-col items-center px-4" >
                            <img className="w-14 h-auto"  src="https://cdn.pixabay.com/photo/2016/11/17/16/05/icons-1831922_1280.png" />
                            <h2 className=" my-4 text-gray-500 font-black text-center text-2xl" >Llámanos</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur beatae animi aliquid expedita, qui voluptas at. Debitis quam quisquam nam saepe. Necessitatibus quod eius ipsum iusto mollitia quasi, dicta repellendus?</p>
                        </div>
                        <div className="flex py-8 flex-col items-center px-4" >
                            <img className="w-14 h-auto" src="https://cdn.pixabay.com/photo/2017/06/26/00/46/flat-2442462_1280.png" />
                            <h2 className=" my-4 text-gray-500 font-black text-center text-2xl" >Horarios de atención</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio ut minima minus aliquam, odit unde possimus asperiores repudiandae, dolores pariatur at culpa vel nihil inventore ex exercitationem tempora ratione?</p>
                        </div>
                    </aside>
                </div>
            </section>
        </Layout>
    )
}