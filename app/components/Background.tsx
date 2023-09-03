import Image, { StaticImageData } from 'next/image'
import React from 'react'

export const Background = ({backgroundDesktop, backgroundTablet, backgroundMobile}: {backgroundDesktop: StaticImageData, backgroundTablet: StaticImageData, backgroundMobile: StaticImageData}) => {
  return (
    <>
        <Image unoptimized className="background-image desktop" src={backgroundDesktop} alt="Space background"/>
        <Image unoptimized className="background-image tablet" src={backgroundTablet} alt="Space background"/>
        <Image unoptimized className="background-image mobile" src={backgroundMobile} alt="Space background"/>
    </>
  )
}
