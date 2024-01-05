// MonsterCard.js

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
const getMonsterIconFileName = (monsterName, dataSource) => {
  // Replace spaces with underscores
  const formattedName = monsterName.replace(/\s+/g, "_");

  // Determine the folder based on the data source
  const folder = dataSource === "mhw" ? "Wmonsters" : "Rmonsters";

  // Construct the filename
  return `${folder}/${
    dataSource === "mhr" ? "MHRise-" : ""
  }${formattedName}_Icon.webp`;
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

  const sortedWeaknesses = monster.weaknesses
    .slice()
    .sort((a, b) => b.stars - a.stars);

  const monsterIconFileName = getMonsterIconFileName(monster.name, dataSource);

  return (
    <div className="monster-card">
      <img
        src={`/assets/${monsterIconFileName}`}
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
      <div className="wr-row">
        <div className="weaknesses">
          <p className="bold centered">Weakness</p>
          <p className="centered">
            {sortedWeaknesses.map((w, index) => (
              <span className="element-rating" key={`${w.element}-${index}`}>
                <ElementIcon element={w.element} />
                {` ${w.stars}`}
              </span>
            ))}
          </p>
        </div>
        <div className="resistances">
          <p className="bold centered">Resistance</p>
          <p className="centered">
            {monster.resistances.map((r, index) => (
              <ElementIcon key={`${r.element}-${index}`} element={r.element} />
            ))}
          </p>
        </div>
      </div>
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
