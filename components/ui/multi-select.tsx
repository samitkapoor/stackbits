'use client';

import * as React from 'react';
import { CheckIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

type Option = { value: string; label: string };

type MultiSelectProps = {
  placeholder?: string;
  options: Option[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (next: string[]) => void;
};

export function MultiSelect({
  placeholder = 'Select…',
  options,
  value,
  defaultValue,
  onChange
}: MultiSelectProps) {
  const [internal, setInternal] = React.useState<string[]>(defaultValue ?? []);
  const selected = value ?? internal;

  const toggle = (v: string) => {
    const next = selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v];
    if (onChange) onChange(next);
    else setInternal(next);
  };

  const label = selected.length
    ? options
        .filter((o) => selected.includes(o.value))
        .map((o) => o.label)
        .join(', ')
    : placeholder;

  return (
    <Popover>
      <PopoverTrigger className="flex w-full items-center justify-between gap-2 text-white bg-black border-black">
        <span
          className={cn(
            'text-sm',
            selected.length ? 'text-foreground' : 'text-muted-foreground',
            'line-clamp-1 text-left'
          )}
        >
          {label}
        </span>
        <ChevronDownIcon className="size-4 opacity-60" />
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-1 z-[999] bg-black text-white border-black">
        <div className="max-h-56 overflow-auto">
          {options.map((opt) => {
            const checked = selected.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                className={cn(
                  'focus:bg-white/10 focus:text-white hover:!bg-white/10 flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm',
                  checked && 'bg-white/10 text-white'
                )}
                onClick={() => toggle(opt.value)}
              >
                <span
                  className={cn(
                    'flex size-4 items-center justify-center rounded-[4px] border',
                    checked ? 'bg-primary text-primary-foreground' : 'bg-background'
                  )}
                >
                  {checked ? <CheckIcon className="size-3.5" /> : null}
                </span>
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
