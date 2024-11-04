import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  const plantsLi = plants.map((plant) => (
      <PlantCard key={plant.id} {...plant} />
  )) 
  return (
    <ul className="cards">
      {plantsLi}
    </ul>
  );
}

export default PlantList;
