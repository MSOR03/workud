// Navbar.js

import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "../../Styles/Navbar.css"; // Importa tus estilos CSS aquí
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Lógica para manejar la búsqueda, por ejemplo, redirigir a una página de resultados
    console.log("Realizar búsqueda con:", searchQuery);
  };

  return (
    <div className="navbar-container">
      <nav className="navigation-bar">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="/" className="logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="../GuidesPage" className="link">
              Guias
            </Link>
          </li>
          <li>
            <Link to="../HelpPage" className="link">
              Ayuda
            </Link>
          </li>
          <li>
            <Link to="../InformationPage" className="link">
              Informacion
            </Link>
          </li>
        </ul>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
