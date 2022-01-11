import React, { useState } from 'react';

export const Context = React.createContext();

export const Provider = ({ children }) => {
    // State relating to map positioning and style
    const [lng, setLng] = useState(-122.3978);
    const [lat, setLat] = useState(37.7533);
    const [zoom, setZoom] = useState(9);
    const [style, setStyle] = useState('mapbox/streets-v11');
    const [toggleValue, setToggleValue] = useState(false);

    // State relating to adding data to map
    const [styleParamsByInput, setStyleParamsByInput] = useState([]);
    const [dataFormat, setDataFormat] = useState('geojson');
    const [geojson, setGeojson] = useState('');
    const [tilesetId, setTilesetId] = useState('');
    const [tilesetLayer, setTilesetLayer] = useState('');
    const [dataType, setDataType] = useState('circle');
    const [dataNotAdded, setDataNotAdded] = useState(true);

    // State related to data styling
    const [circleColor, setCircleColor] = useState('');
    const [circleOpacity, setCircleOpacity] = useState('');
    const [circleRadius, setCircleRadius] = useState('');

    const [textField, setTextField] = useState('');
    const [textSize, setTextSize] = useState('');
    const [textColor, setTextColor] = useState('');
    const [iconImage, setIconImage] = useState('');
    const [iconSize, setIconSize] = useState('');
    const [textOffset, setTextOffset] = useState('');

    const [lineColor, setLineColor] = useState('');
    const [lineWidth, setLineWidth] = useState('');
    const [lineDasharray, setLineDasharray] = useState('');

    const [fillColor, setFillColor] = useState('');
    const [fillOpacity, setFillOpacity] = useState('');
    const [fillOutlineColor, setFillOutlineColor] = useState('');

    // Packaging up these state values into an object so that they can be used more readily in the application
    const properties = {
        lngContext: {lng, setLng},
        latContext: {lat, setLat},
        zoomContext: {zoom, setZoom},
        styleContext: {style, setStyle},
        tileToggleContext: {toggleValue, setToggleValue},
        styleParamsByInputContext: {styleParamsByInput, setStyleParamsByInput},
        dataFormatContext: {dataFormat, setDataFormat},
        geojsonContext: {geojson, setGeojson},
        tilesetIdContext: {tilesetId, setTilesetId},
        tilesetLayerContext: {tilesetLayer, setTilesetLayer},
        dataTypeContext: {dataType, setDataType},
        dataNotAddedContext: {dataNotAdded, setDataNotAdded},
        stylingParameters: {
            circleColorContext: {circleColor, setCircleColor},
            circleOpacityContext: {circleOpacity, setCircleOpacity},
            circleRadiusContext: {circleRadius, setCircleRadius},
    
            textFieldContext: {textField, setTextField},
            textSizeContext: {textSize, setTextSize},
            textColorContext: {textColor, setTextColor},
            iconImageContext: {iconImage, setIconImage},
            iconSizeContext: {iconSize, setIconSize},
            textOffsetContext: {textOffset, setTextOffset},
    
            lineColorContext: {lineColor, setLineColor},
            lineWidthContext: {lineWidth, setLineWidth},
            lineDashArrayContext: {lineDasharray, setLineDasharray},
    
            fillColorContext: {fillColor, setFillColor},
            fillOpacityContext: {fillOpacity, setFillOpacity},
            fillOutlineColorContext: {fillOutlineColor, setFillOutlineColor}
        }
    }

    return (
        <Context.Provider value={properties}>
            {children}
        </Context.Provider>
    );
}

//export const Consumer = Context.Consumer;

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { Context };