import '../public/HeroSection.css'
import iphone from '../assets/macbook.png'
import { useEffect, useState } from 'react';
export default function HeroSection()
{
    const [scrolled, setScrolled] = useState(false);

    let classN = 'chrome'

    // const getBrowserName = () => {
      const userAgent = navigator.userAgent;
    
      if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
        classN = 'chrome'
      } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        classN = 'safari'
      } else if (userAgent.includes("Edg")) {
        classN = 'edg'
      }
       else {
        classN = 'chrome'
      }
    // };
 console.log(classN)

    useEffect(() => {
      // getBrowserName()
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 362.4) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return(
        <div className="HeroSection">
        <div className={`hh-headings ${scrolled ? 'scrolled-class' : ''}`}>
          <div className="hhh-sub">Responsive</div>
          <div className="hhh-super">Web Designing</div>
        </div>
        <div className={classN}>
            <div className="img">
                <img src={iphone} alt="" />
            </div>
            <div className="content">
            Responsive website designing that grabs attention and drives action
            </div>
        </div>
        </div>
    )

    }