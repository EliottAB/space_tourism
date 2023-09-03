import Image from "next/image";
import { Header } from "../components/Header";
import backgroundDesktop from "../assets/destination/background-destination-desktop.jpg"
import backgroundTablet from "../assets/destination/background-destination-tablet.jpg"
import backgroundMobile from "../assets/destination/background-destination-mobile.jpg"
import { Background } from "../components/Background";
import { planets } from "../data/planets";
import { Planet } from "../components/Planet";
import "../css/pages/destination.css"

export default function Destination() {

    return(
        <>
        <Header page="destination"/>

        <main className="destination-main">
            <h1 className="barlow-c"><span>01</span>PICK YOUR DESTINATION</h1>
            <section className="planets">
                {
                    planets.map(planet => 
                    <Planet
                        name={planet.name}
                        description={planet.descritpion}
                        distance={planet.distance}
                        time={planet.time}
                        image={planet.image}
                    />)
                }
            </section>
        </main>

        <Background backgroundDesktop={backgroundDesktop} backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile}/>
        </>
    )
}