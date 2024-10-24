"use client";

import React, { useState } from 'react';
import styles from '@/components/destination/destination.module.css';
import PlanetWishlistItem from '@/components/destination/PlanetWishlistItem'; 
import PlanetCard from '@/components/PlanetCard/PlanetCard'; 

export const Destinations = () => {
  const [selectedPlanets, setSelectedPlanets] = useState([]);
  const numberOfPlanets = selectedPlanets.length; 

  const onAddOrRemovePlanet = (name) => {

    // TASK - React 1 week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    
    const planetIndex = selectedPlanets.indexOf(name);
    
    if (planetIndex === -1) {
      setSelectedPlanets((prev) => [...prev, name]);
    } else {
      setSelectedPlanets((prev) => prev.filter((planet) => planet !== name));
    }
  };

  const planetData = [
    {
      name: 'EUROPA',
      description: 'Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.', 
      thumbnail: '/destination/image-europa.png',
    },
    {
      name: 'MOON',
      description: 'Our closest celestial neighbor, the Moon, is a silent witness to Earth history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration past and future, making it a perfect destination for lunar adventurers.', 
      thumbnail: '/destination/image-moon.png',
    },
    {
      name: 'MARS',
      description: 'Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.', 
      thumbnail: '/destination/image-mars.png',
    },
    {
      name: 'TITAN',
      description: 'Titan, Saturn largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.', 
      thumbnail: '/destination/image-titan.png',
    }
  ];

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel Destinations</h1>
        
        <section className="card">
          <h2>Wishlist</h2>
            {/* Display the number of selected planets */}
            {/* Display the "no planets" message if it is empty! */}
            
            {numberOfPlanets === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {numberOfPlanets} planet(s) in your wishlist</p>
          )}
  
          <div className={styles.wishlistList}>
            {selectedPlanets.map((planetName) => {
              const planet = planetData.find((p) => p.name === planetName);
              return (
                <PlanetWishlistItem
                  key={planet.name}  
                  name={planet.name}  
                  thumbnail={planet.thumbnail}
                />
              );
            })}
          </div>
        </section>
            
          {/* STOP! - this is for week 3!*/}
          {/* TASK - React 1 week 3 */}
          {/* Import the AddWishlistItem react component */}
          {/* <AddWishlistItem /> */}
          {/* TASK - React 1 week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}
          {/* 
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div> */}
        
        <section className="card">
          <h2>Possible Destinations</h2>
          {/* TASK - React 1 week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}
          {/* name, description, thumbnail, isSelected, onAddOrRemovePlanet */}
          {planetData.map((planet) => {
            const isPlanetSelected = selectedPlanets.includes(planet.name);

            return (
              <PlanetCard
                key={planet.name}  
                name={planet.name}  
                description={planet.description}  
                thumbnail={planet.thumbnail} 
                isSelected={isPlanetSelected}  
                onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet.name)}  
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Destinations;