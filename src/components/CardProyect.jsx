import './styles/CardProyect.scss'

const CardProyect = ({data}) => {
  console.log(data)
  return (
    <div className="card_proyect">
      <div className="back_color" style={{ backgroundColor: `${data}` }}></div>
      <div className="middle_color">
        <div className='middle_card'></div>
      </div>
      <div className="front_content"></div>
    </div>
  )
}

export default CardProyect