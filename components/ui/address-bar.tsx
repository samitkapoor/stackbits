import React from 'react';

const AddressBar = ({ sideBarGroup, name }: { sideBarGroup: string; name: string }) => {
  return (
    <div className="flex text-sm text-zinc-500 items-center gap-2">
      {sideBarGroup} {`>`} {name}
    </div>
  );
};

export default AddressBar;
