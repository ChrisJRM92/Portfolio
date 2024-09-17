import { RiHome3Fill } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import './styles/BottomMenu.scss'
import { useState } from "react";
import { IoClose } from "react-icons/io5";



const BottomMenu = () => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="container_nav_menu">
      <a className="nav_icon_bottom" href="#main"><p className="icon_menu_bottom"><RiHome3Fill /></p>Inicio</a>
      <a className="nav_icon_bottom" href="#portfolio"><p className="icon_menu_bottom"><HiOutlineClipboardDocumentList /></p>Portafolio</a>
      <a className="nav_icon_bottom" href="#about"><p className="icon_menu_bottom"><SiAboutdotme /></p>Sobre mi</a>
      <a className="nav_icon_bottom" href="#contact_main_content"><p className="icon_menu_bottom"><LuMessagesSquare /></p>Contacto</a>
      <div className="conatiner_menu_buttom">
        <button className="nav_icon_bottom" onClick={toggleCheckbox}><p className="icon_menu_bottom style_menu_hamburger">{checked ? <IoClose /> : <IoMenu />}</p></button>
        <input className="checkbox_state" type="checkbox" id="checkbox_menu" checked={checked} onChange={toggleCheckbox} />
      </div>
    </div>
  )
}

export default BottomMenu