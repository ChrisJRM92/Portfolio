
import { IoIosSunny } from "react-icons/io";
import { BiMessageDots } from "react-icons/bi";

import './styles/TopMenu.scss'

const TopMenu = () => {
  return (
    <div className="container_top_menu">
      <div className="container_btns_nav">
        <a href="#main" className="btn">Inicio</a>
        <a href="#portfolio" className="btn">Portafilio</a>
        <a href="#about" className="btn">Sobre mi</a>
        <a href="#experience" className="btn">Experiencia</a>
      </div>
      <div className="container_btns_help">
        <a className="btn_lang">ES</a>
        <a className="btn_dark_mode"><IoIosSunny /></a>
        <a href="#contact" className="btnContact">Contacto &nbsp; <p className="icon_message"><BiMessageDots /></p></a>
      </div>
    </div>
  )
}

export default TopMenu