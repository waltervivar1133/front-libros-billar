import React from 'react';
import { Button } from '../Elements/Button.jsx';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';



function Pricing() {
  return (
   
      <div className='pricing__section' id ="pricing">
        <div className='pricing__wrapper'>
          <div className="pricing__container-heading">
          <h1 className='pricing__heading'>Precios</h1>
          </div>
          <div className='pricing__container'>
            <a href='https://mpago.la/2dFH82q' target="_blank" className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Principios de tres bandas</h3>
                <h4>$15.00 </h4>
                <p>libro 1</p>
                <ul className='pricing__container-features'>
                  <li>Diseño a Full Color.</li>
                  <li>157 Páginas.</li>
                  <li>30 Sistemas de Billar.</li>
                  <li>Formato Digital en Versión PDF.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Ordene ahora
                </Button>
              </div>
            </a>
            <a href='https://mpago.la/1GaHQV3' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Sistema avanzados de tres bandas</h3>
                <h4>$20.00</h4>
                <p>libro 2</p>
                <ul className='pricing__container-features'>
                  <li>Diseño a Full Color.</li>
                  <li>240 Páginas.</li>
                  <li>72 Sistemas de Billar.</li>
                  <li>Formato Digital en Versión PDF.</li>
                  
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                 Ordene ahora
                </Button>
              </div>
            </a>
            <a href='https://mpago.la/1xQv7K1' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Billar básico, tome de bola y efecto</h3>
                <h4>$15.00</h4>
                <p>libro 3</p>
                <ul className='pricing__container-features'>
                  <li>Diseño a Full Color.</li>
                  <li>70 Páginas.</li>
                  <li>20 Sistemas de Billar.</li>
                  <li>Formato Digital en Versión PDF.</li>

                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Ordene ahora
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
 
  );
}
export default Pricing;