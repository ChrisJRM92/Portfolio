
import { PiStarFourFill } from "react-icons/pi";
import './styles/Content.scss'

const Content = () => {
  return (
    <div className="header">
      <button className="btnHome"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Perfil profesional</button>
      <h1 className="title_resume">Hola, soy Christian, ingeniero electromecanico y desarrollador web fullstacks</h1>
    </div>
  )
}

export default Content