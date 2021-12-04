import Footer from "./footer";
import Header from "./header";

export default function Layout({children}){
    return(
        <section className=" flex flex-col" >
            <Header/>
            <main className="min-h-screen" >{children}</main>
            <Footer/>
        </section>
    )
}