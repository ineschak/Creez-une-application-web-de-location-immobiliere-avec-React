import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Kasa" />{" "}
      <nav>
        <Link to="/"> Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
