import React from 'react';
import HomePage from '../src/components/HomePage/Home';
import Footer from '../src/components/Footer/Footer.jsx';
import Navbar from '../src/components/Navbar/Navbar';
import ButtonContact from '../src/components/ButtonContact/ButtonContact';

export default function Home() {
  return (
    <div className="home">


      <Navbar/>
      <HomePage/>
      <ButtonContact/>
      <Footer/>
  
      
    </div>
  )
}
