import crypto from 'crypto';

import { Document } from '../main';
import DebouncingDemo from '@/components/debouncing-demo';

const generateCryptoSecret = () => {
  const secret = crypto.randomBytes(32).toString('base64');
  navigator.clipboard.writeText(secret);
};

export const debounce: Document = {
  sideBar: {
    group: 'Utilities',
    name: 'Debounce',
    order: 3
  },
  content: {
    sections: [
      {
        heading: 'Debounce',
        content:
          'Debouncing is a technique used to improve performance by delaying the execution of a function until after a specified time has passed since the last invocation. This is especially useful for optimizing search inputs, API calls, and event listeners.',
        sectionType: 'paragraph'
      },
      {
        heading: 'See it in Action 👇🏻',
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex items-center justify-center">
            <DebouncingDemo />
          </div>
        )
      },
      {
        heading: 'Follow below steps 👇🏻',
        sectionType: 'heading'
      },
      {
        heading: 'useDebounce Hook',
        sectionType: 'component',
        description:
          'Add the useDebounce hook to your custom hooks collection by copying the code below.',
        code: `import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `import { useState } from "react";
import useDebounce from "./useDebounce";

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    // ? Debounced search value will change after 500ms of no input, 
    // ? and that's when the API call will be made
    // ? This prevents API calls on every keystroke
    if (debouncedSearch) {
      console.log("API Call with: ", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchComponent;
`
      }
    ]
  }
};
