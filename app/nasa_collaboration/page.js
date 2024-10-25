"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const API_KEY = 'xg5XETmM1JxcKGmxdilEiUbXdSYrd9KPrvts5lam';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({ src, date, roverName }) => (
  <div>
    <p>Date: {date}</p>
    <p>Rover: {roverName}</p>
    <img className={styles.nasaPicOfTheDayImg} src={src} alt={`Rover photo taken on ${date}`} />
  </div>
);


export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchDailyImage = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(response => response.json());
      setDailyImg(dailyImgResponse);
    };

    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
      setRoverPhoto(roverPhotoResponse);
    };


    fetchRoverPhotos();
    fetchDailyImage();

    // TASK - React 1 week 3 
    // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
  }, []);

  
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the Day</h2>
          {/* TASK - React 1 week 3 */}
          {/* After fetching data from the NASA_URLs.astronomyPicOfTheDay url, display the returned data here */}
          {/* You should display the title, explanation, and the image using the url from the response */}
          {/* <img src={dailyImg.url}> */}
          {dailyImg.url && (
            <>
              <h3>{dailyImg.title}</h3>
              <img src={dailyImg.url} alt={dailyImg.title} />
              <p>{dailyImg.explanation}</p>
            </>
          )}
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {/* TASK - React 1 week 3 */}
          {/* Iteratate over the roverPhoto?.photos array and display all the pictures! */}
        
                {/* TASK - React 1 week 3 */}
                {/* Create a react component for the <RoverPhoto />, which should accept the following props */}
                {/* 1. src: source of the img (img_src in the data from the API) */}
                {/* 2. date: earth_date data coming from the API */}
                {/* 3. roverName: will be in the rover object - rover.name */}

                {/* TIPS: */}
                {/* If you don't know how the data looks like you can: */}
                {/* 1. use console.log() to write the data to the console */}
                {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}
                {
            roverPhoto?.photos?.length ? (
              roverPhoto.photos.map((photo) => (
                <RoverPhoto 
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))
            ) : (
              <p>Loading rover photos...</p>
            )
          }
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;

