import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import launchLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg"
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"

export const planets = [
    {
        name: "launch vehicle",
        descritpion: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        images: {
            portrait: launchPortrait,
            landscape: launchLandscape
        }
    },
    {
        name: "spaceport",
        descritpion: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        image: {
            portrait: spaceportPortrait,
            landscape: spaceportLandscape
        }
    },
    {
        name: "space capsule",
        descritpion: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        image: {
            portrait: capsulePortrait,
            landscape: capsuleLandscape
        }
    }
]