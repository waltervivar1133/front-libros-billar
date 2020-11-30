import React , {useState , useEffect} from 'react'

import { FaBars, FaTimes } from 'react-icons/fa';
import {BiBookOpen} from 'react-icons/bi'
import { Button } from '../Elements/Button.jsx';




const Navbar = () => {

  const [ click , setClick] = useState(false);
  const [button , setButton] = useState(true);

  const handleClick = () =>  setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton  = () =>{
    if(window.innerWidth <= 960 ){
      setButton(false);
    }else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
   
  }, []);

//  window.addEventListener('resize', showButton);
 
  return (
    <>
    
      <div className="navbar">
        <div className="navbar-container container">
          <a href='/' className="navbar-logo">
            <BiBookOpen className="navbar-icon" onClick={ closeMobileMenu}/>
            Billar
          </a>
          <div className="menu-icon" onClick={handleClick}>
            { click ? <FaTimes/> : <FaBars/> }
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li className="nav-item">
              <a href="#home" className="nav-links"  onClick={ closeMobileMenu}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#autor" className="nav-links"  onClick={ closeMobileMenu}>
                Autor
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-links"  onClick={ closeMobileMenu}>
                Precios
              </a>
            </li>
            <li className="nav-item">
              <a href="#videos" className="nav-links"  onClick={ closeMobileMenu}>
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonios" className="nav-links"  onClick={ closeMobileMenu}>
               Testimonios
              </a>
            </li>
            <li className="nav-btn">
              { button ? (
                 <a href='#pricing' className="btn-link"  onClick={ closeMobileMenu}>
                   <Button buttonStyle ="btn--outline"> Compra ya!</Button>
                 </a>
              ) 
              : (
                <a href='#pricing' className="btn-link"  onClick={ closeMobileMenu}>
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Compra ya!</Button>
                </a>
              ) 

              }
            </li>
          </ul>
        </div>
      </div>
    
    </>
  )
}

export default Navbar;
