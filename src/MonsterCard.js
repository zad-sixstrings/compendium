// MonsterCard.js
import React from "react";
import mhw_db from "./mhw_db.json";
import "./MonsterCards.css"; // Import the CSS file

const MonsterCards = ({ searchTerm }) => {
  // Filter large monsters
  const largeMonsters = mhw_db.filter(
    (monster) =>
      monster.type === "large" &&
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort large monsters alphabetically by name
  const sortedMonsters = largeMonsters.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Define the specific order for weaknesses and resistances
  const order = [
    "Fire",
    "Water",
    "Thunder",
    "Ice",
    "Dragon",
    "Poison",
    "Sleep",
    "Paralysis",
    "Blast",
    "Stun",
  ];

  return (
    <div className="monster-cards-container">
      {sortedMonsters.map((monster) => (
        <div key={monster.id} className="monster-card">
          <h2>{monster.name}</h2>
          <p>Species: {monster.species}</p>
          <p>Description: {monster.description}</p>
          <p>
            Weaknesses:{" "}
            {monster.weaknesses
              .sort(
                (a, b) => order.indexOf(a.element) - order.indexOf(b.element)
              )
              .map((w) => `${w.element} ${w.stars}`)
              .join(", ")}
          </p>
          <p>
            Resistances:{" "}
            {monster.resistances
              .sort(
                (a, b) => order.indexOf(a.element) - order.indexOf(b.element)
              )
              .map((r) => r.element)
              .join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MonsterCards;
