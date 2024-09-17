import { IoQrCode } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import './styles/BottomInfo.scss'

const BottomInfo = () => {
  return (
    <div className="container_details_data">
      <a className='my_proyects' href="#portfolio">Mis proyectos &nbsp;<p className="qr_icon"><IoQrCode /></p></a>
      <a className='dowload_cv'>Descargar CV &nbsp;<p className="qr_icon"><HiOutlineDownload /></p></a>
    </div>
  )
}

export default BottomInfo