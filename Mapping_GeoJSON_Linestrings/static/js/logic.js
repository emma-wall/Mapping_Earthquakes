
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the dark view tile layer
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid', {
    center: [44, -80], 
    zoom: 2, 
    layers:[light]
});


// Create a base layer that holds both maps

let baseMaps = {
    Light: light, 
    Dark: dark
};

// Pass our map layers into our layers controll and add the layers
L.control.layers(baseMaps).addTo(map);


// Accessingthe airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/emma-wall/Mapping_Earthquakes/main/torontoRoutes.json"
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data){
    console.log(data);
    //Creating a  GeoJSON layer with the retrieved data
    L.geoJson(data, {
        weight:2,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2> Airport Code: "+feature.properties.faa+"</h2><br><h3> Airport Name: "+feature.properties.name+"</h3>")
        }
    }
        
        ).addTo(map);
});

