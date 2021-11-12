import React, { useContext, useState } from 'react';
import UnderlineTabs from '@mapbox/mr-ui/underline-tabs';
import Parameters from './Parameters.js';
import AddData from './AddData.js';
import Snippet from './Snippet';
import Context from '../Context.js';

const tabs = [
    {
      label: 'Map Parameters',
      id: 'map-parameters'
    },
    {
      label: 'Add Data',
      id: 'add-data'
    },
    {
      label: 'GL JS Snippet',
      id: 'gl-js-snippet'
    }
  ];

export default function Tabs(props) {

    const stylingContext = useContext(Context.Context);

    const [activeTab, setActiveTab] = useState('map-parameters');

    const changeTab = (id) => {
        setActiveTab(id);
    }

    const navigateTabs = () => {
        if (activeTab === 'map-parameters') {
            return (
                <Parameters
                    lat={props.lat}
                    lng={props.lng}
                    zoom={props.zoom}
                    style={props.style}
                    slippyTile={props.slippyTile}
                    map={props.map}
                    handleChange={props.handleChange}
                    handleToggle={props.handleToggle}
                    handleClickSlippyTiles={props.handleClickSlippyTiles}
                    handleClickMapStyle={props.handleClickMapStyle}
                    toggleValue={props.toggleValue}
                />
            )
        } else if (activeTab === 'add-data') {
            return (
                <AddData
                    slippyTile={props.slippyTile}
                    map={props.map}
                    handleChange={props.handleChange}
                    handleToggle={props.handleToggle}
                    handleClickSlippyTiles={props.handleClickSlippyTiles}
                    handleClickMapStyle={props.handleClickMapStyle}
                    toggleValue={props.toggleValue}
                />
            )
        } else if (activeTab === 'gl-js-snippet') {
            return (
                <Snippet />
            )
        }
    }

    return (
        <div className="sidebar-container border overflow-auto mb24">
            <div>
                <div id="underline-tabs-a" className="mx6 border-b border--gray-light">
                    <UnderlineTabs
                    items={tabs}
                    active={activeTab}
                    onChange={changeTab}
                    overlapBorder={true}
                    />
                </div>
                {navigateTabs()}
            </div>
        </div>
    );
}