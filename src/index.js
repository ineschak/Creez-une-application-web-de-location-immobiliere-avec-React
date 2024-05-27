import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil.jsx";
import Apropos from "./pages/APropos/Apropos.jsx";
import Header from "./components/Header/Header.jsx";
import LogementPage from "./pages/Logement/Logement.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Error from "./pages/Error/Error.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
    ></link>
    <Router>
      <div id="container">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="*" element={<Error />} />
          <Route path="/logement/:id" element={<LogementPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
