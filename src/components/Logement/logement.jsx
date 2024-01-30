import { Link } from "react-router-dom";
import "../../styles/logement.css";
import logement from "../../assets/logement.png";
function Logement() {
  return (
    <Link to="/Logement">
      {" "}
      <img src={logement} alt="logement" />
    </Link>
  );
}

export default Logement;
