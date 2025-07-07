import '../public/HeroSection.css'
import iphone from '../assets/macbook.png'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
export default function HeroSection()
{
  const navigate = useNavigate()
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


    // Form
    const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzKAy9lmHiQozxNj_cAJxc8IkxdR_u2Q56OLHdcCjbAZDxdvL_9A0Kl0I4IN7V86CkK/exec'; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData();
    formData.append('phone', phone);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      setMessage('Callback requested successfully!');
      setPhone('');
      navigate('/thankyou');

    } catch (error) {
      setMessage('There was an error. Please try again.');
    }

    setSubmitting(false);
  };
    return(
        <div className="HeroSection" id='home'>
        <div className={`hh-headings ${scrolled ? `scrolled-class${classN}` : ''}`}>
          <div className="hhh-sub">Responsive</div>
          <div className="hhh-super">Web Designing</div>
        </div>
        <div className={classN}>
            <div className="img">
                <img src={iphone} alt="" />
            </div>
            <div className="content">
            <div>That grabs attention and drives action</div>
            <div className="callback-form">
            <form onSubmit={handleSubmit}>
      <input
        type="tel"
        name="phone"
        placeholder="Enter Mobile No.*"
        className="callback-input"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit" className="callback-button" disabled={submitting}>
        {submitting ? 'Requesting Callback' : 'Request a Callback'}
      </button>
      </form>
    </div>
            </div>
        </div>
        </div>
    )

    }