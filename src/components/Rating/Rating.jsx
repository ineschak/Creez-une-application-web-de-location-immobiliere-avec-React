import React from "react";
import "./rating.css";
import Star from "../Star/Star.jsx" 
 
// Composant pour afficher la notation
const Rating = ({ value }) => {
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  return (
    <div className="rating ">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled={true} />
      ))}
      {hasHalfStar && <Star filled={false} />}
      {[...Array(5 - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <Star
          key={index + filledStars + (hasHalfStar ? 1 : 0)}
          filled={false}
        />
      ))}
    </div>
  );
};

export default Rating;
