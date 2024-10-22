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
import { FaStar } from "react-icons/fa";
// import { IoIosArrowUp } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import ArrowDown from "./ArrowDown";
import { useTranslation } from 'react-i18next';
import Contact from "./Contact";
import { Carousel } from 'nuka-carousel';

const Content = () => {
  const { t } = useTranslation();

  const data_frontend = [
    {
      backColor: 'transparent',
      title: t('projects_frontend.mazda.title'),
      description: t('projects_frontend.mazda.description'),
      button_description: "Live",
      color_content: "#ff3b34",
      img: '/imgs/mokmazda.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "block",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/mazda3_workshop_manual_0309",
      deploy: "https://www.mazda3bk.info/"
    },
    {
      backColor: 'transparent',
      title: t('projects_frontend.pokedex.title'),
      description: t('projects_frontend.pokedex.description'),
      button_description: "Live",
      color_content: "#ff3b34",
      img: '/imgs/mokpokemon.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "none",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/pokedex_api",
      deploy: "https://pokedex-api-six-weld.vercel.app/"
    },
    {
      backColor: 'transparent',
      title: t('projects_frontend.weather.title'),
      description: t('projects_frontend.weather.description'),
      button_description: "Live",
      color_content: "#ff3b34",
      img: '/imgs/mokweather.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "none",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/weather_info",
      deploy: "https://weather-info-omega.vercel.app/"
    },
  ]

  const data_backend = [
    {
      backColor: 'transparent',
      title: t('projects_backend.mazda.title'),
      description: t('projects_backend.mazda.description'),
      button_description: "Postman",
      color_content: "#f15a24",
      img: '/imgs/api_ecommerce.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "none",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/StoreNodeJs",
      deploy: "https://documenter.getpostman.com/view/36288861/2sAXjJ5CpH"
    },
    {
      backColor: 'transparent',
      title: t('projects_backend.pokedex.title'),
      description: t('projects_backend.pokedex.description'),
      button_description: "Postman",
      color_content: "#f15a24",
      img: '/imgs/api_movies.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "none",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/AppMoviesJsNode",
      deploy: "https://documenter.getpostman.com/view/36288861/2sAXqqci9k"
    },
    {
      backColor: 'transparent',
      title: t('projects_backend.weather.title'),
      description: t('projects_backend.weather.description'),
      button_description: "Postman",
      color_content: "#f15a24",
      img: '/imgs/mokweather.png',
      btn_color: "#111111",
      component: <FaStar />,
      color_component: '#FFC300',
      display_icon: "none",
      icon_size: '15px',
      github: "https://github.com/ChrisJRM92/weather_info",
      deploy: "https://weather-info-omega.vercel.app/"
    },
  ]

  const data_automation = [
    {
      backColor: 'transparent',
      title: t('projects_automation.building.title'),
      description: t('projects_automation.building.description'),
      button_description: "Live",
      color_content: "#f15a24",
      img: '/imgs/android1.png',
      btn_color: "#111111",
      component: <IoLogoAndroid />,
      color_component: '#1bdb5e',
      display_icon: "block",
      icon_size: '20px',
      github: "https://github.com/ChrisJRM92/uide_project",
      deploy: "https://drive.google.com/file/d/1v01SZuylHLaKnZuNZJBHsm_6bEgNXCII/view?usp=sharing"
    },
    // {
    //   backColor: 'transparent',
    //   title: t('projects_backend.pokedex.title'),
    //   description: t('projects_backend.pokedex.description'),
    //   button_description: "Postman",
    //   color_content: "#f15a24",
    //   img: '/imgs/api_movies.png',
    //   btn_color: "#111111",
    //   display_star: "none",
    //   github: "https://github.com/ChrisJRM92/AppMoviesJsNode",
    //   deploy: "https://documenter.getpostman.com/view/36288861/2sAXqqci9k"
    // },
    // {
    //   backColor: 'transparent',
    //   title: t('projects_backend.weather.title'),
    //   description: t('projects_backend.weather.description'),
    //   button_description: "Postman",
    //   color_content: "#f15a24",
    //   img: '/imgs/mokweather.png',
    //   btn_color: "#111111",
    //   display_star: "none",
    //   github: "https://github.com/ChrisJRM92/weather_info",
    //   deploy: "https://weather-info-omega.vercel.app/"
    // },
  ]

  return (
    <div className="header_content">
      {/* <a className="back-to-top" type="button"><IoIosArrowUp /></a> */}
      <div id="main" className="main">
        <button id="btn_profile" className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;{t('btn_profile')}</button>
        <h1 id="main_description" className="title_resume">{t('main_description')}</h1>
        <ArrowDown />
      </div>

      <div id="about" className="about">
        <button id="btn_about_section" className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;{t('btn_about_section')}</button>
        <h2 id="about_title" className="title_section">{t('about_title')}</h2>
        <p id="about_description" className="description">{t('about_description')}</p>
        <br />
        <p id="about_description2" className="description">{t('about_description2')}</p>
        <div className="container_img">
          {/* <div style={{ backgroundImage: "url('/me_1.jpg')" }} className="container_photo"></div> */}
          {/* <div style={{ backgroundImage: "url('/me_2.jpg')" }} className="container_photo"></div> */}
          {/* <div style={{ backgroundImage: "url('/me_3.jpg')" }} className="container_photo"></div> */}
        </div>
        <h2 id="skills_about" className="title_section_skills">{t('skills_about')}</h2>
        <div className="container_skills">
          <button id="skill_1" className="skills">{t('skill_1')}</button>
          <button id="skill_2" className="skills">{t('skill_2')}</button>
          <button id="skill_3" className="skills">{t('skill_3')}</button>
          <button id="skill_4" className="skills">{t('skill_4')}</button>
          <button id="skill_5" className="skills">{t('skill_5')}</button>
          <button id="skill_6" className="skills">{t('skill_6')}</button>
        </div>
      </div>

      <div id="portfolio" className="portfolio">
        <button id="btn_portfolio_content" className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;{t('btn_portfolio_content')}</button>
        <h2 id="sub_title_1" className="title_section">{t('sub_title_1')}</h2>
        <h3 id="title_description_1" className="sub_title_proyects">{t('title_description_1')}</h3>
        <div className="proyects">
          <CardProyect data={data_frontend[0]} />
          <CardProyect data={data_frontend[1]} />
          <CardProyect data={data_frontend[2]} />
        </div>
        <br />
        <h3 id="title_description_2" className="sub_title_proyects">{t('title_description_2')}</h3>
        <div className="proyects">
          <CardProyect data={data_backend[0]} />
          <CardProyect data={data_backend[1]} />
          {/* <CardProyect data={data_backend[2]} /> */}
        </div>
        <br />
        <h3 id="title_description_3" className="sub_title_proyects">{t('title_description_3')}</h3>
        <div className="proyects">
          <CardProyect data={data_automation[0]} />
          {/* <CardProyect data={data_backend[1]} /> */}
          {/* <CardProyect data={data_backend[2]} /> */}
        </div>
      </div>

      <div id="experience" className="experience">
        <button id="btn_knowledge" className="btn_section"><p className="icon_star"><PiStarFourFill /></p>{t('btn_knowledge')}</button>
        <h2 id="experience_title" className="title_section">{t('experience_title')}</h2>
        <p id="experience_description" className="description">{t('experience_description')}</p>
        <div className="container_exp">
          <div className="skill_icon"><FaHtml5 /><p>HTML5</p></div>
          <div className="skill_icon"><FaCss3Alt /><p>CSS3</p></div>
          <div className="skill_icon"><FaJsSquare /><p>Javascript</p></div>
          <div className="skill_icon"><FaReact /><p>React</p></div>
          <div className="skill_icon"><FaSass /><p>Sass</p></div>
          <div className="skill_icon"><FaNpm /><p>npm</p></div>
          <div className="skill_icon"><FaNode /><p>NodeJs</p></div>
          <div className="skill_icon"><BiLogoPostgresql /><p>PostgreSQL</p></div>
          <div className="skill_icon"><IoLogoVercel /><p>Vercel</p></div>
          <div className="skill_icon"><FaGithub /><p>Github</p></div>
          <div className="skill_icon"><SiRailway /><p>Railway</p></div>
          <div className="skill_icon"><SiRender /><p>Render</p></div>
          <div className="skill_icon"><FaAws /><p>Amazon web services</p></div>
        </div>
      </div>

      <div id="contact_main_content" className="contact">
        <button id="btn_contact_section" className="btn_section"><p className="icon_star"><PiStarFourFill /></p>&nbsp;{t('btn_contact_section')}</button>
        <h2 id="contact_title_section" className="title_section">{t('contact_title_section')}</h2>
        <Contact />
      </div>

      <div className="footer">
        <hr className="hr_footer" />
        <p id="footer_year_copyright" className="footer_text">© 2024.</p>
        <p id="footer_copyright" className="footer_text">&nbsp;{t('footer_copyright')}</p>
      </div>


    </div>
  )
}

export default Content