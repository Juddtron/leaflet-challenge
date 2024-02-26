// Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function (data) {
    // Console log the data retrieved 
    console.log(data);
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
  });

  // Function to determine marker size
function markerSize(magnitude) {
    return magnitude * 2000;
  };