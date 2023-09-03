import Image, { StaticImageData } from 'next/image'
import { DestinationNav } from './DestinationNav'
import "../css/components/planet.css"

export const Planet = ({name, description, distance, time, image}: {name: string, description: string, distance: string, time: string, image: StaticImageData}) => {
  
  return (
    <article className='planet'>
        <Image draggable="false" src={image} alt={name}/>
        
        <div className='planet-content'>
            <DestinationNav/>
            <h2 className='planet-name bellefair'>{name.toUpperCase()}</h2>
            <p className='planet-description barlow'>{description}</p>
            <div className='travel-details'>
                <p className='planet-distance bellefair'><span className='barlow-c'>AVG. DISTANCE</span>{distance.toUpperCase()}</p>
                <p className='planet-time bellefair'><span className='barlow-c'>EST. TRAVEL TIME</span>{time.toUpperCase()}</p>
            </div>
        </div>
    </article>
  )
}
