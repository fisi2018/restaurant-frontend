import { API } from "../../consts/api";

export default function PromCard({promo,index}){
    return(
        <div className="p-4 shadow-my-format" >
            <h2 className="font-black text-lg text-yellow-500" > Promoción {index} de la semana </h2>
            <p className="mt-2" >Entrada: {promo.entrada.name}</p>
            <p className="mt-2">Plato principal: {promo.plato.name}</p>
            <p className="mt-2">Bebida: {promo.bebida.name}</p>
            <p className="mt-2">Postre: {promo.postre.name}</p>
            <p className="mt-2">Puntos necesarios: {promo.pricePoints}</p>
            <div className="my-4 animate-pulse grid grid-cols-2 max-w-md grid-row-2 " >
                <img className="" src={`${API}/entrada/img/${promo.entrada._id}`} />
                <img src={`${API}/plato/img/${promo.plato._id}`} />
                <img src={`${API}/bebida/img/${promo.bebida._id}`} />
                <img src={`${API}/postre/img/${promo.postre._id}`} />
            </div>
            <article className="animate-bounce flex justify-center mt-2 items-center" >
            <button className="  bg-yellow-500 transition duration-300 py-2 px-4 rounded text-white hover:bg-yellow-400" >Adquirir promoción</button>
            </article>
        </div>
    )
}