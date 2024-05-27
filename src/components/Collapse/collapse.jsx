import React, { useState } from "react";
import "./collapse.css";
import vector from "../../assets/Vector.png";

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`collapse-container ${isCollapsed ? "" : "opened"}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          className={`arrow ${isCollapsed ? "" : "arrow-expanded"}`}
          src={vector}
          alt={isCollapsed ? "Flèche vers le bas" : "Flèche vers le haut"}
        />
      </div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

export default Collapse;
