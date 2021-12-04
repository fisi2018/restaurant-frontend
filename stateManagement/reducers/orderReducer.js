import { TYPES } from "../actions/orderActions";

export const orderInitialState={
    index:0,
    orders:[]
}
export function orderReducer(state,action){
    const totalPrice=(i)=>{
        let price=0;
        let priceEntrada=(state.orders[i].entrada && state.orders[i].entrada.price)?state.orders[i].entrada.price:0;
        let pricePlato=(state.orders[i].plato && state.orders[i].plato.price)?state.orders[i].plato.price:0;
        let priceBebida=(state.orders[i].bebida && state.orders[i].bebida.price)?state.orders[i].bebida.price:0;
        let pricePostre=(state.orders[i].postre && state.orders[i].postre.price)?state.orders[i].postre.price:0;
        price=priceEntrada+pricePlato+pricePostre+priceBebida;
        return price;
    }
    const totalPoints=(i)=>{
        let points=0;
        let priceEntrada=(state.orders[i].entrada && state.orders[i].entrada.points)?state.orders[i].entrada.points:0;
        let pricePlato=(state.orders[i].plato && state.orders[i].plato.points)?state.orders[i].plato.points:0;
        let priceBebida=(state.orders[i].bebida && state.orders[i].bebida.points)?state.orders[i].bebida.points:0;
        let pricePostre=(state.orders[i].postre && state.orders[i].postre.points)?state.orders[i].postre.points:0;
        points=priceEntrada+pricePlato+pricePostre+priceBebida;
        return points;
    }
    switch (action.type) {
        case TYPES.REMOVE_ELEMENT:{
            let categoryToRemove=action.payload.category;
            let ordersToSave=[...state.orders];
            ordersToSave[state.index]={
                ...ordersToSave[state.index],
                [categoryToRemove]:{}
            }
            let stateToSave={
                ...state,
                orders:[...ordersToSave]
            }
            localStorage.setItem("orders_state",JSON.stringify(stateToSave));
            return stateToSave
        }
        case TYPES.ADD_ELEMENT:{
            console.log("agregando elemento");
            let newElement=action.payload;
            let stateToSave={};
            let ordersToSave=[...state.orders];
            if(state.orders[state.index]){
                ordersToSave[state.index]={
                     ...ordersToSave[state.index],
                    [newElement.category]:newElement,
                    total_price:totalPrice(state.index),
                    total_points:totalPoints(state.index)
                }
                stateToSave={
                    ...state,
                    orders:[...ordersToSave]
                }
            }else{
                stateToSave={
                    ...state,
                    orders:[...state.orders,{
                        [newElement.category]:newElement,
                        total_price:newElement.price,
                        total_points:newElement.points
                    }]
                }
            }
            
            localStorage.setItem("orders_state",JSON.stringify(stateToSave));
            return stateToSave
        }
        case TYPES.ADD_ORDER:{
            console.log("agregando orden");
            let ordersToSave=[...state.orders];
            ordersToSave[state.index]={
                ...ordersToSave[state.index],
                total_price:totalPrice(state.index),
                total_points:totalPoints(state.index)
            }
            let stateToSave=totalPrice(state.index)!==0?{
                index:state.index+1,
                orders:[...ordersToSave]
            }:state
            localStorage.setItem("orders_state",JSON.stringify(stateToSave));
            return stateToSave
        }
        case TYPES.ADD_STORAGE:{
            let stateToSave=action.payload;
            return stateToSave;
        }
        case TYPES.CLEAR_ORDERS:{
            localStorage.removeItem("orders_state");
            return orderInitialState;
        }
        case TYPES.REMOVE_ORDER:{
            let index=action.payload.index;
            let stateToSave={};
            let newOrders=[];
            if(state.orders.length===0){
                stateToSave=state;
            }else{
                state.orders.forEach((el,i)=>{
                    if(index!==i){
                        console.log("entrando en el for ",index,i)
                        newOrders.push(el);
                    }
                });
                stateToSave={
                    index:state.index - 1,
                    orders:[...newOrders]
                }
            }
            localStorage.setItem("orders_state",JSON.stringify(stateToSave));
            return stateToSave;
        }
        default: return state;
    }
}