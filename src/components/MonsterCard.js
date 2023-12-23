// MonsterCard.js
import React, { useState } from "react";
import mhw_db from "../data/mhw_db.json";
import "../styles/MonsterCard.css";
import FullCard from "./FullCard";
import { getMonsterIconPath } from "./utilities";

const elementIconMapping = {
  fire: "fire.png",
  water: "water.png",
  thunder: "thunder.png",
  ice: "ice.png",
  dragon: "dragon.png",
  poison: "poison.png",
  sleep: "sleep.png",
  paralysis: "paralysis.png",
  blast: "blast.png",
  stun: "stun.png",
};

// Set elemental and ailments icons
const ElementIcon = ({ element }) => {
  const iconPath = `/assets/elements/${elementIconMapping[element]}`;
  return <img src={iconPath} alt={element} className="element-icon" />;
};

// Generate monster card
const MonsterCard = ({ monster }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullCardOpen, setIsFullCardOpen] = useState(false); // Fullcard state

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFullCard = () => {
    setIsFullCardOpen(!isFullCardOpen);
  };

  const croppedDescription = isExpanded
    ? monster.description
    : `${monster.description.slice(0, 50)}...`;

  const monsterIconPath = getMonsterIconPath(monster.name);

  return (
    <div
      key={monster.id}
      className="monster-card"
      onClick={() => toggleFullCard(monster)}
    >
      <img
        src={monsterIconPath}
        alt={`${monster.name} Icon`}
        className="monster-icon"
      />
      <h2 className="centered">{monster.name}</h2>
      <p className="species centered">{monster.species}</p>
      <p className="description">
        {croppedDescription}
        <span className="expand-btn" onClick={toggleDescription}>
          {isExpanded ? " (hide)" : " (show)"}
        </span>
      </p>
      <p className="bold centered">Weakness</p>
      <p className="centered">
        {monster.weaknesses.map((w) => (
          <span key={w.element}>
            <ElementIcon element={w.element} />
            {` ${w.stars}`}
          </span>
        ))}
      </p>
      <p className="bold centered">Resistance</p>
      <p className="centered">
        {monster.resistances.map((r) => (
          <ElementIcon key={r.element} element={r.element} />
        ))}
      </p>
      {isFullCardOpen && (
        <FullCard onClose={toggleFullCard} monster={monster} />
      )}
      {/* Render FullCard conditionally */}
    </div>
  );
};

// Search feature
const MonsterCards = ({ searchTerm }) => {
  // Filter large monsters
  const filteredMonsters = mhw_db.filter(
    (monster) =>
      monster.type === "large" &&
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort monsters alphabetically
  const sortedMonsters = filteredMonsters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="monster-cards-container">
      {sortedMonsters.map((monster) => (
        <MonsterCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default MonsterCards;
