import { PiStarFourFill } from "react-icons/pi";
import './styles/Content.scss'

import CardProyect from "./CardProyect";
import { MdDescription } from "react-icons/md";

const data = [
  { 
    backColor: 'transparent',
    title: 'Mazda 3 workshop manual',
    description: 'Adaptacion de manual de taller.',
    img: '/mokmazda.png',
    btn_color: "#111111"
  },
  {
    backColor: 'transparent',
    title: 'Pokedex virtual',
    description: 'Consumo de información PokeAPI',
    img: '/mokpokemon.png',
    btn_color: "#111111"
  },
  {
    backColor: 'transparent',
    title: 'Weather info',
    description: 'Consumo datos Open Weather API',
    img: '/mokweather.png',
    btn_color: "#111111"
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
          <CardProyect data={data[1]}/>
          <CardProyect data={data[2]}/>
          <CardProyect />
          <CardProyect />
          <CardProyect />

        </div>
      </div>

    </div>
  )
}

export default Content