import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Frontend/Pages/Navigation/Navbar";
import Footer from "./Frontend/Pages/Navigation/Footer";
import HomePage from "./Frontend/Pages/HomePage";
import GuidesPage from "./Frontend/Pages/GuidesPage";
import InformationPage from "./Frontend/Pages/InformationPage";
import HelpPage from "./Frontend/Pages/HelpPage";
import './Frontend/Styles/App.css'


function App() {
  return (

    <Router>
      <div className="app-container">
        <div className="background-image"></div>
       <Navbar/>
        <Routes>
          
            <Route path="/" element={<HomePage />} />
            <Route path="GuidesPage" element={<GuidesPage />} />
            <Route path="InformationPage" element={<InformationPage />} />
            <Route path="HelpPage" element={<HelpPage />} />
            
          
        </Routes>
        
       <Footer/>
       
        </div >
    </Router>

    


    

  );
}

export default App;
