// Footer.js

import React from "react";
import "../../Styles/Footer.css"
import imgreact from "../../Images/logo192.png"

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer-wrapper">
      <footer className="footer-container">
        <p>Sebastian Olarte - Desarrollado por React</p>
        <p>{getCurrentYear()}</p>
        <img src={imgreact} alt="Descripción de la imagen" />
      </footer>
    </div>
  );
};

export default Footer;
