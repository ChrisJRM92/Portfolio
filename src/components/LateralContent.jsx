import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import './styles/LateralContent.scss';

import { useTranslation } from 'react-i18next';

const LateralContent = () => {

  const { t } = useTranslation();

  return (
    <div className='containerCard'>
      <div className='header'>
        <div className='iconProfile'></div>
        <a id="home_mobile" className='name'>Christian Romero</a>
      </div>
      <div className='photo_profile'></div>
      <p className='profile_description' id="profession">{t('profession')}</p>
      <h1 className='profession' id="carrer_1">{t('carrer_1')}</h1>
      <h1 className='profession' id="carrer_2">{t('carrer_2')}</h1>
      <div className='social_networks'>
        <a href="https://github.com/ChrisJRM92" target="_blank" className='social'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/chrisjrm/" target="_blank" className='social'><FaLinkedin /></a>
        <a href="https://wa.me/+593999796892?text=Hola Christian, vi tu portafolio, ¿podríamos planificar una reunión?" target="_blank" className='social'><FaWhatsapp /></a>
        {/* <a href="https://www.facebook.com/CJRM92/" target="_blank" className='social'><FaFacebook /></a> */}
        {/* <a href="https://www.instagram.com/cris_s6662024/" target="_blank" className='social'><FaInstagram /></a> */}
      </div>
      <div className="btn">
        <a href="#contact_main_content" id="contact" className="btn_contact">{t('contact')}</a>
      </div>
    </div>
  )
}

export default LateralContent