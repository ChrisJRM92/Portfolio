import ArrowDown from './components/ArrowDown'
import Content from './components/Content'
import LateralContent from './components/LateralContent'
import NavBottom from './components/NavBottom'
import TopMenu from './components/TopMenu'
import './styles/App.scss'

function App() {

  return (
    <>
      <div className='container'>
        <div className="lateralInfo">
          <LateralContent />
          <div className='arrow_hide'>
            <ArrowDown />
          </div>

        </div>
        <div className="topMenu"><TopMenu /></div>
        <div className="content"><Content /></div>
        <div className="bottomMenu"> <NavBottom/> </div>
      </div>
    </>
  )
}

export default App
