import ArrowDown from './components/ArrowDown'
import Content from './components/Content'
import LateralContent from './components/LateralContent'
import NavBottom from './components/NavBottom'
import TopMenu from './components/TopMenu'
import './styles/App.scss'


// -------i18next--------
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Lang from './components/Lang'

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Cambia el idioma
  };

  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  

  return (
    <>
      <div className='container'>
        <div className="lateralInfo"><LateralContent />
          <div className='arrow_hide'><ArrowDown /></div>
        </div>
        <div className="topMenu"><TopMenu /></div>
        <div className="content"><Content /></div>
        <div className="bottomMenu"> <NavBottom /> </div>
      </div>
    </>
  )
}

export default App
