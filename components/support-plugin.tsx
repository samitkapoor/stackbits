import React, { useEffect, useState } from 'react';
import CopyTextButton from './ui/copy-text-button';
import { Mail, Search, Twitter } from 'lucide-react';
import useDebounce from '@/lib/useDebounce';
import { searchDocs } from '@/data/main';
import { useRouter } from 'next/navigation';

export type SearchResult = {
  name: string;
  preview: string;
  to: string;
};

const SupportPlugin = () => {
  const [results, setResults] = useState<Array<SearchResult>>([]);
  const [query, setQuery] = useState('');
  const searchValue = useDebounce(query, 250);

  const router = useRouter();

  useEffect(() => {
    setResults(searchDocs(searchValue));
  }, [searchValue]);

  const selectSearchResult = (to: string) => {
    setResults([]);
    setQuery('');
    router.replace(to);
  };

  return (
    <div className="flex flex-col gap-2 text-sm max-w-[250px] w-full relative py-[50px] mx-4 sm:mx-10">
      <div className="flex flex-col">
        <div className="flex items-center relative">
          <Search className="absolute right-[8px] z-10 text-neutral-500 h-[19px] w-[19px]" />
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search..."
            className="bg-transparent w-full border-[1px] border-neutral-600 py-2 pl-[8px] pr-[30px] rounded-lg focus:border-neutral-400"
          />
        </div>

        <div className="mt-4 flex flex-col gap-2">
          {results.map((item, i) => {
            return (
              <div
                onClick={() => selectSearchResult(item.to)}
                className="flex flex-col border-[1px] border-neutral-600 rounded-lg p-2 hover:border-neutral-400 cursor-pointer select-none"
                key={i}
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-neutral-400 overflow-hidden text-ellipsis whitespace-nowrap">
                  {item.preview}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-2 text-xs mt-10">
        <p>
          ⭐️ Got a question or feedback?
          <br /> Feel free to reach out!
        </p>

        <CopyTextButton
          handle="samitkapoorr"
          icon={<Twitter className="w-4 h-4" />}
          variant="small"
        />
        <CopyTextButton
          handle="samitkapoor77@gmail.com"
          icon={<Mail className="w-4 h-4" />}
          variant="small"
        />
      </div>
    </div>
  );
};

export default SupportPlugin;
