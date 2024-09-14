import { PiStarFourFill } from "react-icons/pi";
import './styles/Content.scss'

import CardProyect from "./CardProyect";
import { MdDescription } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNpm } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiRailway } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";


const data_dev = [
  {
    backColor: 'transparent',
    title: 'Mazda 3 workshop manual',
    description: 'Adaptacion de manual de taller.',
    img: '/mokmazda.png',
    btn_color: "#111111"
  },
  {
    backColor: 'transparent',
    title: 'Pokedex virtual',
    description: 'Consumo de información PokeAPI',
    img: '/mokpokemon.png',
    btn_color: "#111111"
  },
  {
    backColor: 'transparent',
    title: 'Weather info',
    description: 'Consumo datos Open Weather API',
    img: '/mokweather.png',
    btn_color: "#111111"
  },
]

const data_ing = [
  {
    backColor: 'transparent',
    title: 'Apoyo mantenimiento',
    description: 'Apoyo en mantenimiento de deldas de media tensión y tablero de instrumentación',
    img: '/mant1.png',
    btn_color: "#111111",
    display: "none"
  },
  {
    backColor: 'transparent',
    title: 'Electrificación',
    description: 'Electrificación de nave industrial de taller automotriz KIA',
    img: '/mant2.png',
    btn_color: "#111111",
    display: "none"
  },
  {
    backColor: 'transparent',
    title: 'Op. y mantenimiento',
    description: 'Operación y mantenimiento en planta de produción minera',
    img: '/mant3.png',
    btn_color: "#111111",
    display: "none"
  },
]

const Content = () => {
  return (
    <div className="header_content">
      <a class="back-to-top" type="button"><IoIosArrowUp /></a>
      <div id="main" className="main">
        <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Perfil profesional</button>
        <h1 className="title_resume">Hola, soy Christian, ingeniero electromecanico y desarrollador web fullstacks</h1>
        <div class="container_arrow_down">
          <a href="#portfolio" class="demo">
            <div class="box">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      <div id="portfolio" className="portfolio">
        <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Portafolio</button>
        <h2 className="title_section">Proyectos realizados</h2>
        <h3 className="sub_title_proyects">Proyectos de desarrollo web</h3>
        <div className="proyects">
          <CardProyect data={data_dev[0]} />
          <CardProyect data={data_dev[1]} />
          <CardProyect data={data_dev[2]} />
        </div>
        <br />
        <h3 className="sub_title_proyects">Proyectos de mantenimiento electromecánico</h3>
        <div className="proyects">
          <CardProyect data={data_ing[0]} />
          <CardProyect data={data_ing[1]} />
          <CardProyect data={data_ing[2]} />
        </div>
      </div>
      <div id="about" className="about">
        <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Sobre mi</button>
        <h2 className="title_section">Soluciones operativas</h2>
        <p className="description">Comprometido con la operatividad y funcionabilidad de sistemas, complemento mis conocimientos adquiridos a lo largo de mi carrera para brindar soluciones óptimas. Me gusta compartir en familia, me gusta viajar y conocer nuevos lugares, también manejo excelentes relaciones interpersonales para garantizar el mejor desempeño entre todos.</p>
        <div className="container_img">
          <div style={{ backgroundImage: "url('/me_1.jpg')" }} className="container_photo"></div>
          <div style={{ backgroundImage: "url('/me_2.jpg')" }} className="container_photo"></div>
          <div style={{ backgroundImage: "url('/me_3.jpg')" }} className="container_photo"></div>
        </div>
        <h2 className="title_section_skills">Habilidades Blandas</h2>
        <div className="container_skills">
          <button className="skills">Responsable</button>
          <button className="skills">Trabajo en equipo</button>
          <button className="skills">Creativo</button>
          <button className="skills">Puntual</button>
          <button className="skills">Proactivo</button>
          <button className="skills">Autodidacta</button>
        </div>
        <div id="experience" className="experience">
          <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Experiencia</button>
          <h2 className="title_section">Conocimientos</h2>
          <p className="description">Cuento con ámplia experiencia y conocimientos en los principales lenguajes y herramientas de producción.</p>
          <div className="container_exp">
            <div className="skill_icon"><FaHtml5 /></div>
            <div className="skill_icon"><FaCss3Alt /></div>
            <div className="skill_icon"><FaJsSquare /></div>
            <div className="skill_icon"><FaReact /></div>
            <div className="skill_icon"><FaSass /></div>
            <div className="skill_icon"><FaNpm /></div>
            <div className="skill_icon"><FaNode /></div>
            <div className="skill_icon"><BiLogoPostgresql /></div>
            <div className="skill_icon"><IoLogoVercel /></div>
            <div className="skill_icon"><FaGithub /></div>
            <div className="skill_icon"><SiRailway /></div>
            <div className="skill_icon"><SiRender /></div>
            <div className="skill_icon"><FaAws /></div>
          </div>
        </div>
        <div id="contact" className="contact">
          <button className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;Contacto</button>
          <h2 className="title_section">Contáctame</h2>
          <div className="container_contact">
            <form className="form" action="">
              <div className="form_card1">
                <p className="description">Puedes contactarme en todas mis redes sociales o mediante mensaje directo.</p>
                <div className="contact_div">
                  <div className="contact_content">
                    <div className="icon_contact"><FaWhatsapp /></div>
                    <a className="text_contact" href="">Enviar mensaje via whatsapp</a>
                  </div>
                  <div className="contact_content">
                    <div className="icon_contact"><FaPhone /></div>
                    <a className="text_contact" href="">+593999796892</a>
                  </div>
                  <div className="contact_content">
                    <div className="icon_contact"><IoIosMail /></div>
                    <a className="text_contact" href="">cjromerom28@gmail.com</a>
                  </div>
                  <div className="contact_content">
                    <div className="icon_contact"><FaLocationDot /></div>
                    <a className="text_contact" href="">Loja, Ecuador</a>
                  </div>
                </div>
              </div>
              <div className="form_card2">
                <div className="form_elements">
                  <input className="form_inputs" type="text" placeholder="Nombre" />
                </div>
                <div className="form_elements">
                  <input className="form_inputs" type="email" placeholder="Email" />
                </div>
                <div className="form_elements">
                  <input className="form_inputs" type="text" placeholder="Asunto" />
                </div>
                <div className="form_elements">
                  <textarea className="form_inputs text_area" name="" id="" placeholder="Mensaje..."></textarea>
                </div>
                <button className="btn_submit" type="submit">Enviar mensaje &nbsp;<LuSend /> </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <hr className="hr_footer" />
          <p className="footer_text">© 2024. Todos los derechos reservados</p>
        </div>

      </div>
    </div>
  )
}

export default Content