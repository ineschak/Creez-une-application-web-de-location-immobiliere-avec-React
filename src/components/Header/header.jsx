import { Link } from "react-router-dom";
import "../../styles/header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="En-tête">
      <img src={logo} alt="Kasa" />{" "}
      <nav className="lien-nav">
        {" "}
        <Link to="/Accueil">Accueil</Link>
        <Link to="/A Propos">A Propos</Link>
      </nav>
    </div>
  );
}

export default Header;
