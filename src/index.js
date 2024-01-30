import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Apropos from './pages/A Propos.jsx'
import Header from './components/Header/header.jsx'
import Logement from './pages/Logement.jsx'
import "./styles/index.css";
 

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/A propos" element={<Apropos />} />
        <Route path="/Logement" element={<Logement />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
