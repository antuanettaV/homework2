"use client"; 

import React, { useState } from 'react';
import styles from './PlanetCard.module.css'; 

const PlanetCard = ({ name, description, thumbnail, isSelected, onAddOrRemovePlanet }) => {
  return (
    <div className={styles.planetCard}>
      <img className={styles.planetThumbnail} src={thumbnail} alt={name} />
      <div className={styles.planetDescription}>
        <h2>{name} {isSelected ? "- SELECTED" : ""}</h2>
        <p>{description}</p>
      </div>
      <button 
        className="roundButton" 
        onClick={onAddOrRemovePlanet}
      >
        {isSelected ? "REMOVE" : "ADD PLANET"}
      </button>
    </div>
  );
};

const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  

  const onAddOrRemovePlanet = (name) => {
    const planetIndex = selectedPlanets.indexOf(name);
    
    if (planetIndex === -1) {
      setSelectedPlanets((prev) => [...prev, name]);
    } else {
      setSelectedPlanets((prev) => prev.filter((planet) => planet !== name));
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>
        <section className="card">
          <h2>Possible Destinations</h2>
          {planets.map((planet, index) => (
            <PlanetCard
              key={index}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={selectedPlanets.includes(planet.name)}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;
