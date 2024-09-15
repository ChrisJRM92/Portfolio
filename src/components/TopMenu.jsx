import { BiMessageDots } from "react-icons/bi";

import './styles/TopMenu.scss'
import Lang from "./Lang";
import DarkMode from "./DarkMode";

import { useEffect, useState } from 'react';
import axios from 'axios';

const TopMenu = () => {
  const [checked, setChecked] = useState(false);
  const [translations, setTranslations] = useState({});
  console.log(translations)
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  console.log(translations)
  useEffect(() => {
    const selectedLanguage = checked ? 'en' : 'es';
    axios.get(`../../src/assets/lang/${selectedLanguage}.json`)
      .then(response => {
        setTranslations(response.data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
      });
  }, [checked]);


  return (
    <div className="container_top_menu">
      <div className="container_btns_nav">
        <a href="#main" id="btn_home" className="btn">{translations?.btn_home}</a>
        <a href="#portfolio" id="btn_portfolio" className="btn">Portafilio</a>
        <a href="#about" id="btn_about" className="btn">Sobre mi</a>
        <a href="#experience" id="btn_experience" className="btn">Experiencia</a>
      </div>
      <div className="container_btns_help">
        <a className="btn_lang"><Lang checked={checked} toggleCheckbox={toggleCheckbox} /></a>
        <a className="btn_dark_mode"><DarkMode /></a>
        <a href="#contact" id="btn_contact" className="btnContact">Contacto &nbsp; <p className="icon_message"><BiMessageDots /></p></a>
      </div>
    </div>
  )
}

export default TopMenu