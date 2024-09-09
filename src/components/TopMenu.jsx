
import { IoIosSunny } from "react-icons/io";
import { BiMessageDots } from "react-icons/bi";

import './styles/TopMenu.scss'

const TopMenu = () => {
  return (
    <div className="container_top_menu">
      <div className="container_btns_nav">
        <button className="btn">Inicio</button>
        <button className="btn">Proyectos</button>
        <button className="btn">Sobre mi</button>
        <button className="btn">Experiencia</button>
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