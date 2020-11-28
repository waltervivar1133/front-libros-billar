import React from 'react'
import {Button } from '../Elements/Button.jsx'
import SectionSystem from '../SectionSystem/SectionSystem';
import Video from '../Video/Video';

const HeroSection = ({
  lightBg, topLine, lightText , lightTextDesc , headline , description , buttonLabel, img, alt, imgStart, descarga , descriptionSecondary,readBook, idContent, video,button,target
}) => {
  return (
    <>
      <div id={idContent} className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
        <div className="container">
          <div className="row home__hero-row"
            style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">
                  {topLine}
                </div>
                <h1 className={lightText ? 'heading': 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__hero-subtitle': 'home__hero-subtitle dark'}>{description}</p>
                <p className={lightTextDesc ? 'home__hero-subtitle_secondary': 'home__hero-subtitle dark'}>{descriptionSecondary}</p>

               {button ?<a href={descarga} target={target} >
                  <Button buttonSize="btn--wide" buttonColor="blue">{buttonLabel}</Button>
               </a> : null
              }
              </div>
            </div>
            <div className="col">
              {readBook  ? <SectionSystem/> : <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img"/>
              </div> && video ? <Video/> :  <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img"/></div> }
             
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default HeroSection
