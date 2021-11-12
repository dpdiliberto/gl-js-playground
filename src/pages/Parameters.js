import React, { useState } from 'react';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlSwitch from '@mapbox/mr-ui/control-switch';
import SphericalMercator from '@mapbox/sphericalmercator';
import * as turf from '@turf/turf';


export default function Parameters(props) {

    const [toggleValue, setToggleValue] = useState(false);

    var sm = new SphericalMercator({
        size: 512
    });

    const handleToggle = () => {
        setToggleValue(!toggleValue);
        if (!toggleValue) {
            props.map.current.showTileBoundaries = true;
        } else {
            props.map.current.showTileBoundaries = false;
        }
    }

    const handleClickSlippyTiles = () => {
        let tileCoordinates = props.slippyTile.split('/');

        var coords = sm.bbox(tileCoordinates[1],tileCoordinates[2],tileCoordinates[0]);

        var bboxPolygon = turf.bboxPolygon(coords).geometry.coordinates[0];

        var features = turf.points(bboxPolygon)
        var bboxCenter = turf.center(features);
        props.map.current.flyTo({
            center: bboxCenter.geometry.coordinates,
            zoom: tileCoordinates[0]
        });
    }
      
    const toggleComponents = (toggleValue) => {
        if (toggleValue) {
            return (
                <div className="sidebar align-l"> 
                    <div className="inline-flex pt0">
                        <div className="pr12">
                            <ControlText className='input--border-black w240 txt-ms'
                                id="slippy-tile"
                                label="Input slippy tile numbers"
                                type="string"
                                placeholder="z/x/y tile"
                                value={props.slippyTile}
                                onChange={props.handleChange}
                            />
                        </div>
                        <div className="py30">
                            <button className='btn btn--s' onClick={handleClickSlippyTiles}>Find Tile</button>
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
                            value={props.lng}
                            onChange={props.handleChange}
                            aside="-180 to 180"
                        />
                        <ControlText className='input--border-black w240 txt-ms'
                            id="latitude"
                            label="Latitude"
                            type="number"
                            value={props.lat}
                            onChange={props.handleChange}
                            aside="-90 to 90"
                        />
                        <ControlText className='input--border-black w240 txt-ms'
                            id="zoom"
                            label="Zoom"
                            type="number"
                            value={props.zoom}
                            onChange={props.handleChange}
                            aside={<span>0 to 22</span>}
                        />
                    </div>
                </div>
            </div>
            <div className="txt-bold txt-s align-center">Map Style
                <div className="sidebar align-l"> 
                    <div className="inline-flex">
                        <div className="pr12">
                        <ControlText className='input--border-black w240 txt-ms'
                                id="map-style"
                                label="Input style ID"
                                type="string"
                                value={props.style}
                                onChange={props.handleChange}
                                placeholder='username/styleID'
                            />
                        </div>
                        <div className="py30">
                            <button className='btn btn--s' onClick={props.handleClickMapStyle}>
                                Update
                            </button>
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
                            onChange={handleToggle}
                            value={toggleValue}
                        />
                </div>
                {toggleComponents(toggleValue)}
            </div>
        </div>
    );
}