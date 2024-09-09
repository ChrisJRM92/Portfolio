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
        <div className='social1'></div>
        <div className='social2'></div>
        <div className='social3'></div>
        <div className='social4'></div>
        <div className='social5'></div>
      </div>
      <button>Contáctame</button>
    </div>
  )
}

export default LateralContent