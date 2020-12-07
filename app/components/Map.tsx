import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import type { Route } from './Menu';

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN || '';

let container;
let map: Map | null = null;

const Component = ({ route }: { route?: Route }) => {
  useEffect(() => {
    if (!container) {
      return;
    }

    if (!map) {
      map = new mapboxgl.Map({
        container,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [103.8198, 1.3521],
        zoom: 12,
      });
      map.on('load', () => {
        if (!map) return;
        map.addSource('default', {
          type: 'geojson',
          data: 'data/default-route.json',
        });
      });
    }

    if (map && route) {
      const layer = map.getLayer('route');
      if (!layer) {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: route,
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#888',
            'line-width': 8,
          },
        });
      }
    }
  });

  return (
    <div
      ref={(el) => {
        container = el;
      }}
      className='map'
    />
  );
};
export default Component;
