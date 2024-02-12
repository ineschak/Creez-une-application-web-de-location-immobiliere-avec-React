import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  // Déclarer un état pour stocker les données récupérées du backend
  const [data, setData] = useState([]);

  // Utilisation de useEffect pour effectuer l'appel à l'API une fois que le composant est monté
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/properties");
      const jsonData = await response.json();
      setData(jsonData); // Mise à jour de l'état avec les données reçues du backend
    };

    fetchData(); // Appeler la fonction pour récupérer les données du backend
  }, []); // Le tableau vide des dépendances garantit que useEffect est exécuté une seule fois après le rendu initial
  /*const id = data.map(item => item.id);*/

  return (
    <div className="cardList">
      {data.map((item, index) => (
        <Link className="lien" key={item.id} to={`logement/${item.id}`}>
          <img
            className="card"
            key={index}
            src={item.cover}
            alt={`Cover ${index}`}
          />
          <h2>{item.title}</h2>
        </Link>
      ))}
    </div>
  );
};
export default Card;
