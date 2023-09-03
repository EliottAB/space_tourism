'use client'

import { SyntheticEvent } from "react"
import "../css/components/destination-nav.css"

export const DestinationNav = () => {

    function getClickedPlanet(planetName: string, planets: NodeListOf<ChildNode> | undefined){

        let clickedPlanet

        switch (planetName) {
            case "MOON":
                clickedPlanet = planets ? planets[0] : null
                
                break;

            case "MARS":
                clickedPlanet = planets ? planets[1] : null    

                break;

            case "EUROPA":
                clickedPlanet = planets ? planets[2] : null   
                
                break;

            case "TITAN":
                clickedPlanet = planets ? planets[3] : null   
                
                break;
        
            default:
                break;
        }
        return clickedPlanet
    }

    function disappearPlanet(planet: HTMLElement, planetImage: HTMLElement, planetContent: HTMLElement){
        planetImage.style.transition = "translate .8s, opacity .8s"
        planetContent.style.transition = "translate 1s, opacity .8s"
        planetImage.style.translate = "50em"
        planetImage.style.opacity = "0"
        planetContent.style.opacity = "0"
        setTimeout(() => {
            planetImage.style.transition = ""
            planetImage.style.translate = "-50em"
        }, 800);

        //avoid the user to spam and break animations
        planet.style.pointerEvents = "none"
    }

    function appearPlanet(planet: HTMLElement, planetImage: HTMLElement, planetContent: HTMLElement){
        planetImage.style.translate = "-50em"
        planetContent.style.translate = "0 -10em"
        setTimeout(() => {
            planetImage.style.transition = "translate .8s, opacity .8s"
            planetImage.style.translate = ""
            planetImage.style.opacity = "1"
            planetContent.style.transition = "translate 1s, opacity 2s"
        }, 100);
        
        setTimeout(() => {
            planetContent.style.opacity = "1"
            planetContent.style.translate = "0"
        }, 600);

        //avoid the user to spam and break animations
        setTimeout(() => {
            planet.style.pointerEvents = "all"
        }, 900);
    }

    function changePlanet(event: SyntheticEvent){
        const target = event.target as HTMLElement
        const actualPlanet = target.offsetParent?.parentElement
        const planetsContainer = actualPlanet?.parentElement
        const planets = planetsContainer?.childNodes
        const clickedPlanet = getClickedPlanet(target.innerText, planets)
        
        const actualPlanetImage = actualPlanet?.firstChild
        const actualPlanetContent = actualPlanet?.lastChild

        const clickedPlanetImage = clickedPlanet?.firstChild
        const clickedPlanetContent = clickedPlanet?.lastChild
        
        //disappear last planet
        if (actualPlanet instanceof HTMLElement && actualPlanetImage instanceof HTMLElement && actualPlanetContent instanceof HTMLElement && clickedPlanet instanceof HTMLElement && clickedPlanetImage instanceof HTMLElement && clickedPlanetContent instanceof HTMLElement) {
            if (clickedPlanet !== actualPlanet) {        
                disappearPlanet(actualPlanet, actualPlanetImage, actualPlanetContent)
                appearPlanet(clickedPlanet, clickedPlanetImage, clickedPlanetContent)
            }
        }

    }

  return (
    <div className="change-planet barlow-c" onClick={e => changePlanet(e)}>
        <button>MOON</button>
        <button>MARS</button>
        <button>EUROPA</button>
        <button>TITAN</button>
    </div>
  )
}
