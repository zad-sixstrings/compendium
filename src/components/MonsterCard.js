// MonsterCard.js
// TODO : Filter large monsters only for World
// TODO : Apply Rise icons for Rise cards

import React, { useState } from "react";
import mhw_db from "../data/mhw_db.json";
import mhr_db from "../data/mhr_db.json";
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

// Set elemental and ailments icons
const ElementIcon = ({ element }) => {
  const iconPath = `/assets/elements/${
    elementIconMapping[element] || "default.png"
  }`;
  return <img src={iconPath} alt={element} className="element-icon" />;
};

// Generate the monster icon file name
const getMonsterIconFileName = (monsterName) => {
  // Replace spaces with underscores
  const formattedName = monsterName.replace(/\s+/g, "_");
  return `${formattedName}_Icon.webp`;
};

// Generate monster card
const MonsterCard = ({ monster, dataSource }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const croppedDescription = isExpanded
    ? (monster.description || "").slice(0, 50)
    : `${(monster.description || "").slice(0, 50)}...`;

  const monsterIconFileName = getMonsterIconFileName(monster.name);

  return (
    <div className="monster-card">
      <img
        src={`/assets/monsters/${monsterIconFileName}`}
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
        {monster.weaknesses.map((w, index) => (
          <span key={`${w.element}-${index}`}>
            <ElementIcon element={w.element} />
            {` ${w.stars}`}
          </span>
        ))}
      </p>
      <p className="bold centered">Resistance</p>
      <p className="centered">
        {monster.resistances.map((r, index) => (
          <ElementIcon key={`${r.element}-${index}`} element={r.element} />
        ))}
      </p>
    </div>
  );
};

// Search feature

const MonsterCards = ({ searchTerm, dataSource }) => {
  const monsterDB = dataSource === "mhw" ? mhw_db : mhr_db;

  // Filter large monsters
  const filteredMonsters = monsterDB.filter(
    (monster) =>
      (!monster.type || monster.type === "large") &&
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort monsters alphabetically
  const sortedMonsters = filteredMonsters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="monster-cards-container">
      {sortedMonsters.map((monster) => (
        <MonsterCard
          key={`${monster.id}-${monster.name}`}
          monster={monster}
          dataSource={dataSource}
        />
      ))}
    </div>
  );
};

export default MonsterCards;
