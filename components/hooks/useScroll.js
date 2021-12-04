import {useState,useEffect} from "react"
export const useScroll=()=>{
    const [scroll,setScroll]=useState(false);
    const scrollEvent=()=>{
        window.scrollY<=40?setScroll(false):setScroll(true)
    }
    useEffect(()=>{
        window.addEventListener("scroll",scrollEvent);
    },[])
    return{
        scroll
    }
}