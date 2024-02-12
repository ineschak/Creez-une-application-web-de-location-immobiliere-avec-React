import "../index.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse/collapse.jsx";

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
      <img className="image-carrousel" src={logement.pictures[0]} alt="Cover" />
      <div className="div">
        <p className="title">{logement.title}</p>
        <div className="div-nom">
        <div className="nom">{logement.host.name}</div>
        <div className="cercle"></div>
        </div>
        
      </div> 
      <p className="txt">{logement.location}</p>
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="collapse">
        <Collapse title="Description">
          <p className="collapse-content"> {logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          {logement.equipments.map((equipment, index) => (
            <p className="collapse-content" key={index}>
              {equipment}
            </p>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default LogementPage;
