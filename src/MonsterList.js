// src/MonsterList.js
import React, { useState, useEffect } from "react";

const MonsterList = () => {
  const [monsterNames, setMonsterNames] = useState([]);

  useEffect(() => {
    // Fetch monster names when the component mounts
    fetch("/mhdb/mhw_db.json") // Adjust the path based on your project structure
      .then((response) => response.json())
      .then((data) => {
        // Log the fetched data to check its structure
        console.log("Fetched Data:", data);

        // Extract names from the first monster for testing
        const names = data.length > 0 ? [data[0].name] : [];
        setMonsterNames(names);
      })
      .catch((error) => {
        console.error("Error fetching monster names:", error);
      });
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Monster Names</h2>
      <ul>
        {monsterNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonsterList;
