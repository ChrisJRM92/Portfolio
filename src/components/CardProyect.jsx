import './styles/CardProyect.scss'

const CardProyect = ({data}) => {
  console.log(data)
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
          <button className='btn_proyects'>Github</button>
          <button className='btn_proyects'>Live <p></p></button>
        </div>
      </div>
    </div>
  )
}

export default CardProyect