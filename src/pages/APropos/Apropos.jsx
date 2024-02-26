import picture2 from "../../assets/picture2.png";
import "./apropos.css";
import Collapse from "../../components/Collapse/Collapse.jsx";

export function Apropos() {
  return (
    <section>
      <div className="container-picture">
        <img className="picture2" src={picture2} alt="" />
      </div>
      <div className="apropos-collapses">
        <Collapse
          className="title"
          title="Fiabilité"
          children=" Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
        ></Collapse>
        <Collapse
          title="Respect"
          children=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        ></Collapse>
        <Collapse
          title="Service"
          children=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme."
        ></Collapse>
        <Collapse
          title="Sécurité"
          children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes."
        ></Collapse>
      </div>
    </section>
  );
}
export default Apropos;
