//Add console.log to check to see if the code is working
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    accessToken: API_KEY
});

// Add streets layer to map
streets.addTo(map)

// Coordinates for each point to be used in the line
let line =[[33.9416, -118.4085], [37.6213, -122.3790]];

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
      color:"red"
  }).addTo(map)