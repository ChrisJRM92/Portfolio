import ArrowDown from './components/ArrowDown'
import Content from './components/Content'
import LateralContent from './components/LateralContent'
import BottomMenu from './components/BottomMenu'
import TopMenu from './components/TopMenu'
import './styles/App.scss'

// -------i18next--------
import './i18n';
import BottomInfo from './components/BottomInfo'

function App() {

  return (
    <>
      <div className='container'>
        <div className="lateralInfo"><LateralContent />
          <div className='arrow_hide'><ArrowDown /></div>
        </div>
        <div className="topMenu">
          <div className='container_top_menu'><TopMenu /></div>
        </div>
        <div className="content"><Content /></div>
        <div className="bottomMenu">
          <div className='container_bottom_menu'><BottomMenu /> </div>
          <div className='container_bottom_info'><BottomInfo /></div>
        </div>
      </div>
    </>
  )
}

export default App
