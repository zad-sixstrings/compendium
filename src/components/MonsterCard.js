// MonsterCard.js
import React, { useState } from "react";
import mhw_db from "../data/mhw_db.json";
import "../styles/MonsterCard.css";

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

const ElementIcon = ({ element }) => {
  const iconPath = `/assets/elements/${elementIconMapping[element]}`;
  return <img src={iconPath} alt={element} className="element-icon" />;
};

// Function to generate the monster icon file name
const getMonsterIconFileName = (monsterName) => {
  // Replace spaces with underscores
  const formattedName = monsterName.replace(/\s+/g, "_");
  return `${formattedName}_Icon.webp`;
};

const MonsterCard = ({ monster }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const croppedDescription = isExpanded
    ? monster.description
    : `${monster.description.slice(0, 50)}...`;

  const monsterIconFileName = getMonsterIconFileName(monster.name);

  return (
    <div key={monster.id} className="monster-card">
      <img
        src={`/assets/monsters/${monsterIconFileName}`}
        alt={`${monster.name} Icon`}
        className="monster-icon"
      />
      <h2 className="centered-text">{monster.name}</h2>
      <p className="species centered-text">{monster.species}</p>
      <p className="description">
        {croppedDescription}
        <span className="expand-btn" onClick={toggleDescription}>
          {isExpanded ? " (hide)" : " (show)"}
        </span>
      </p>
      <p className="card-section-title centered-text">Weakness</p>
      <p className="centered-text">
        {monster.weaknesses.map((w) => (
          <span key={w.element}>
            <ElementIcon element={w.element} />
            {` ${w.stars}`}
          </span>
        ))}
      </p>
      <p className="card-section-title centered-text">Resistance</p>
      <p className="centered-text">
        {monster.resistances.map((r) => (
          <ElementIcon key={r.element} element={r.element} />
        ))}
      </p>
    </div>
  );
};

const MonsterCards = ({ searchTerm }) => {
  // Filter large monsters
  const filteredMonsters = mhw_db.filter(
    (monster) =>
      monster.type === "large" &&
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort large monsters alphabetically by name
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
