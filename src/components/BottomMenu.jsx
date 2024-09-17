import { RiHome3Fill } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { SiAboutdotme } from "react-icons/si";
import { LuMessagesSquare } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import './styles/BottomMenu.scss'
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Lang from "./Lang";
import DarkMode from "./DarkMode";
import { useTranslation } from 'react-i18next';

const BottomMenu = () => {
  const { t } = useTranslation();
  const [checked1, setChecked1] = useState(false);
  
  const toggleCheckbox = () => {
    setChecked1(!checked1);
  };

  return (
    <div className="container_nav_menu">
      {checked1 && (
        <div className="container_options">
          <div className="container_lang_bottom_menu">
            <p id="lan_option" className="lang_description_bottom_menu">{t('lan_option')}</p>
            <div><Lang /></div>
          </div>
          {/* <div className="container_dark_bottom_menu">
            <p id="theme_option" className="lang_description_bottom_menu">{t('theme_option')}</p>
            <div><DarkMode/></div>
          </div> */}
        </div>
      )}

      <a className="nav_icon_bottom" href="#main"><p className="icon_menu_bottom"><RiHome3Fill /></p>Inicio</a>
      <a className="nav_icon_bottom" href="#portfolio"><p className="icon_menu_bottom"><HiOutlineClipboardDocumentList /></p>Portafolio</a>
      <a className="nav_icon_bottom" href="#about"><p className="icon_menu_bottom"><SiAboutdotme /></p>Sobre mi</a>
      <a className="nav_icon_bottom" href="#contact_main_content"><p className="icon_menu_bottom"><LuMessagesSquare /></p>Contacto</a>
      <div className="conatiner_menu_buttom">
        <button className="nav_icon_bottom" onClick={toggleCheckbox}><p className="icon_menu_bottom style_menu_hamburger">{checked1 ? <IoClose /> : <IoMenu />}</p></button>
        <input className="checkbox_state" type="checkbox" id="checkbox_menu" checked={checked1} onChange={toggleCheckbox} />
      </div>
    </div>
  )
}

export default BottomMenu