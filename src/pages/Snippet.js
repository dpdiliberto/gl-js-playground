import React, { useContext } from 'react';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import Context from '../Context';

export default function Snippet() {

    const {
        dataFormatContext, 
        dataTypeContext, 
        geojsonContext, 
        latContext, 
        lngContext, 
        styleContext, 
        styleParamsByInputContext, 
        tilesetIdContext, 
        tilesetLayerContext, 
        zoomContext,
        dataNotAddedContext} = useContext(Context.Context);

    const {dataFormat} = dataFormatContext;
    const {dataType} = dataTypeContext;
    const {geojson} = geojsonContext;
    const {lat} = latContext;
    const {lng} = lngContext;
    const {style} = styleContext;
    const {styleParamsByInput} = styleParamsByInputContext;
    const {tilesetId} = tilesetIdContext;
    const {tilesetLayer} = tilesetLayerContext;
    const {zoom} = zoomContext;
    const {dataNotAdded} = dataNotAddedContext;

    const addStyleParameters = (codeSnippet) => {
        if(styleParamsByInput.find(element => element.state !== '')) {
            const propertyTypes = ['paint', 'layout'];
            propertyTypes.forEach(propertyType => {
                console.log(styleParamsByInput);
                const containsProperty = styleParamsByInput.find(element => (element.propertyType === propertyType && element.state !== ''));
                if (containsProperty) {
                    codeSnippet += `'${propertyType}': {`;
                styleParamsByInput.map(element => {
                    if (element.propertyType === propertyType && element.state !== '') {
                        codeSnippet += `
                '${element.param}': ${element.inputType === 'number' ? element.state : (element.inputType === 'array' ? `[${element.state}]` : `'${element.state}'`)},`;
                    }
                })
                codeSnippet += `
            },
            `
                }
            })
        }
        return codeSnippet;
    }

    const addSourceAndLayerSnippet = () => {
        let codeSnippet = '';
        if (dataNotAdded === false) {
            codeSnippet = `map.on('load', () => {
        map.addSource('added-source', {
            ${(dataFormat === 'tileset' ? 
            `'type': 'vector',
            'url': 'mapbox://${tilesetId}'`:
            `'type': '${dataFormat}',
            'data': ${geojson}`
            )}
        });
        map.addLayer({
            'id': 'added-layer',
            'type': '${dataType}',
            ${(
                dataFormat === 'tileset' ? 
                `'source': 'added-source',
            'source-layer': '${tilesetLayer}',`: 
            `'source': 'added-source',`
            )}
            ${addStyleParameters(codeSnippet)}
        });
    });`;
        }
        return codeSnippet;
    }

    const generateCodeSnippet = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>GL JS Playground Code Snippet</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
<link href="https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css" rel="stylesheet">
<script src="https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.js"></script>
<style>
body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>
<body>
<div id="map"></div>
<script>
    mapboxgl.accessToken = 'pk.eyJ1IjoiZHBkaWxpYmVydG8iLCJhIjoiY2tub3VicDJxMWFrcjJ1bGJjdGtodjl5MCJ9.ew1He_m1p0dcn6UPhEDJ1Q';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/${style}',
        center: [${lng}, ${lat}],
        zoom: ${zoom}
    });
    ${addSourceAndLayerSnippet()}
</script>

</body>
</html>`

    return (
        <div className="sidebar-container">
            <div>
                <div className='pt24'>
                    <CodeSnippet code={generateCodeSnippet} highlighter={highlightHtml} />
                </div>
            </div>
        </div>
    )
}