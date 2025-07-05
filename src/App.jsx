
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import bg from './assets/bg2.mp4'
import Timeline from './Components/Timeline'
function App() {
  

  return (
    <>
    <div className="video-bg-fixed">
        <video autoPlay muted loop playsInline>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar/>
      <Home/>
      {/* <div className="spacer"></div> */}
      <Services/>
      <Timeline/>
    </>
  )
}

export default App
