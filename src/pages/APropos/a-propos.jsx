import picture2 from "../../assets/picture2.png";
import "./a-propos.css";
import Collapse from "../../components/Collapse/collapse.jsx";

export function Apropos() {
  return (
    <section>
      <img className="picture2" src={picture2} alt="" />

      <Collapse className="title" title="Fiabilité">
        <p></p>
      </Collapse>
      <Collapse title="Respect">
        <p></p>
      </Collapse>
      <Collapse title="Service">
        <p></p>
      </Collapse>
      <Collapse title="Sécurité">
        <p></p>
      </Collapse>
    </section>
  );
}