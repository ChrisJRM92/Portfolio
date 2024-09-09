import LateralContent from './components/LateralContent'
import TopMenu from './components/TopMenu'
import './styles/App.scss'

function App() {


  return (
    <>
      <div className='container'>
        <div class="lateralInfo">
          <LateralContent/>
        </div>
        <div class="topMenu">
          <TopMenu/>
        </div>
        <div class="content"> </div>
        <div class="bottomMenu"> </div>
      </div>
    </>
  )
}

export default App
