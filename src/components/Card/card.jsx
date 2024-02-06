import { Link } from "react-router-dom";
import "./card.css";

export function Card() {
  const cardList = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="cardList">
      {cardList.map((id) => (
        <Link to={`/logement/id`} key={id}>
          <div className="card">
            <h2>Titre de la <br />location </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}