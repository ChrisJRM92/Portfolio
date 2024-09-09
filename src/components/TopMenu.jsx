
import { IoIosSunny } from "react-icons/io";
import './styles/TopMenu.scss'

const TopMenu = () => {
  return (
    <div className="container_top_menu">
      <div className="container_btns_nav">
        <button className="btn">Inicio</button>
        <button className="btn">Proyectos</button>
        <button className="btn">Sobre mi</button>
      </div>
      <div className="container_btns_help">
        <button className="btn_lang">ES</button>
        <button className="btn_dark_mode"><IoIosSunny /></button>
        <button className="btnContact">Contacto </button>
      </div>
    </div>
  )
}

export default TopMenu