import '../public/ContactForm.css';
import { useState } from 'react';
import Select from 'react-select';

import { useNavigate } from 'react-router';
export default function HomeContact() {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbw_cmsSDqxs11lE-xODeUXwfyO5CQnneAJdzg6pvqoa0XxO139ZHKKMOv2VjXsGKxHG/exec';

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate()
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const groupedOptions = [
    {
      label: 'Services',
      options: [
        { value: 'wd', label: 'Custom Website Development' },
        { value: 'wrd', label: 'Frontend Development' },
        { value: 'bvg', label: 'Backend Development' },
        { value: 'bfs', label: 'Full-Stack Web Development' },
        { value: 'logo', label: 'Custom E-commerce Website' },
        { value: 'web', label: 'Shopify Store Development' },
        { value: 'seo', label: 'SEO Optimization' },
        { value: 'iao', label: 'Image & Asset Optimization' },
        { value: 'llc', label: 'Lazy Loading & Code Splitting' },
        { value: 'bug', label: 'Bug Fixing & Debugging' },
        
      ],
    },
  ];


  const [selectedOptions, setSelectedOptions] = useState([]);

  const selectingOPT = (selected) => {
    setSelectedOptions(selected || []);
  };


  // Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    const fullName = `${formData.fName} ${formData.lName}`;
    const selectedServices = selectedOptions.map(opt => opt.label).join(', '); // Convert to comma-separated string
  
    const postData = new FormData();
    postData.append('name', fullName);
    postData.append('email', formData.email);
    postData.append('phone', formData.phone);
    postData.append('msg', formData.message);
    postData.append('opt', selectedServices); // 👈 Add this line
  
    fetch(scriptURL, {
      method: 'POST',
      body: postData,
      mode: 'no-cors',
    })
      .then(() => {
        setMessage('Form submitted successfully!');
        setSubmitting(false);
        setFormData({ fName: '', lName: '', email: '', phone: '', message: '' });
        setSelectedOptions([]); // clear the options
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
            <div className="ch-sub">Get in Touch</div>
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
            <div>
            <Select
        options={groupedOptions}
        isMulti
        value={selectedOptions}
        onChange={selectingOPT}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="Select all options"
      />
      <div className="selected-tags">
        {selectedOptions.map((opt) => (
          <span key={opt.value} className="tag">
            {/* {opt.label} */}
          </span>
        ))}
      </div>
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
