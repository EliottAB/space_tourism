import Link from "next/link"
import { Header } from "./components/Header"
import Image from "next/image"
import { Fragment } from "react"
import "./css/pages/home.css"
import homeBackDesktop from "./assets/home/background-home-desktop.jpg"
import homeBackTablet from "./assets/home/background-home-tablet.jpg"
import homeBackMobile from "./assets/home/background-home-mobile.jpg"

export default function Home() {
  return (
    <Fragment>
      <Header page="home"/>
      <main className="home-main">

        <div className="presentation">
          <h2 className="barlow">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="bellefair">SPACE</h1>
          <p className="barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <Link href={"/destination"} className="explore-link bellefair">EXPLORE</Link>

      </main>

      <Image className="background-image desktop" src={homeBackDesktop} alt="Earth in space"/>
      <Image className="background-image tablet" src={homeBackTablet} alt="Earth in space"/>
      <Image className="background-image mobile" src={homeBackMobile} alt="Earth in space"/>
    </Fragment>
  )
}
