import { FaGithub } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import './styles/CardProyect.scss'

const CardProyect = ({data}) => {
  // console.log(data)
  return (
    <div className="card_proyect">
      <div className="back_color" style={{ backgroundColor: `${data?.backColor}` }}></div>
      <div className="middle_color">
        <div className='middle_card'></div>
      </div>
      <div className="front_content">
        <img className='img_card' src={data?.img} alt="" />
        <h1 className='title_card'>{data?.title}</h1>
        <p className='description_card'>{data?.description}</p>
        <div className='butom_proyect'>
          <a href={data?.github} target="_blank" style={{backgroundColor: `${data?.btn_color}`, color: `#e9e9f1`, display: `${data?.display}`}} className='btn_proyects'><p className="btn_github"><FaGithub /></p>&nbsp;&nbsp;Github</a>
          <a href={data?.deploy} target="_blank" style={{display: `${data?.display}`, color:`${data?.color_content}`}} className='btn_proyects'><p className="live"><FaCircle /></p>&nbsp;{data?.button_description}</a>
          <a style={{backgroundColor: `${data?.backColor}`, color: '#FFC300', display: `${data?.display_star}`}} className="btn_proyects"><p className="star"><FaStar /></p></a>
        </div>
      </div>
    </div>
  )
}

export default CardProyect