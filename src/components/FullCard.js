// FullCard.js
import React from "react";
import PropTypes from "prop-types";
import { getMonsterIconPath } from "./utilities";
import "../styles/FullCard.css";

const ElementIcon = ({ element }) => {
  const iconPath = `/assets/elements/${element}.png`;
  return <img src={iconPath} alt={element} className="element-icon" />;
};

const FullCard = ({ onClose, monster }) => {
  const monsterIconPath = getMonsterIconPath(monster.name);

  return (
    <div className="full-card" onClick={onClose}>
      <div className="full-card-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={monsterIconPath}
          alt={`${monster.name} Icon`}
          className="monster-icon"
        />
        <h2>{monster.name}</h2>
        <p className="species">{monster.species}</p>
        <p className="description">{monster.description}</p>
        <div className="details">
          <p className="bold">Weaknesses</p>
          <div className="element-list">
            {monster.weaknesses.map((w) => (
              <span key={w.element}>
                <ElementIcon element={w.element} />
                {` ${w.stars}`}
              </span>
            ))}
          </div>
          <p className="bold">Resistances</p>
          <div className="element-list">
            {monster.resistances.map((r) => (
              <ElementIcon key={r.element} element={r.element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

FullCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  monster: PropTypes.object.isRequired,
};

export default FullCard;
