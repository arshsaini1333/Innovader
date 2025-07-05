import '../public/HeroSection.css'
import iphone from '../assets/macbook.png'
import { useEffect, useState } from 'react';
export default function HeroSection()
{
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 466.39) {
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
        <div className={`hh-headings ${scrolled ? 'scrolled-class' : ''}`}>Website Design</div>
        <div className="hh-content">
            <div className="img">
                <img src={iphone} alt="" />
            </div>
            <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla sint deserunt, amet recusandae, provident laudantium praesentium nostrum, voluptatum natus quaerat earum aspernatur quisquam. Earum porro voluptatum totam mollitia est?
            </div>
        </div>
        </div>
    )

    }