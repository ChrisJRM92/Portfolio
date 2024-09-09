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
        <h1 className='name'>Christian Romero</h1>
      </div>
      <div className='photo_profile'></div>
      <p className='profile_description'>Perfil profesional:</p>
      <h1 className='profession'>Ing. Electromecánico</h1>
      <h1 className='profession'>Fullstack developer</h1>
      <div className='social_networks'>
        <div className='social'><FaGithub /></div>
        <div className='social'><FaLinkedin /></div>
        <div className='social'><FaWhatsapp /></div>
        <div className='social'><FaFacebook /></div>
        <div className='social'><FaInstagram /></div>
      </div>
      <div className="btn">
        <button className="btn_contact">Contáctame</button>
      </div>
    </div>
  )
}

export default LateralContent