import React, {useContext} from 'react';
import StyleData from './StyleData';
import ControlText from '@mapbox/mr-ui/control-text';
import ControlToggleSet from '@mapbox/mr-ui/control-toggle-set';
import ControlTextarea from '@mapbox/mr-ui/control-textarea';
import ControlSelect from '@mapbox/mr-ui/control-select';
import Context from '../Context';


export default function AddData(props) {
    
    const {
        dataFormatContext, 
        geojsonContext, 
        tilesetIdContext, 
        tilesetLayerContext, 
        dataTypeContext, 
        dataNotAddedContext,
        styleParamsByInputContext
    } = useContext(Context.Context);

    const {dataFormat, setDataFormat} = dataFormatContext;
    const {geojson, setGeojson} = geojsonContext;
    const {tilesetId, setTilesetId} = tilesetIdContext;
    const {tilesetLayer, setTilesetLayer} = tilesetLayerContext;
    const {dataType, setDataType} = dataTypeContext;
    const {dataNotAdded, setDataNotAdded} = dataNotAddedContext;
    const {styleParamsByInput} = styleParamsByInputContext;

    // Adds geojson data or tileset source and layer to map
    const handleClickAddData = () => {
        if (dataFormat === 'geojson') {
            const parsedGeojson = JSON.parse(geojson);
            props.map.current.addSource('added-source', {
                'type': 'geojson',
                'data': parsedGeojson
            });
            props.map.current.addLayer({
                'id': 'added-layer',
                'type': dataType,
                'source': 'added-source'
                });
        } else if (dataFormat === 'tileset') {
            props.map.current.addSource('added-source', {
                type: 'vector',
                url: `mapbox://${tilesetId}`
            });
            props.map.current.addLayer({
                'id': 'added-layer',
                'type': dataType,
                'source': 'added-source',
                'source-layer': tilesetLayer
                });
        }
        setDataNotAdded(false);
    }

    // Removes data on map 
    const handleClickRemoveData = () => {
        setDataNotAdded(true);
        props.map.current.removeLayer('added-layer');
        props.map.current.removeSource('added-source');
    }

    // Handles the data type element so that StyleData component pulls corresponding style properties
    const handleDataTypeChange = (value) => {
        setDataType(value);
        for (const index in styleParamsByInput) {
            styleParamsByInput[index].change('');
        }
    }

    // Configures data type element, which will be inserted into handledDataFormat function
    const handleDataType = () =>{
        return (
            <ControlSelect
                disabled={dataNotAdded ? false : true}
                id="data-type"
                label="Select data type"
                onChange={handleDataTypeChange}
                options={[
                {
                    label: 'Circle',
                    value: 'circle'
                },
                {
                    label: 'Symbol',
                    value: 'symbol'
                },
                {
                    label: 'Line',
                    value: 'line'
                },
                {
                    label: 'Fill',
                    value: 'fill'
                }
                ]}
                themeControlSelectContainer='bg-gray-faint'
                value={dataType}
            />
        )
    }

    // Handles data format - whether data is geojson or tileset
    const handleDataFormatChange = (value, id) => {
        if (id  === 'geojson') {
            setGeojson(value);
            console.log(geojson);
        } else if (id  === 'tilesetId') {
            setTilesetId(value);
        } else if (id  === 'tilesetLayer') {
            setTilesetLayer(value);
        }
    }
    
    // Handles data format so that corresponding inputs are provided
    // if data is geojson - paste geojson
    // if data is tileset - provide tileset id and layer
    const handleDataFormat = () => {
        if (dataFormat === 'geojson') {
            return (
                <div className="txt-bold txt-s pt24 align-center">Add GeoJSON
                    <div className="sidebar align-l"> 
                        {handleDataType()}
                        <ControlTextarea className='input--border-black w300 txt-ms hmin360'
                            id="geojson"
                            label="Paste GeoJSON"
                            type="string"
                            value={geojson}
                            onChange={handleDataFormatChange}
                        />
                    </div>
                </div>
            )
        } else if (dataFormat === 'tileset') {
            return (
                <div className="txt-bold txt-s pt24 align-center">Add Tileset
                    <div className="txt-normal txt-s sidebar align-l"> 
                        {handleDataType()}
                        <ControlText className='input--border-black w300 txt-ms'
                            id="tilesetId"
                            label="Provide Tileset ID"
                            type="string"
                            value={tilesetId}
                            onChange={handleDataFormatChange}
                            placeholder='username.tilesetID'
                            aside={<span><a style={{color: "blue"}}href="https://docs.mapbox.com/studio-manual/reference/tilesets/#tileset-id">See docs</a></span>}
                        />
                        <ControlText className='input--border-black w300 txt-ms'
                            id="tilesetLayer"
                            label="Provide Tileset Layer"
                            type="string"
                            value={tilesetLayer}
                            onChange={handleDataFormatChange}
                            aside={<span><a style={{color: "blue"}}href="https://docs.mapbox.com/studio-manual/reference/tilesets/#vector-layers">See docs</a></span>}
                        />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="sidebar-container">
            <div>
                <div className='align-center pt24'>
                    <ControlToggleSet
                        id='data-type'
                        legend='Select data format'
                        onChange={
                            (value, id) => {
                                setDataFormat(value);
                            }
                        }
                        initialValue={['geojson']}
                        options={[
                            {
                                label: 'GeoJSON',
                                value: 'geojson'
                            },
                            {
                                label: 'Tileset',
                                value: 'tileset'
                            }
                        ]}
                        value={dataFormat}
                    />
                </div>
                {handleDataFormat()}
                <div className='align-center'>
                    <button className='btn btn--s' onClick={(dataNotAdded) ? handleClickAddData : handleClickRemoveData}>
                        {(dataNotAdded) ? "Add data to map" : "Remove data from map"}
                    </button>
                </div>

                <StyleData
                    map={props.map}
                    dataType={dataType}
                />
            </div>
        </div>
    );
}