export const getMonsterIconPath = (monsterName) => {
  const formattedName = monsterName.replace(/\s+/g, "_");
  return `/assets/monsters/${formattedName}_Icon.webp`;
};
