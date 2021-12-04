import Aside from "./aside";
import AsideResponsive from "./asideResponsive";
import Footer from "./footer";
export default function LayoutAccount({children}){
    return(
        <div className="flex " >
            <Aside/>
            <AsideResponsive/>
            <section className="flex flex-col w-full" >
            <main className="min-h-screen w-full" >{children}</main>
            <Footer/>
            </section>
        </div>
    )
}