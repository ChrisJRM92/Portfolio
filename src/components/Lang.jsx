import { IoLanguage } from "react-icons/io5";
import './styles/Lang.scss'
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Lang = () => {
  const [checked, setChecked] = useState(false);
  const { i18n } = useTranslation();

  const toggleCheckbox = () => {
    setChecked(!checked);
    const newLanguage = checked ? 'es' : 'en';
    i18n.changeLanguage(newLanguage)
  };

  return (
    <div>
      <button className='checkbox_btn' onClick={toggleCheckbox} >{checked ? 'ES' : 'EN'} &nbsp; <IoLanguage /></button>
      <input className='ckeckbox_lang' id="chekbox_lang" type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </div>
  )
}

export default Lang