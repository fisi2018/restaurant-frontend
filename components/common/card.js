import { BsInfoLg } from "react-icons/bs";
import { BiRestaurant } from "react-icons/bi";
import { API } from "../../consts/api";
import {useRouter} from "next/dist/client/router";
import { useOrderContext } from "../../stateManagement/contexts/OrderContext";
import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
export default function Card({el,category}){
    const {index,orders,addElement}=useOrderContext();
    const [info,setInfo]=useState(false);
    const {push}=useRouter();
    return(
        <div className="card-food w-72 h-72 cursor-pointer relative overflow-hidden after:block after:w-full after:h-full after:shadow-inner-md after:absolute after:top-0 ">
            <span onClick={()=>!info?setInfo(true):setInfo(false)} id="info" className="absolute transition duration-300 text-yellow-500 text-xl hover:text-white z-40 p-2 rounded-full hover:bg-yellow-500 top-2 left-0 bg-white transform -translate-x-9">
                <BsInfoLg/>
            </span>
            <span onClick={()=>{addElement({...el,category})
        push("/account/pedidos")}} id="add" className="absolute transition duration-300 text-yellow-500 text-xl hover:text-white z-40 p-2 rounded-full hover:bg-yellow-500 top-2 bg-white right-0 translate-x-9">
                <BiRestaurant/>
            </span>
            {/*<div className={`absolute w-full h-full bg-white top-0 transform  ${info ? "translate-y-0":"-translate-y-full"}`} >
                    <p>{el.description}</p>
    </div>*/}
            <article className="transiton bg-cover bg-center w-full h-full flex flex-col justify-start items-center py-6 px-8  duration-300 ">
                {info && <>
                <span className="text-3xl mb-6" >
                    <FaQuoteLeft/>
                </span>
                <p>{el.description}</p>
                </>}
            </article>
            <div className="absolute py-2 transition duration-500 text-white z-40 font-bold uppercase bottom-0 flex flex-col w-full items-center">
            <p>{el.name}</p>
            <p>S/.{el.price}</p>
            </div>
            <style jsx>{`
                article{
                    ${info?"background-color:white":`background-image:url("${API}/${category}/img/${el._id}")`};
                }
            `}</style>
        </div>
    )
}
