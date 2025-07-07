import '../App.css'

import Navbar from '../Components/Navbar'
// import Home from './Components/Home'
import Services from '../Components/Services'
import bg from '../assets/bg2.mp4'
import Timeline from '../Components/Timeline'
import HeroSection from '../Components/HeroSection'
import AquaticAnimals from '../Components/Portfolio'
import ContactForm from '../Components/ContactForm'
import Technologies from '../Components/Technologies'
import StickyFeatureSection from '../Components/StickyFeatureSection'

import Testimonilas from '../Components/Testimonilas'
import Footer from '../Components/Footer'


export default function Main()
{
    return(
        <>
        <div className="video-bg-fixed">
        <video autoPlay muted loop playsInline>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Timeline/>
      <AquaticAnimals/>
      <Technologies/>
      <StickyFeatureSection/>
      <Testimonilas/>
      <ContactForm/>
      <Footer/>
    </>
    )
}