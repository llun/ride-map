const fs = require('fs');
const gpxParser = require('gpxparser');

const raw = fs.readFileSync('input.gpx', { encoding: 'utf-8' });

const gpx = new gpxParser();
gpx.parse(raw);
const json = gpx.toGeoJSON();
const feature = json.features[0];

fs.writeFileSync(
  'output.geojson',
  JSON.stringify({
    type: feature.type,
    geometry: feature.geometry,
  })
);
