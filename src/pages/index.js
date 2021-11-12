import React, { useRef, useContext, useEffect, useState } from 'react';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import Tabs from './Tabs.js';
import Context from '../Context';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZHBkaWxpYmVydG8iLCJhIjoiY2tub3VicDJxMWFrcjJ1bGJjdGtodjl5MCJ9.ew1He_m1p0dcn6UPhEDJ1Q';

export default function App() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const {lngContext, latContext, zoomContext, styleContext} = useContext(Context.Context);
    const {lng, setLng} = lngContext;
    const {lat, setLat} = latContext;
    const {zoom, setZoom} = zoomContext;
    const {style, setStyle} = styleContext;
    const [slippyTile, setSlippyTile] = useState('');
      
    useEffect(() => {
        if (map.current) return; // initialize map only once
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

    const handleChange = (value, id) => {
        const valueFloat = parseFloat(value);
        if (id === 'longitude') {
            setLng(valueFloat);
            if (value) {
                map.current.setCenter([valueFloat,lat]);
            }
        }
        if (id === 'latitude') {
            setLat(valueFloat);
            if (value) {
                map.current.setCenter([lng,valueFloat]);
            }
        }
        if (id === 'zoom') {
            setZoom(valueFloat);
            if (value) {
                map.current.setZoom(valueFloat);
            }
        } 
        if (id === 'slippy-tile') {
            setSlippyTile(value);
        }
        if (id === 'map-style') {
            setStyle(value);
        }
    }

    const handleClickMapStyle = () => {
      map.current.setStyle(`mapbox://styles/${style}`)
    }

    return (
        <div>
          <div className='txt-bold txt-h1 prose my12 ml24'>Mapbox GL JS Playground </div>
          <div className='txt-normal'>
              <Tabs
                lat={lat}
                lng={lng}
                zoom={zoom}
                style={style}
                slippyTile={slippyTile}
                handleChange={handleChange}
                handleClickMapStyle={handleClickMapStyle}
                map={map}
              />
            </div>
          <div ref={mapContainer} className="map-container border" />
        </div>
    );
}
