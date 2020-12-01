import React , {Component} from 'react'
import Carousel from 'react-elastic-carousel'
import Item from '../Item/Item';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1  },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];

const Carousels = () => {
  return(
    <section className="container-testimonials">
      <div className="container-header">
        <h1>Nuestros Lectores</h1>
        <a href="" data-title="hola">Hola</a>
      </div>
      <div className="container-fluid" >
          <Carousel itemsToShow={1} showArrows={true} enableAutoPlay={true} autoPlaySpeed={6000} disableArrowsOnEnd={false}
>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Carousel>
          </div>
    </section>
   
   

)
  
}

export default Carousels
