import "./APropos/a-propos.css";
import { useParams } from "react-router-dom";

function Logement() {
    // eslint-disable-next-line
  const { id } = useParams();
  // Faire un appel API pour récupérer le logement en question grâce à son id
  // Affichage du logement

  return (<p>test</p>)
}

export default Logement;
