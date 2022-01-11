import React, { useContext } from 'react';
import ControlText from '@mapbox/mr-ui/control-text';
import Context from '../Context';


export default function StyleData(props) {

    const {
        styleParamsByInputContext, 
        dataNotAddedContext,
        stylingParameters
    } = useContext(Context.Context);

    const {
        circleColorContext,
        circleOpacityContext,
        circleRadiusContext,
        textFieldContext,
        textSizeContext,
        textColorContext,
        iconImageContext,
        iconSizeContext,
        textOffsetContext,
        lineColorContext,
        lineWidthContext,
        lineDashArrayContext,
        fillColorContext,
        fillOpacityContext,
        fillOutlineColorContext
    } = stylingParameters;

    const {setStyleParamsByInput} = styleParamsByInputContext;
    const {dataNotAdded} = dataNotAddedContext;

    const {circleColor, setCircleColor} = circleColorContext;
    const {circleOpacity, setCircleOpacity} = circleOpacityContext;
    const {circleRadius, setCircleRadius} = circleRadiusContext;

    const {textField, setTextField} = textFieldContext;
    const {textSize, setTextSize} = textSizeContext;
    const {textColor, setTextColor} = textColorContext;
    const {iconImage, setIconImage} = iconImageContext;
    const {iconSize, setIconSize} = iconSizeContext;
    const {textOffset, setTextOffset} = textOffsetContext;

    const {lineColor, setLineColor} = lineColorContext;
    const {lineWidth, setLineWidth} = lineWidthContext;
    const {lineDasharray, setLineDasharray} = lineDashArrayContext;

    const {fillColor, setFillColor} = fillColorContext;
    const {fillOpacity, setFillOpacity} = fillOpacityContext;
    const {fillOutlineColor, setFillOutlineColor} = fillOutlineColorContext;

    // Generates the object that holds an array for each data type
    // Each array for each data type contains:
    // - the state for that value, as well as the coresponding setState function to be able to update state
    // - the property type and input type
    // - placeholder and default values
    const styleParams = {
        "circle": 
            [
                {
                    "name": "Circle color",
                    "param": "circle-color",
                    "state": circleColor,
                    "change": setCircleColor,
                    "propertyType": "paint",
                    "inputType": "string",
                    "placeholder": "ex: 'grey' or '#000000'",
                    "default": "#000000"
                },
                {
                    "name": "Circle opacity",
                    "param": "circle-opacity",
                    "state": circleOpacity,
                    "change": setCircleOpacity,
                    "propertyType": "paint",
                    "inputType": "number",
                    "placeholder": "ex: 0.7",
                    "default": 1 
                },
                {
                    "name": "Circle radius",
                    "param": "circle-radius",
                    "state": circleRadius,
                    "change": setCircleRadius,
                    "propertyType": "paint",
                    "inputType": "number",
                    "placeholder": "ex: 3",
                    "default": 5
                }

            ],
        "symbol": 
            [
                {
                    "name": "Text field",
                    "param": "text-field",
                    "state": textField,
                    "change": setTextField,
                    "propertyType": "layout",
                    "inputType": "string",
                    "placeholder": "ex: Restaurant",
                    "default": ""
                },
                {
                    "name": "Text size",
                    "param": "text-size",
                    "state": textSize,
                    "change": setTextSize,
                    "propertyType": "layout",
                    "inputType": "number",
                    "placeholder": "ex: 12",
                    "default": 16
                },
                {
                    "name": "Text color",
                    "param": "text-color",
                    "state": textColor,
                    "change": setTextColor,
                    "propertyType": "paint",
                    "inputType": "string",
                    "placeholder": "ex: 'grey' or '#000000'",
                    "default": "#000000"
                },
                {
                    "name": "Icon image",
                    "param": "icon-image",
                    "state": iconImage,
                    "change": setIconImage,
                    "propertyType": "layout",
                    "inputType": "string",
                    "placeholder": "ex: dot-11",
                    "default": ""
                },
                {
                    "name": "Icon size",
                    "param": "icon-size",
                    "state": iconSize,
                    "change": setIconSize,
                    "propertyType": "layout",
                    "inputType": "number",
                    "placeholder": "ex: 12",
                    "default": 1
                },
                {
                    "name": "Text offset",
                    "param": "text-offset",
                    "state": textOffset,
                    "change": setTextOffset,
                    "propertyType": "layout",
                    "inputType": "array",
                    "placeholder": "ex: 0,1",
                    "default": "0,0"
                }
            ],
        "line":  
            [
                {
                    "name": "Line color",
                    "param": "line-color",
                    "state": lineColor,
                    "change": setLineColor,
                    "propertyType": "paint",
                    "inputType": "string",
                    "placeholder": "ex: 'grey' or '#000000'",
                    "default": "#000000"
                },
                {
                    "name": "Line width",
                    "param": "line-width",
                    "state": lineWidth,
                    "change": setLineWidth,
                    "propertyType": "paint",
                    "inputType": "number",
                    "placeholder": "ex: 3",
                    "default": 1
                },
                {
                    "name": "Line dasharray",
                    "param": "line-dasharray",
                    "state": lineDasharray,
                    "change": setLineDasharray,
                    "propertyType": "paint",
                    "inputType": "array",
                    "placeholder": "ex: 1,1", 
                    "default": "1"
                }
            ],
        "fill":  
            [
                {
                    "name": "Fill color",
                    "param": "fill-color",
                    "state": fillColor,
                    "change": setFillColor,
                    "propertyType": "paint",
                    "inputType": "string",
                    "placeholder": "ex: 'grey' or '#000000'",
                    "default": "black"
                },
                {
                    "name": "Fill opacity",
                    "param": "fill-opacity",
                    "state": fillOpacity,
                    "change": setFillOpacity,
                    "propertyType": "paint",
                    "inputType": "number",
                    "placeholder": "ex: 0.7",
                    "default": 1
                },
                {
                    "name": "Fill outline color",
                    "param": "fill-outline-color",
                    "state": fillOutlineColor,
                    "change": setFillOutlineColor,
                    "propertyType": "paint",
                    "inputType": "string",
                    "placeholder": "ex: 'grey' or '#000000'",
                    "default": "black"
                }
            ]
    }

    // Pulls from data type selected in AddData component to determine corresponding styling properties
    // ie if "Circle" is selected, then can style "Circle color", "Circle opacity", and "Circle radius"
    const handleStyleParams = () => {
        const styleArray = styleParams[props.dataType];
        return (
            <div> 
                {styleArray.map( element => 
                    <ControlText className='input--border-black w300 txt-ms'
                        id={element.param}
                        label={element.name}
                        type="string"
                        value={element.state}
                        onChange={ (value) => { 
                            element.change(value)
                        }}
                        placeholder={element.placeholder}
                        optional={true}
                        aside={element.inputType}
                        key={styleArray.indexOf(element)}
                    />
                )}
            </div>
        )
    }

    // Styles data on map according to styling inputs
    // Also handles if an input is left blank, if is paint property, and is layout property
    const handleClickStyleData = () => {
        const styleArray = styleParams[props.dataType];
        setStyleParamsByInput(styleArray);
        styleArray.map( element => {
            let propertyValue;
            // if state is untouched, or has been deleted, set value to default value
            (element.state !== '' && element.state !== 'undefined') ? propertyValue = element.state : propertyValue = element.default;
                if (element.propertyType === 'paint') {
                    return props.map.current.setPaintProperty('added-layer', element.param, (
                        (element.inputType === "number") ? Number(propertyValue) : 
                        (
                            (element.inputType === 'array') ? propertyValue.split(',').map(Number) : 
                            propertyValue)
                        )); 
                } else {
                    return props.map.current.setLayoutProperty('added-layer', element.param, (
                        (element.inputType === "number") ? Number(propertyValue) : 
                        (
                            (element.inputType === 'array') ? propertyValue.split(',').map(Number) : 
                            propertyValue)
                        )); ;
                }
        });
    } 

   return (
    <div className="txt-bold txt-s pt24 align-center">Style Data
        <div className="txt-normal txt-s align-center">
            <div className="sidebar align-l"> 
                {handleStyleParams()}
            </div>
            <div className='align-center'>
                <button 
                    disabled={dataNotAdded ? 'true' : ''} 
                    className='btn btn--s mb24' 
                    onClick={() => handleClickStyleData()}>
                        Style Data
                </button>
            </div>
        </div>
    </div>
   )
}