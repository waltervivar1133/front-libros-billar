import React from 'react'
import HeroSection from '../HeroSection/HeroSection';
import Pricing from '../Pricing/Pricing';
import Carousels from '../Carousel/Carousel';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo , homeObjFive} from './Data';
const Home = () => {
  return (
    <div>
      < HeroSection {...homeObjOne}/>
      <HeroSection  {...homeObjTwo}/>
      <HeroSection {...homeObjFive}/>
      <HeroSection {...homeObjThree}/>
      <Pricing  />
      <Carousels />
      <HeroSection {...homeObjFour}/>
    </div>
  )
}

export default Home
