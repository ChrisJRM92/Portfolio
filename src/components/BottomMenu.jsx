import { RiHome3Fill } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import './styles/BottomMenu.scss'


const BottomMenu = () => {
  return (
    <div className="container_nav_menu">
      <a className="nav_icon_bottom" href="#main"><p className="icon_menu_bottom"><RiHome3Fill /></p>Inicio</a>
      <a className="nav_icon_bottom" href="#portfolio"><p className="icon_menu_bottom"><HiOutlineClipboardDocumentList /></p>Portafolio</a>
      <a className="nav_icon_bottom" href="#about"><p className="icon_menu_bottom"><SiAboutdotme /></p>Sobre mi</a>
      <a className="nav_icon_bottom" href="#contact_main_content"><p className="icon_menu_bottom"><LuMessagesSquare /></p>Contacto</a>
      <a className="nav_icon_bottom"><p className="icon_menu_bottom style_menu_hamburger"><IoMenu /></p></a>
    </div>
  )
}

export default BottomMenu