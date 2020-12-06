import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN || ''

const Map = () => {
  let container
  useEffect(() => {
    if (!container) { 
      return
    }

    const map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [103.8198, 1.3521],
      zoom: 12
    });
  })

  
  return <div ref={el => { container = el }} className="map" />
}
export default Map