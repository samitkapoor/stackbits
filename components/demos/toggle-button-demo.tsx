import React from 'react';
import ToggleButton from '../buttons/toggle-button';
import { Moon, Rocket, Sun } from 'lucide-react';

const ToggleButtonDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <ToggleButton
        options={[
          {
            label: <Sun size={18} />,
            value: 'Sun'
          },
          {
            label: <Moon size={18} />,
            value: 'Moon'
          },
          {
            label: <Rocket size={18} />,
            value: 'Rocket'
          }
        ]}
        defaultValue="Sun"
      />
      <p>Click the button to toggle</p>
    </div>
  );
};

export default ToggleButtonDemo;
