import '../public/HeroSection.css'
import iphone from '../assets/macbook.png'
import { useEffect, useState } from 'react';
export default function HeroSection()
{
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
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
        <div className="hh-content">
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