import '../public/ContactForm.css';
import { useState } from 'react';
import Select from 'react-select';

import { useNavigate } from 'react-router';
export default function HomeContact() {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzKAy9lmHiQozxNj_cAJxc8IkxdR_u2Q56OLHdcCjbAZDxdvL_9A0Kl0I4IN7V86CkK/exec';

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    opt: ''
  });
  const navigate = useNavigate()
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };



  // Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    const fullName = `${formData.fName} ${formData.lName}`;
  
    const postData = new FormData();
    postData.append('name', fullName);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);
    postData.append('opt', formData.opt); // 👈 Add this line
  
    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors',
    })
      .then(() => {
        setMessage('Form submitted successfully!');
        setSubmitting(false);
        setFormData({ fName: '', lName: '', email: '', phone: '', message: '', opt:'' });
        
        navigate('/thankyou');
      })
      .catch(() => {
        setMessage('Error submitting the form. Try again.');
        setSubmitting(false);
      });
  };
  

   
  return (
    <div className="HomeContact" id='contact'>
      <div className="subContainer">
        <div className="form-container">
          <div className="ch-heading">
            <div className="ch-super">Your Competitor Already Has a Website. Where’s Yours?</div>
            <div className="ch-sub">Let’s build your online presence Today</div>
          </div>
          <form className="ch-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fName">First Name</label>
                <input
                  type="text"
                  id="fName"
                  name="fName"
                  value={formData.fName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lName">Last Name</label>
                <input
                  type="text"
                  id="lName"
                  name="lName"
                  value={formData.lName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="msg">Business Type</label>
              <textarea name="opt" id="msg" rows={1} value={formData.opt}
                  onChange={handleChange}></textarea>
            </div>
            <button type="submit" className={`submitbtn ${submitting ? 'blur-bt' : ''}`}>
              {submitting ? 'Submitting...' : 'Book a Call'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
