import { IoLanguage } from "react-icons/io5";
import './styles/Lang.scss'
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

const Lang = () => {
  const { i18n } = useTranslation();

  const [checked, setChecked] = useState(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    return savedLanguage === 'en'; // Si el idioma guardado es 'en', el checkbox estará marcado
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'es';
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);
  

  const toggleCheckbox = () => {
    setChecked((prevChecked) => {
      const newLanguage = prevChecked ? 'es' : 'en'; // Basado en el estado actual de `checked`
      i18n.changeLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
      return !prevChecked; // Invertir el valor de `checked`
    });
  };

  return (
    <div>
      <button className='checkbox_btn' onClick={toggleCheckbox} >{checked ? 'ES' : 'EN'} &nbsp; <IoLanguage /></button>
      <input className='ckeckbox_lang' id="chekbox_lang" type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </div>
  )
};

export default Lang;