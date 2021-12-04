export default function OrderCardSocket({orden}){
    return(
        <div className="bg-white p-2 flex flex-col mb-4 rounded" >
            <article className="flex flex-col items-center sm:flex-row " >
            <p className="mr-4">{orden.entrada?orden.entrada.name : "Sin entrada"}</p>
            <p className="mr-4" >{orden.plato?orden.plato.name:"Sin plato de fondo"}</p>
            <p className="mr-4" >{orden.bebida?orden.bebida.name:"Sin bebida"}</p>
            <p >{orden.postre?orden.postre.name:"Sin postre"}</p>
            </article>
            <article className="flex flex-col items-center sm:flex-row" >
            <p className="mr-4" >{orden.address}</p>
            <p className="text-yellow-500 font-black mr-4" >S/.{orden.price}</p>
            <p className="mr-4" >{orden.points} puntos</p>
            <p>{orden.user.name}</p>
            </article>
        </div>
    )
}