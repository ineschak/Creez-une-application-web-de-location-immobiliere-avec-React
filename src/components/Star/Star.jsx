import React from "react";
import "./star.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Composant pour représenter une seule étoile
const Star = ({ filled }) => {
  return (
    <span className={filled ? "star filled" : "star"}>
      <FontAwesomeIcon icon={filled ? faStar : faStar} />
    </span>
  );
};
export default Star 