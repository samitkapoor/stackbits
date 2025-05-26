import React from 'react';

const AddressBar = ({ sideBarGroup, name }: { sideBarGroup: string; name: string }) => {
  return (
    <div className="flex text-sm text-zinc-300 items-center gap-2">
      {sideBarGroup} {`>`} {name}
    </div>
  );
};

export default AddressBar;
