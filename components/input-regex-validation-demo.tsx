import useDebounce from '@/lib/useDebounce';
import React, { useEffect } from 'react';

const validator = (text: string, regex: RegExp): boolean => {
  return regex.test(text);
};

const InputRegexValidationDemo = ({
  label,
  regex,
  placeholder
}: {
  label: string;
  regex: RegExp;
  placeholder: string;
}) => {
  const [data, setData] = React.useState('');
  const debouncedValue = useDebounce(data, 250);
  const [isValid, setIsValid] = React.useState(true);
  const [firstTime, setFirstTime] = React.useState(true);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    }

    if (validator(debouncedValue, regex)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [debouncedValue]);

  return (
    <div className="mt-4 gap-1 flex flex-col ml-1">
      <label className="text-sm sm:text-[16px] font-medium">Test {label}</label>
      <input
        onChange={(e) => setData(e.target.value)}
        placeholder={placeholder}
        className="max-w-[300px] bg-gray-800 px-3 py-2 rounded-lg outline-none text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {!isValid && <p className="text-sm sm:text-[16px] text-red-500">Invalid {label}.</p>}
    </div>
  );
};

export default InputRegexValidationDemo;
