// v1.4.
// config.js.
// Copyright 2025 JesseLikesWeather.

export const mapboxToken = 'pk.eyJ1Ijoid2VhdGhlciIsImEiOiJjbHAxbHNjdncwaDhvMmptcno1ZTdqNDJ0In0.iywE3NefjboFg11a11ON0Q';

export const tornadoSpeed = 10; // Speed factor

export const startTime = "2014-06-16T16:00:00.14"; 
export const endTime = "2014-06-16T16:39:42";

// New: Default duration for commentary if not specified
export const defaultCommentaryDuration = 10000; // 10 seconds

// GPX Configuration
export const gpxConfig = [
    {
        id: 'rescue-1',
        url: './gpx/BrandonSullivan.gpx',
        color: '#39FF14', // Neon Green
        name: 'Brandon Sullivan'
    },
        {
        id: 'rescue-ph',
        url: './gpx/Skip Talbot.gpx',
        color: '#FF0000',
        name: 'Skip Talbot  '
    }
];

export const kmlConfig = [
    /* Unfinished Feature, while this won't crash the application, it will appear very strangely.
     {
         id: 'user-tornado',
         url: './kml/5-31-2013-EF3.kml',
         color: '#ff0000',
         name: 'User Tornado Path'
    }
         */
];

// Primary Reference City for "Distance To" HUD
export const referenceCity = {
    name: "Pilger",
    state: "NE",
    coordinates: [-97.0540148,42.0086206]
};

export const tornadoIntensityColors = {
    'EF0': '#4DFFFF',
    'EF1': '#FFFFD9', 
    'EF2': '#FFD98C', 
    'EF3': '#FF9E59', 
    'EF4': '#FF738A',
    'EF5': '#A188FC', 
    'DEFAULT': '#9E9E9E' 
};

// Local towns for "Nearest City" logic (Optional secondary list)
export const cities = [
    { name: "Pilger", state: "NE", coordinates: [-97.0540148,42.0086206] },
    { name: "Altona", state: "NE", coordinates: [-96.9919381,42.105134] },
    { name: "Wakefield", state: "NE", coordinates: [-96.865348,42.269093] },
    { name: "Pender", state: "NE", coordinates: [-96.7071021,42.1140608] },
];
    

// Commentary Track
export const commentary = [
  /*  {
        time: "2014-06-16T16:00:14",
        text: "The Pilger, Nebraska Tornado Forms",
        duration: 5000
    },
    {
        time: "2011-04-27T15:42:00",
        text: "The tornado rapidly intensifies to EF5 strength.",
        duration: 8000
    },
    {
        time: "2011-04-27T16:00:00",
        text: "Crossing into Alabama, maintaining major intensity.",
        duration: 10000
    } */

        // Commentary for this video will manually be added during editing.
];

export const points = [
    {
        name: "House Damaged",
        type: "fatality",
        coordinates: [-97.128016,41.959218],
        showWhen: "0.5",
        icon: "./images/life-red.svg"
    }
];

export const keyframes = [
  [-94.201284,41.233393,0,'EF0'],
  [-94.193544, 41.234896, 0.03, 'EF0'],
  [-94.187981, 41.236300, 0.08, 'EF0'],
  [-94.174031, 41.243754, 0.12, 'EF0'],
  [-94.167076, 41.247036, 0.15, 'EF0'],
  [-94.161381, 41.249666, 0.11, 'EF0'],
];
export const showAnimationPlayer = true;

export const damageOverlay = {
    'url': './damage-imagery/mayfield-full.jpg', 
    'bounds': [
        [-88.651270, 36.749805], 
        [-88.622622, 36.749805], 
        [-88.622622, 36.734065], 
        [-88.651270, 36.734065]  
    ]
};