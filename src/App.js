import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Pages/Navigation/Navbar";
import Footer from "./Pages/Navigation/Footer";
import HomePage from "./Pages/HomePage";
import GuidesPage from "./Pages/GuidesPage";
import InformationPage from "./Pages/InformationPage";
import HelpPage from "./Pages/HelpPage";
import './Styles/App.css'


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
