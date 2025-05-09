import React, { useState } from 'react';
import MagnetTabs from './ui/magnet-tabs';

const MagnetTabsDemo = ({ isPreview = false }) => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  return (
    <MagnetTabs
      slug="magnet-tabs"
      options={[
        'Tab 1',
        'Tab 2',
        'Tab 3',
        'Tab 4',
        ...(!isPreview ? ['Tab 5', 'Tab 6', 'Tab 7', 'Tab 8', 'Tab 9', 'Tab 10'] : [])
      ]}
      onSelect={(option) => setActiveTab(option)}
      activeTab={activeTab}
    />
  );
};

export default MagnetTabsDemo;
