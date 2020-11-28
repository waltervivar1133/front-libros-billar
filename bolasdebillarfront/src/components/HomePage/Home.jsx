import React from 'react'
import HeroSection from '../HeroSection/HeroSection';
import Pricing from '../Pricing/Pricing';
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
const Home = () => {
  return (
    <div>
      < HeroSection {...homeObjOne}/>
      <HeroSection  {...homeObjTwo}/>
      <HeroSection {...homeObjThree}/>
      <Pricing  />
      <HeroSection {...homeObjFour}/>
    </div>
  )
}

export default Home
