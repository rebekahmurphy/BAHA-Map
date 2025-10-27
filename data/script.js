mapboxgl.accessToken = 'pk.eyJ1Ijoicm11cnBkZXIiLCJhIjoiY21oOWNobm9kMHBqcDJxb25ka3owdTd1eCJ9.Muy-HrlcPDR3OPGhILrSqQ';
const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/rmurpder/cmh9cmfdh00ar01sq6n19ayl9', //Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });