

import { BiMessageDots } from "react-icons/bi";

import './styles/TopMenu.scss'
import Lang from "./Lang";
import DarkMode from "./DarkMode";

const TopMenu = () => {
  return (
    <div className="container_top_menu">
      <div className="container_btns_nav">
        <a href="#main" id="btn_home" className="btn">Inicio</a>
        <a href="#portfolio" id="btn_portfolio" className="btn">Portafilio</a>
        <a href="#about" id="btn_about" className="btn">Sobre mi</a>
        <a href="#experience" id="btn_experience" className="btn">Experiencia</a>
      </div>
      <div className="container_btns_help">
        <a className="btn_lang"><Lang/></a>
        <a className="btn_dark_mode"><DarkMode/></a>
        <a href="#contact" id="btn_contact" className="btnContact">Contacto &nbsp; <p className="icon_message"><BiMessageDots /></p></a>
      </div>
    </div>
  )
}

export default TopMenu