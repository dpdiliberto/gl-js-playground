import React, { useState } from 'react';
import UnderlineTabs from '@mapbox/mr-ui/underline-tabs';
import MapParameters from './MapParameters.js';
import AddData from './AddData.js';
import Snippet from './Snippet';

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

    const [activeTab, setActiveTab] = useState('map-parameters');

    // Updates activeTab state 
    const changeTab = (id) => {
        setActiveTab(id);
    }

    // Updates which tab component is displayed based on activeTab state
    const navigateTabs = () => {
        if (activeTab === 'map-parameters') {
            return (
                <MapParameters
                    map={props.map}
                />
            )
        } else if (activeTab === 'add-data') {
            return (
                <AddData
                    map={props.map}
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