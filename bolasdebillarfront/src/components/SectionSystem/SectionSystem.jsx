import React from 'react'
import {IconContext } from 'react-icons';
import { MdDashboard, MdAssignmentTurnedIn, MdAssessment ,MdDonutLarge} from "react-icons/md";
const SectionSystem = () => {
  return (

    <div>
 <IconContext.Provider
      value={{
        fill: "#fff",
        size: "2em",
        style: { padding: "2px" },
        className: "primaryBackground"
      }}
    >

        <div className="container-grid">
          <div className="container-grid-child">
            <div className="container-img">
              <MdAssignmentTurnedIn/>
            </div>
            
            <h3>Principios de tres bandas</h3>
            <p>Libro 1</p>
          </div>
          <div className="container-grid-child">
          <div className="container-img">
              <MdAssessment/>
            </div>
            <h3>Sistemas avanzados de tres bandas</h3>
            <p>Libro 2</p>

          </div>
          <div className="container-grid-child">
          <div className="container-img">
              <MdDashboard/>
            </div>
            <h3>Billar básico, tome de bola y efecto</h3>
            <p>Libro 3</p>

          </div>
          <div className="container-grid-child">
          <div className="container-img">
              <MdDonutLarge/>
            </div>
            <h3>Sistema de billar favoritos</h3>
            <p>Libro 4</p>

          </div>
        </div>
        </IconContext.Provider>
    </div>
  )
}

export default SectionSystem
