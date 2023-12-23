export const cardColor: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const scoreColor = (score: number): string => {
  if (score >= 95) {
    return "#FF5733";
  } else if (score >= 90) {
    return "#3498db";
  } else if (score >= 85) {
    return "#27ae60";
  } else if (score >= 80) {
    return "#f39c12";
  } else if (score >= 75) {
    return "#e74c3c";
  } else if (score >= 70) {
    return "#d35400";
  } else if (score >= 65) {
    return "#9b59b6";
  } else if (score >= 60) {
    return "#2980b9";
  } else if (score >= 55) {
    return "#2ecc71";
  } else if (score >= 50) {
    return "#f1c40f";
  } else if (score >= 45) {
    return "#c0392b";
  } else {
    return "#e74c3c";
  }
};
