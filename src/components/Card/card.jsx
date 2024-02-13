import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/api/properties");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

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
