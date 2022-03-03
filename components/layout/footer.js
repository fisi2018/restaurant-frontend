import Link from "next/link";
import {FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube} from "react-icons/fa";
export default function Footer(){
    return(
        <footer className={`w-full bg-gray-800 p-6 flex flex-col items-center justify-center`} >
            <nav className={`flex text-white py-2 w-80 justify-evenly xl:text-xl 2xl:text-2xl items-center`}>
                <Link href="https://www.google.com">
                <a className={`border-2 rounded-full p-2 border-gray-300 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white`} >
                    <FaFacebookF/>
                </a>
                </Link>
                <Link href="https://www.google.com">
                <a className={`border-2 rounded-full p-2 border-gray-300 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white`} >
                    <FaTwitter/>
                </a>
                </Link>
                <Link href="https://www.google.com">
                <a className={`border-2 rounded-full p-2 border-gray-300 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white`} >
                    <FaInstagram/>
                </a>
                </Link>
                <Link href="https://www.google.com">
                <a className={`border-2 rounded-full p-2 border-gray-300 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white`} >
                    <FaYoutube/>
                </a>
                </Link>
                <Link href="https://www.google.com">
                <a className={`border-2 rounded-full p-2 border-gray-300 transition duration-300 hover:bg-white hover:text-gray-900 hover:border-white`} >
                    <FaWhatsapp/>
                </a>
                </Link>
            </nav>
            <p className={`text-white`} >Copyright All rights reserved</p>
        </footer>
    )
}