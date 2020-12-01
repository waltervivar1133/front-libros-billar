import React from 'react'
import {FaWhatsapp} from 'react-icons/fa';

const LinkWhatsapp = "https://api.whatsapp.com/send?phone=51996236277&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20libros%20de%20tres%20bandas,%20muchas%20gracias.";

const textoHover = "Escríbenos si tienes  consultas, para saber precios y más!📖"

const ButtonContact = () => {
  return (
    <div>
     
     <div className="whatsapp">
        <a  data-title={textoHover} href={LinkWhatsapp} target="_blank">
            <FaWhatsapp className="whatsapp-icon" ></FaWhatsapp>
        </a>
        </div>
     
    </div>
  )
}

export default ButtonContact
