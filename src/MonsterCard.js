// MonsterCard.js
import React, { useState } from "react";
import mhw_db from "./mhw_db.json";
import "./MonsterCards.css"; // Import the CSS file

const MonsterCard = ({ monster }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const croppedDescription = isExpanded
    ? monster.description
    : `${monster.description.slice(0, 100)}...`;

  return (
    <div key={monster.id} className="monster-card">
      <h2>{monster.name}</h2>
      <p>Species: {monster.species}</p>
      <p>
        Description: {croppedDescription}
        <span className="expand-btn" onClick={toggleDescription}>
          {isExpanded ? " Less" : "... More"}
        </span>
      </p>
      <p>
        Weaknesses:{" "}
        {monster.weaknesses.map((w) => `${w.element} ${w.stars}`).join(", ")}
      </p>
      <p>Resistances: {monster.resistances.map((r) => r.element).join(", ")}</p>
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
