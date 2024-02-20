import "../index.css";
import "../components/Collapse/collapse.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse/Collapse.jsx";
import Carrousel from "../components/Carrousel/Carrousel.jsx";
import Rating from "../components/Rating/Rating.jsx";

const LogementPage = () => {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Simulation de récupération des données du logement depuis le backend
    const fetchData = async () => {
      try {
        // Remplacer cette partie par la logique de récupération réelle des données depuis le backend
        const response = await fetch(
          `http://localhost:8080/api/properties/${id}`
        );
        if (!response.ok) {
          throw new Error("Échec de la récupération des données du logement");
        }
        const logementData = await response.json();
        setLogement(logementData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données du logement:",
          error
        );
      }
    };
    fetchData();
  }, [id]);

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <div className="LogementInfo">
      <Carrousel pictures={logement.pictures} />
      <div className="div">
        <p className="title">{logement.title}</p>
        <div className="div-nom">
          <div className="nom">{logement.host.name}</div>
          <div className="cercle"></div>
        </div>
      </div>
      <p className="txt">{logement.location}</p>
      <div className="div">
        <div className="tags">
          {logement.tags.map((tag, index) => (
            <div className="contour">
              {" "}
              <span className="tag" key={index}>
                {tag}
              </span>
            </div>
          ))}
        </div>
        <Rating value={logement.rating} />
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
    </div>
  );
};

export default LogementPage;
