import { useState } from 'react';
import { IoLanguage } from "react-icons/io5";
import './styles/Lang.scss'


const Lang = () => {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
      setChecked(!checked);
    };

  return (
    <div>
      <button className='checkbox_btn' onClick={toggleCheckbox} >{checked ? 'ES' : 'EN'} <IoLanguage /></button>
      <input className='ckeckbox_lang' id="chekbox_lang" type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </div>
  )
}

export default Lang