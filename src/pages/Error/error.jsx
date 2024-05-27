import "./error.css";
import error from "../../assets/error.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <img className="image" src={error} alt="Kasa" />{" "}
      <p className="text">Oups! La page que vous demandez n'existe pas</p>
      <Link to="/" className="lien-retour">
        {" "}
        Retouner sur la page d'accueil{" "}
      </Link>
    </div>
  );
}

export default Error;
