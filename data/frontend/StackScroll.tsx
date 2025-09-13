import { cnCode, installDependenciesCode } from '@/constants/code';
import { Document } from '../main';
import StackedInputForm from '@/components/ui/input-stack-form';
import VideoPreview from '@/components/ui/video-preview';
import StackScroll from '@/components/ui/stack-scroll';

export const stackScrollPreview = (
  <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-white/10">
    <VideoPreview videoUrl="/demos/stacked-form.mp4" />
  </div>
);

export const stackScroll: Document = {
  sideBar: {
    group: 'Components',
    name: 'Stack Scroll',
    order: 7
  },
  content: {
    sections: [
      {
        heading: 'Stack Scroll',
        content:
          'A progressive form that stacks input fields vertically with smooth animations, allowing users to focus on one field at a time while maintaining context.',
        sectionType: 'name'
      },
      {
        sectionType: 'preview',
        code: (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-white/10 overflow-y-auto py-20">
            <StackScroll />
          </div>
        )
      },
      installDependenciesCode({ framerMotion: true }),
      cnCode,
      {
        heading: 'Component',
        sectionType: 'component',
        description:
          'Create a file stacked-input-form.tsx in your components folder and paste this code',
        code: `'use client';

import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { MultiSelect } from '@/components/ui/multi-select';
import { AnimatePresence, motion, Transition } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check, ChevronsDownUp, ChevronsUpDown } from 'lucide-react';

const CompleteInput = ({
  label,
  type,
  placeholder,
  options,
  hideLabel,
  disabled,
  expanded
}: {
  label: string;
  type: 'text' | 'select' | 'radio' | 'textarea' | 'multi-select' | 'slider';
  placeholder?: string;
  options?: { value: string; label: string }[];
  hideLabel?: boolean;
  disabled?: boolean;
  expanded?: boolean;
}) => {
  const id = \`field-\${label.toLowerCase().replace(/\s+/g, '-')}\`;

  if (type === 'text') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div>
          <Input
            id={id}
            placeholder={placeholder}
            className="bg-black text-white border-black"
            autoComplete="off"
            disabled={disabled}
          />
        </div>
      </div>
    );
  } else if (type === 'select') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div>
          <Select disabled={disabled}>
            <SelectTrigger className="bg-black border-black text-white placeholder:text-white w-full">
              <SelectValue placeholder={placeholder ?? 'Select…'} />
            </SelectTrigger>
            <SelectContent className="bg-black text-white border-none outline-none ring-0">
              {options?.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="bg-black hover:!text-black focus:!bg-white/10 focus:!text-white border-none outline-none ring-0"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  } else if (type === 'radio') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div>
          <RadioGroup
            defaultValue={options?.[0]?.value}
            className="grid grid-cols-2 gap-1 w-full bg-white h-9 border rounded-md px-2"
            disabled={disabled}
          >
            {options?.map((opt) => {
              const radioId = \`\${id}-\${opt.value}\`;
              return (
                <div key={opt.value} className="flex items-center gap-1">
                  <RadioGroupItem id={radioId} value={opt.value} />
                  <Label htmlFor={radioId} className="text-sm">
                    {opt.label}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      </div>
    );
  } else if (type === 'textarea') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div>
          <Textarea
            id={id}
            placeholder={placeholder}
            className="bg-black text-white border-black"
            autoComplete="off"
            disabled={disabled}
            style={{
              resize: 'none'
            }}
          />
        </div>
      </div>
    );
  } else if (type === 'multi-select') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div>
          <MultiSelect options={options ?? []} placeholder={placeholder ?? 'Select…'} />
        </div>
      </div>
    );
  } else if (type === 'slider') {
    return (
      <div className="flex w-[300px] flex-col gap-1">
        <Label
          htmlFor={id}
          className={cn('text-sm font-medium', (!expanded || hideLabel) && 'opacity-0 select-none')}
        >
          {label}
        </Label>

        <div className="bg-white border rounded-md px-3 py-4">
          <Slider min={0} max={5} defaultValue={[2]} disabled={disabled} />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>0</span>
            <span>5</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export type Field = {
  label: string;
  type: 'text' | 'select' | 'radio' | 'textarea' | 'multi-select' | 'slider';
  placeholder?: string;
  options?: { value: string; label: string }[];
};

const StackedInputForm = ({ fields }: { fields: Field[] }) => {
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentFieldIndex((i) => Math.max(0, i - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentFieldIndex((i) => Math.min(fields.length - 1, i + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const layoutTransition: Transition = showAll
    ? {
        type: 'spring',
        stiffness: 700,
        damping: 50
      }
    : {
        type: 'spring',
        stiffness: 300,
        damping: 30
      };

  return (
    <motion.div layout className="flex flex-col">
      <motion.div layout="position" transition={layoutTransition} className="z-10">
        <div className={cn('flex items-center justify-between w-[300px]')}>
          <Label className="text-left text-lg font-medium">Make your Pizza</Label>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
            className="text-xs"
          >
            <AnimatePresence mode="wait">
              {showAll ? (
                <motion.p
                  key="collapse"
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  exit={{
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.1
                  }}
                  className="flex items-center gap-1"
                >
                  Collapse <ChevronsDownUp size={14} className="!h-3.5 !w-3.5" />
                </motion.p>
              ) : (
                <motion.p
                  key="expand"
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  exit={{
                    opacity: 0
                  }}
                  transition={{
                    duration: 0.1
                  }}
                  className="flex items-center gap-1"
                >
                  Expand <ChevronsUpDown size={14} className="!h-3.5 !w-3.5" />
                </motion.p>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </motion.div>
      <motion.div
        layout="position"
        transition={layoutTransition}
        className={cn(
          'relative w-[300px] flex flex-col flex-nowrap items-start justify-start gap-2 mt-0 mb-2',
          !showAll && 'min-h-[60.5px]'
        )}
      >
        <AnimatePresence mode="popLayout">
          {fields.map((field, index) => {
            if (index > currentFieldIndex || (!showAll && currentFieldIndex - index >= 5))
              return null;

            return (
              <motion.div
                key={field.label + index}
                style={{
                  zIndex: index + 1
                }}
                layout="position"
                initial={{ opacity: 0, y: 6, scale: 1.05, rotateX: 10 }}
                exit={{ opacity: 0, y: 6, scale: 1.05, rotateX: 10 }}
                animate={{
                  y: !showAll ? -(currentFieldIndex - index) * 6 : 0,
                  rotateX: 0,
                  opacity: !showAll ? [1, 0.75, 0.5, 0.25, 0][currentFieldIndex - index] : 1,
                  scale: !showAll ? [1, 0.95, 0.9, 0.85, 0.8][currentFieldIndex - index] : 1
                }}
                transition={
                  showAll
                    ? {
                        type: 'spring',
                        stiffness: 700,
                        damping: 50
                      }
                    : {
                        type: 'spring',
                        stiffness: 300,
                        damping: 30
                      }
                }
                className={cn(!showAll && 'absolute', 'shrink-0')}
              >
                <CompleteInput
                  label={field.label}
                  type={field.type}
                  placeholder={field.placeholder}
                  options={field.options}
                  hideLabel={showAll ? false : index !== currentFieldIndex}
                  expanded={showAll}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      <motion.div
        layout="position"
        transition={layoutTransition}
        className={cn(
          'flex max-w-[300px] w-full items-center justify-between z-10',
          showAll
            ? 'mt-0'
            : ['textarea', 'slider'].includes(fields[currentFieldIndex].type)
            ? 'mt-6'
            : 'mt-0'
        )}
      >
        <AnimatePresence mode="wait">
          {currentFieldIndex > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="back-button"
            >
              <Button
                variant="ghost"
                onClick={() => setCurrentFieldIndex((i) => Math.max(0, i - 1))}
                disabled={currentFieldIndex === 0}
                size="sm"
                className="rounded-full active:scale-95 select-none"
              >
                <ArrowLeft size={14} className="!h-3.5 !w-3.5" />
              </Button>
            </motion.div>
          ) : (
            <div></div>
          )}
        </AnimatePresence>
        <Button
          onClick={() => setCurrentFieldIndex((i) => Math.min(i + 1, fields.length - 1))}
          disabled={currentFieldIndex === fields.length - 1}
          size="sm"
          className="rounded-full active:scale-95 select-none"
        >
          <AnimatePresence mode="wait">
            {currentFieldIndex === fields.length - 1 ? (
              <motion.p
                key="next"
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 0.1
                }}
                className="flex items-center gap-1 text-xs"
              >
                Done <Check size={14} className="!h-3.5 !w-3.5" />
              </motion.p>
            ) : (
              <motion.p
                key="next"
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}
                transition={{
                  duration: 0.1
                }}
                className="flex items-center gap-1 text-xs"
              >
                Next <ArrowRight size={14} className="!h-3.5 !w-3.5" />
              </motion.p>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default StackedInputForm;`
      },
      {
        heading: 'Usage',
        sectionType: 'usage',
        code: `<StackedInputForm
    fields={[
        {
            label: 'Size',
            type: 'select',
            placeholder: 'Select a size',
            options: [
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
            { value: 'xl', label: 'XL' }
            ]
        },
        {
            label: 'Crust',
            type: 'select',
            placeholder: 'Select a crust',
            options: [
            { value: 'thin', label: 'Thin' },
            { value: 'hand-tossed', label: 'Hand Tossed' },
            { value: 'deep-dish', label: 'Deep Dish' },
            { value: 'gluten-free', label: 'Gluten-Free' }
            ]
        },
        {
            label: 'Sauce',
            type: 'select',
            placeholder: 'Select a sauce',
            options: [
            { value: 'tomato', label: 'Tomato' },
            { value: 'bbq', label: 'BBQ' },
            { value: 'alfredo', label: 'Alfredo' },
            { value: 'pesto', label: 'Pesto' }
            ]
        },
        {
            label: 'Cheese',
            type: 'select',
            placeholder: 'Select a cheese',
            options: [
            { value: 'mozzarella', label: 'Mozzarella' },
            { value: 'cheddar', label: 'Cheddar' },
            { value: 'vegan', label: 'Vegan' },
            { value: 'no-cheese', label: 'No Cheese' }
            ]
        },
        {
            label: 'Toppings',
            type: 'multi-select',
            placeholder: 'Select toppings',
            options: [
            { value: 'pepperoni', label: 'Pepperoni' },
            { value: 'mushrooms', label: 'Mushrooms' },
            { value: 'onions', label: 'Onions' },
            { value: 'olives', label: 'Olives' },
            { value: 'bell-peppers', label: 'Bell Peppers' },
            { value: 'jalapenos', label: 'Jalapeños' },
            { value: 'pineapple', label: 'Pineapple' },
            { value: 'basil', label: 'Basil' }
            ]
        },
        {
            label: 'Special Instructions',
            type: 'textarea',
            placeholder: 'Allergies, preferences, or delivery notes.'
        },
        {
            label: 'Name',
            type: 'text',
            placeholder: 'John Doe'
        },
        {
            label: 'Phone',
            type: 'text',
            placeholder: '123-456-7890'
        },
        {
            label: 'Email',
            type: 'text',
            placeholder: 'john.doe@example.com'
        },
        {
            label: 'Address',
            type: 'text',
            placeholder: '123 Main St, Anytown, USA'
        }
    ]}
/>`
      }
    ]
  }
};
