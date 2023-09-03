import Image from "next/image";
import { Header } from "../components/Header";
import backgroundDesktop from "../assets/technology/background-technology-desktop.jpg"
import backgroundTablet from "../assets/technology/background-technology-tablet.jpg"
import backgroundMobile from "../assets/technology/background-technology-mobile.jpg"
import { Background } from "../components/Background";

export default function Destination() {
    return(
        <>
        <Header page="technology"/>

        <main>
        </main>

        <Background backgroundDesktop={backgroundDesktop} backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile}/>
        </>
    )
}