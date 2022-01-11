import React, { useState, useContext } from 'react';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import SphericalMercator from '@mapbox/sphericalmercator';
import Context from '../Context';
import * as turf from '@turf/turf';


export default function Parameters(props) {

    const {lngContext, latContext, zoomContext, styleContext, accessTokenContext, tileToggleContext} = useContext(Context.Context);
    const {lng, setLng} = lngContext;
    const {lat, setLat} = latContext;
    const {zoom, setZoom} = zoomContext;
    const {style, setStyle} = styleContext;
    const {accessToken, setAccessToken} = accessTokenContext;
    const {toggleValue, setToggleValue} = tileToggleContext;
    const [slippyTile, setSlippyTile] = useState('');

    // Update state and map if map parameters are updated
    const handleChangeMapParameters = (value, id) => {
        const valueFloat = parseFloat(value);
        if (id === 'longitude') {
            setLng(valueFloat);
            if (value) {
                props.map.current.setCenter([valueFloat,lat]);
            }
        }
        if (id === 'latitude') {
            setLat(valueFloat);
            if (value) {
                props.map.current.setCenter([lng,valueFloat]);
            }
        }
        if (id === 'zoom') {
            setZoom(valueFloat);
            if (value) {
                props.map.current.setZoom(valueFloat);
            }
        } 
        if (id === 'slippy-tile') {
            setSlippyTile(value);
        }
        if (id === 'map-style') {
            setStyle(value);
        }
        if (id === 'access-token') {
            setAccessToken(value);
        }
    }

    // Updates map style on click
    const handleClickMapStyle = () => {
      props.map.current.setStyle(`mapbox://styles/${style}`)
    }

    // Toggles on tile boundaries
    const handleToggleTileBoundaries = () => {
        setToggleValue(!toggleValue);
        if (!toggleValue) {
            props.map.current.showTileBoundaries = true;
        } else {
            props.map.current.showTileBoundaries = false;
        }
    }

    // Instaniates spherical mercator object to use in handleClickSlippyTiles function
    var sm = new SphericalMercator({
        size: 512
    });

    // Calculates map coordinates based on tile coordinate inputs, and zooms map to that point 
    const handleClickSlippyTiles = () => {
        let tileCoordinates = slippyTile.split('/');

        var coords = sm.bbox(tileCoordinates[1],tileCoordinates[2],tileCoordinates[0]);

        var bboxPolygon = turf.bboxPolygon(coords).geometry.coordinates[0];

        var features = turf.points(bboxPolygon)
        var bboxCenter = turf.center(features);
        props.map.current.flyTo({
            center: bboxCenter.geometry.coordinates,
            zoom: tileCoordinates[0]
        });
    }
      
    // Toggles on slippy tile component if toggleValue is true
    const toggleSlippyTileComponent = (toggleValue) => {
        if (toggleValue) {
            return (
                <div className="sidebar align-l"> 
                    <div className="inline-flex pt0">
                        <div className="pr12">
                            <ControlText className='input--border-black w240 txt-ms'
                                id="slippy-tile"
                                label="Input slippy tile coordinates"
                                type="string"
                                placeholder="z/x/y tile"
                                value={slippyTile}
                                onChange={handleChangeMapParameters}
                            />
                        </div>
                        <div className="py30">
                            <button className='btn btn--s' onClick={handleClickSlippyTiles}>Locate</button>
                        </div>
                    </div> 
                </div>
            )
        }
    }

    return (
        <div className="sidebar-container">
            <div>
                <div className="txt-bold txt-s pt24 align-center">Map Center
                    <div className="txt-normal sidebar align-l"> 
                        <ControlText className='input--border-black w240 txt-ms'
                            id="longitude"
                            label="Longitude"
                            type="number"
                            value={lng}
                            onChange={handleChangeMapParameters}
                            aside="-180 to 180"
                        />
                        <ControlText className='input--border-black w240 txt-ms'
                            id="latitude"
                            label="Latitude"
                            type="number"
                            value={lat}
                            onChange={handleChangeMapParameters}
                            aside="-90 to 90"
                        />
                        <ControlText className='input--border-black w240 txt-ms'
                            id="zoom"
                            label="Zoom"
                            type="number"
                            value={zoom}
                            onChange={handleChangeMapParameters}
                            aside={<span>0 to 22</span>}
                        />
                    </div>
                </div>
            </div>
            <div className="txt-bold txt-s align-center">Map Style
                <div className="sidebar align-l"> 
                    <div>
                        <div className="pr12">
                            <ControlText className='input--border-black w240 txt-ms'
                                    id="access-token"
                                    label="Input access token"
                                    type="string"
                                    value={accessToken}
                                    onChange={handleChangeMapParameters}
                                />
                            <div className='flex'>
                                <ControlText className='input--border-black w240 txt-ms form-control'
                                        id="map-style"
                                        label="Input style ID"
                                        type="string"
                                        value={style}
                                        onChange={handleChangeMapParameters}
                                        placeholder='username/styleID'
                                    />
                                    <div className='pl12 py24'>
                                        <button className='btn btn--s' onClick={handleClickMapStyle}>
                                            Update
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="txt-bold txt-s align-center"> 
                        <ControlSwitch
                            id="slippy-switch"
                            label="Slippy tile finder"
                            themeControlSwitch='switch'
                            onChange={handleToggleTileBoundaries}
                            value={toggleValue}
                        />
                </div>
                {toggleSlippyTileComponent(toggleValue)}
            </div>
        </div>
    );
}