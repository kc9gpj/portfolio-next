'use client'
import React, { useState } from 'react';
import { contact } from './Contact';

function ContactForm() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    console.log('formData')
    console.log(JSON.stringify(formData))
    console.log('event')
    console.log(e)
    e.preventDefault();
    if (formData?.lastName.length) {
      return;
    }
    try {
      const response: any = await contact(formData)
      console.log(response)
      setMessage('Sent successfully');
    } catch (error) {
      setMessage('Error sending email');
    }
  };

  return (
    <div className="resume-div" id="contact">
      <div className="resume-div-content">
        <h2 className="mb-0">
          David
          <span className="text-primary last-name">Hoffmann</span>
        </h2>
        <div className="subheading mb-5">
          Shawnee, KS 66216 · (913) 325-0616 ·
          <a href="mailto:dave@dhoff.net">dave@dhoff.net</a>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit} id="contact">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Your Last Name"
              hidden={true}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            {message && (<div className='p-3 text-success'>{message}</div>)}
            <button className="bg-primary p-3" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default ContactForm;
