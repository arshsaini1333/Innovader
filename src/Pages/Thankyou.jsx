import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../public/Thankyou.css'
import bg from '../assets/bg2.mp4'
import '../App.css'
export default function Thankyou() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on load
  }, []);

  return (
    <>
    <div className="video-bg-fixed">
        <video autoPlay muted loop playsInline>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    <div className="thankyou-wrapper">
      <div className="thankyou-card">
        <h1 className="thankyou-title">Thank You!</h1>
        <p className="thankyou-message">
          Your callback request has been received. <br />
          We'll reach out to you shortly.
        </p>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
    </>
  );
}
