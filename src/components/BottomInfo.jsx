import { IoQrCode } from "react-icons/io5";
import { HiOutlineDownload } from "react-icons/hi";
import './styles/BottomInfo.scss';
import { useTranslation } from 'react-i18next';

const BottomInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="container_details_data">
      <a className='my_proyects' href="#portfolio" id="my_proyects">{t('my_proyects')} &nbsp;<p className="qr_icon"><IoQrCode /></p></a>
      <a className='dowload_cv' href="/CV/CV_2024_Electricista.pdf" id="download_cv">{t('download_cv')} &nbsp;<p className="qr_icon"><HiOutlineDownload /></p></a>
    </div>
  )
}

export default BottomInfo