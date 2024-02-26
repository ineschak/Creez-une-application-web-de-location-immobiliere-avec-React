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
      // Remplacer cette partie par la logique de récupération réelle des données depuis le backend
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
  }, [id, navigate]);

  if (!logement) {
    return <div>Chargement en cours...</div>;
  }
  return (
    <div className="LogementInfo">
      <Carrousel pictures={logement.pictures} />
      <section>
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
      </section>
    </div>
  );
};

export default LogementPage;
