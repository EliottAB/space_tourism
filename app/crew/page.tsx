import Image from "next/image";
import { Header } from "../components/Header";
import backgroundDesktop from "../assets/crew/background-crew-desktop.jpg"
import backgroundTablet from "../assets/crew/background-crew-tablet.jpg"
import backgroundMobile from "../assets/crew/background-crew-mobile.jpg"
import { Background } from "../components/Background";

export default function Crew() {
    return(
        <>
        <Header page="crew"/>

        <main>
        </main>

        <Background backgroundDesktop={backgroundDesktop} backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile}/>
        </>
    )
}