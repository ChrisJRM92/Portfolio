import { PiStarFourFill } from "react-icons/pi";
import './styles/Content.scss'

import CardProyect from "./CardProyect";
import { MdDescription } from "react-icons/md";

const data = [
  { 
    backColor: 'transparent',
    title: 'Mazda 3 workshop manual',
    description: 'Adaptacion de manual de taller Mazda 3 BK con dominio propio',
    img: '/mm3.png'
  },
  {
    backColor: '#111111',
    title: 'Pokedex API',
    description: 'Consumo de informacion de la API de pokedex',
    img: '/mm3.png'
  },

]

const Content = () => {
  return (
    <div className="header_content">
      <div className="main">
        <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Perfil profesional</button>
        <h1 className="title_resume">Hola, soy Christian, ingeniero electromecanico y desarrollador web fullstacks</h1>
      </div>
      <div className="portfolio">
        <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Portafolio</button>
        <h1 className="title_section">Proyectos realizados</h1>
        <div className="proyects">
          <CardProyect data={data[0]} />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />
          <CardProyect />

        </div>
      </div>

    </div>
  )
}

export default Content