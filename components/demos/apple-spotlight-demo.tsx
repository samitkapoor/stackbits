import React, { useState } from 'react';
import AppleSpotlight from '../components/apple-spotlight';
import { Button } from '../ui/button';

const AppleSpotlightDemo = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative flex items-start justify-center h-full w-full p-10">
      <Button
        variant="secondary"
        className="bg-black absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        onClick={toggleOpen}
      >
        Toggle Spotlight
      </Button>
      <AppleSpotlight isOpen={open} handleClose={toggleOpen} />
    </div>
  );
};

export default AppleSpotlightDemo;
