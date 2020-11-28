import React from 'react'
import {FaWhatsapp} from 'react-icons/fa';
import Link from 'next/link';

const LinkWhatsapp = "https://api.whatsapp.com/send?phone=51996236277&text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20libros%20de%20tres%20bandas,%20muchas%20gracias.";

const ButtonContact = () => {
  return (
    <div>
      <Link href={LinkWhatsapp}>
        <a target="_blank">
          <div className="whatsapp">
            <FaWhatsapp className="whatsapp-icon"></FaWhatsapp>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ButtonContact
