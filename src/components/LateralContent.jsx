import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import './styles/LateralContent.scss'

const LateralContent = () => {
  return (
    <div className='containerCard'>
      <div className='header'>
        <div className='iconProfile'></div>
        <h1 id="home_mobile" className='name'>Christian Romero</h1>
      </div>
      <div className='photo_profile'></div>
      <p className='profile_description'>Perfil profesional:</p>
      <h1 className='profession'>Ing. Electromecánico</h1>
      <h1 className='profession'>Fullstack developer</h1>
      <div className='social_networks'>
        <a href="https://github.com/ChrisJRM92" target="_blank" className='social'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/chrisjrm/" target="_blank" className='social'><FaLinkedin /></a>
        <a href="https://wa.me/+593999796892?text=Tu%20Mensaje%20De%20Texto" target="_blank" className='social'><FaWhatsapp /></a>
        <a href="https://www.facebook.com/CJRM92/" target="_blank" className='social'><FaFacebook /></a>
        <a href="https://www.instagram.com/cris_s6662024/" target="_blank" className='social'><FaInstagram /></a>
      </div>
      <div className="btn">
        <a href="#contact" className="btn_contact">Contáctame</a>
      </div>
    </div>
  )
}

export default LateralContent