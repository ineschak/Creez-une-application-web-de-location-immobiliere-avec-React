import "./logement.css";
import "../../components/Collapse/collapse.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Carrousel from "../../components/Carrousel/Carrousel.jsx";
import Rating from "../../components/Rating/Rating.jsx";

const LogementPage = () => {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    // Simulation de récupération des données du logement depuis le backend
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/properties/${id}`
      );
      if (!response.ok) {
        navigate("*");
      }
      const logementData = await response.json();
      setLogement(logementData);
    };
    fetchData();
  }, []);

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <div className="LogementInfo">
      <Carrousel pictures={logement.pictures} />
      <section>
        <div className="div1">
          <div className="paraghraphe">
            <p className="title">{logement.title}</p>
            <p className="txt">{logement.location}</p>
          </div>
          <div className="div-nom">
            <div className="nom">{logement.host.name}</div>
            <div className="cercle"></div>
          </div>
        </div>
        <div className="div2">
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <div key={index} className="tagContainer">
                <div className="contour"></div> {/* Contour rectangulaire */}
                <span className="tag">{tag}</span>
              </div>
            ))}
          </div>
          <div className="off">
            <Rating value={logement.rating} />
          </div>
        </div>
        <div className="affichage">
          <div>
            {" "}
            <Rating value={logement.rating} />{" "}
          </div>
          <div className="divN">
            <div className="nom">{logement.host.name}</div>
            <div className="cercle"></div>
          </div>
        </div>
        <div className="divCollapse">
          <Collapse
            title="Description"
            children={logement.description}
          ></Collapse>
          <Collapse
            title="Équipements"
            children={logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
          ></Collapse>
        </div>
      </section>
    </div>
  );
};

export default LogementPage;
