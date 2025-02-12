import useDebounce from '@/lib/useDebounce';
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState } from 'react';

const WithoutDebounce = () => {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col-reverse  sm:flex-row items-center sm:justify-between w-full gap-2 sm:gap-6">
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <p className="text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0">
          Without Debounce, API will be called on every input
        </p>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          className="max-w-[300px] bg-gray-800 px-3 py-2 rounded-lg outline-none text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={20}
        />
        {value && (
          <p className="text-green-500 text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0">
            Call API with: {value}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <ThumbsDown className="text-red-500 h-4 w-4 sm:h-8 sm:w-8" />
        <p className="text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0">Bad</p>
      </div>
    </div>
  );
};

const WithDebounce = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between w-full gap-2 sm:gap-6">
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <p className="text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0 ">
          With Debounce, API will be called after x-ms of no input
        </p>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          className="max-w-[300px] bg-gray-800 px-3 py-2 rounded-lg outline-none text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          maxLength={20}
        />
        {debouncedValue && (
          <p className="text-green-500 text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0">
            Call API with: {debouncedValue}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <ThumbsUp className="text-green-500 h-4 w-4 sm:h-8 sm:w-8" />
        <p className="text-xs sm:text-[16px] text-center sm:text-left px-4 sm:px-0">Good</p>
      </div>
    </div>
  );
};

const DebouncingDemo = () => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-10 justify-center">
      <WithoutDebounce />
      <WithDebounce />
    </div>
  );
};

export default DebouncingDemo;
