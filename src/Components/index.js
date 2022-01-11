import React, { useRef, useContext, useEffect } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import Tabs from './Tabs.js';
import Context from '../Context';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZHBkaWxpYmVydG8iLCJhIjoiY2t5MG51MzFxMDJ5dTJ6cGVzMHd0dHJ0biJ9.LPQOq0sm0fKXb07DGKTFDA';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const {lngContext, latContext, zoomContext, styleContext} = useContext(Context.Context);
    const {lng, setLng} = lngContext;
    const {lat, setLat} = latContext;
    const {zoom, setZoom} = zoomContext;
    const {style} = styleContext;
      
    // initialize map only once
    useEffect(() => {
        if (map.current) return; 
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: `mapbox://styles/${style}`,
          center: [lng, lat],
          zoom: zoom
        });
      });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize

        map.current.on('move', () => {
            setLng(parseFloat(map.current.getCenter().lng.toFixed(4)));
            setLat(parseFloat(map.current.getCenter().lat.toFixed(4)));
            setZoom(parseFloat(map.current.getZoom().toFixed(2)));
        });
    });

    return (
        <div>
          <div className='txt-bold txt-h1 prose my12 ml24'>Mapbox GL JS Playground </div>
          <div className='txt-normal'>
              <Tabs
                map={map}
              />
            </div>
          <div ref={mapContainer} className="map-container border" />
        </div>
    );
}
