import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const DarkMode = () => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
            <button className='checkbox_btn' onClick={toggleCheckbox} >{checked ? <FaMoon /> :  <IoMdSunny />}</button>
            <input className='ckeckbox_lang' id="chekbox_lang" type="checkbox" checked={checked} onChange={toggleCheckbox} />
    </div>
  )
}

export default DarkMode