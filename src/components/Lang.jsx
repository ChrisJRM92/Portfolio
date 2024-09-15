import { IoLanguage } from "react-icons/io5";
import './styles/Lang.scss'
import { useState } from "react";

const Lang = ({ checked, toggleCheckbox }) => {

  return (
    <div>
      <button className='checkbox_btn' onClick={toggleCheckbox} >{checked ? 'ES' : 'EN'} &nbsp; <IoLanguage /></button>
      <input className='ckeckbox_lang' id="chekbox_lang" type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </div>
  )
}

export default Lang