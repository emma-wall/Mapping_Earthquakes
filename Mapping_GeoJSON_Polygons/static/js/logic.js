
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the dark view tile layer
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid', {
    center: [43.7, -79.3], 
    zoom: 11, 
    layers:[satellite]
});


// Create a base layer that holds both maps

let baseMaps = {
    Satellite: satellite,
    Streets: streets
};

// Pass our map layers into our layers controll and add the layers
L.control.layers(baseMaps).addTo(map);


// Accessingthe airport GeoJSON URL
let torontoNeighborhoods = "https://raw.githubusercontent.com/emma-wall/Mapping_Earthquakes/main/torontoNeighborhoods.json"
// Grabbing our GeoJSON data.
d3.json(torontoNeighborhoods).then(function(data){
    console.log(data);
    //Creating a  GeoJSON layer with the retrieved data
    L.geoJson(data).addTo(map);
});

