
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
        <button className="btn_lang">ES</button>
        <button className="btn_dark_mode"><IoIosSunny /></button>
        <button className="btnContact">Contacto &nbsp; <p className="icon_message"><BiMessageDots /></p></button>
      </div>
    </div>
  )
}

export default TopMenu