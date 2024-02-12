import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Apropos from "./pages/APropos/newFile.jsx";
import Header from "./components/Header/header.jsx";
 import LogementPage from "./pages/Card.jsx"
import Footer from "./components/Footer/footer.jsx";
import Error from "./pages/Error/error.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<LogementPage/>} />
        </Routes>
      </div> 
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
