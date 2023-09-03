import Link from "next/link"
import { Header } from "./components/Header"
import Image from "next/image"
import { Fragment } from "react"
import "./css/pages/home.css"
import backgroundDesktop from "./assets/home/background-home-desktop.jpg"
import backgroundTablet from "./assets/home/background-home-tablet.jpg"
import backgroundMobile from "./assets/home/background-home-mobile.jpg"
import { Background } from "./components/Background"

export default function Home() {
  return (
    <>
      <Header page="home"/>
      <main className="home-main">

        <div className="presentation">
          <h2 className="barlow-c">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="bellefair">SPACE</h1>
          <p className="barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>

        <Link href={"/destination"} className="explore-link bellefair">EXPLORE</Link>

      </main>

      <Background backgroundDesktop={backgroundDesktop} backgroundTablet={backgroundTablet} backgroundMobile={backgroundMobile}/>
    </>
  )
}
