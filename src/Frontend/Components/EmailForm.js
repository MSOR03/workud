import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/EmailForm.css';

const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleInputChange = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/HelpPage', emailData);
      console.log('Correo enviado exitosamente');
    } catch (error) {
      console.error('Error al enviar el correo', error);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="to" className="form-label">Para:</label>
          <input type="email" className="form-control" id="to" name="to" value={emailData.to} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">Asunto:</label>
          <input type="text" className="form-control" id="subject" name="subject" value={emailData.subject} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Mensaje:</label>
          <textarea className="form-control" id="text" name="text" value={emailData.text} onChange={handleInputChange} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar Correo</button>
      </form>
    </div>
  );
};

export default EmailForm;
