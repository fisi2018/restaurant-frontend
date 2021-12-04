import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/orderActions";
import { orderInitialState, orderReducer } from "../reducers/orderReducer";
import {io} from "socket.io-client";
import { URL } from "../../consts/api";
let socket=io(URL);
const OrderContext=createContext();

export const OrderProvider=({children})=>{
    const [state, dispatch] = useReducer(orderReducer, orderInitialState);
    const [ordenDb,setOrdenDb]=useState([]);

    const {index,orders}=state;
    const addStorage=()=>{
        const storage=localStorage.getItem("orders_state");
        if(storage){
            const newState=JSON.parse(storage);
            dispatch({type:TYPES.ADD_STORAGE,payload:newState});
        }
    }
    useEffect(()=>{
        addStorage();
    },[]);
    const clearOrder=()=>{
        dispatch({type:TYPES.CLEAR_ORDERS});
    }
    const addElement=(payload)=>{
        console.log("add Element");
        dispatch({type:TYPES.ADD_ELEMENT,payload});
        console.log("dsps del dispatch");
    }
    const removeElement=(payload)=>{
        dispatch({type:TYPES.REMOVE_ELEMENT,payload});
    }
    const removerOrder=(payload)=>{
        dispatch({type:TYPES.REMOVE_ORDER,payload});
    }
    const addOrder=()=>{
        dispatch({type:TYPES.ADD_ORDER});
    }
    const data={index,orders,ordenDb,setOrdenDb,socket,addElement,removeElement,addOrder,removerOrder,clearOrder,addStorage};
    return(
        <OrderContext.Provider value={data}>{children}</OrderContext.Provider>
    )
}
export default OrderContext;
export const useOrderContext=()=>{
    const value=useContext(OrderContext);
    return value;
}