'use client';
import { CurrencyDollar, Info } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';
import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

import { Select } from '@/components/ui/Select';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

const Fruits = Array.from({ length: 50 }).map((_, i) => ({
  title: `FRUIT ${i}`,
  value: `FRUIT ${i}`,
}));

const SelectVariantColumn = ({
  title,
  size,
}: {
  title: string;
  size: 'md' | 'lg' | 'xl' | undefined;
}): React.JSX.Element => (
  <div className="text-lg text-black font-medium lowercase flex flex-col gap-2 mb-10 grow h-full">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">{title}</div>
    <div className="flex flex-col items-start gap-y-[1rem] w-full h-full p-6 py-8 bg-surface-secondary/30 rounded-md border border-stroke-tertiary">
      <Select options={Fruits} size={size} />
      <Select
        options={Fruits}
        size={size}
        label="Label"
        infoMessage="Message"
      />
      <Select
        options={Fruits}
        size={size}
        label="Label"
        labelIcon={
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info size={16} />
              </TooltipTrigger>
              <TooltipContent>Well hello there friend</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        }
        infoMessage="Message"
      />

      <Select options={Fruits} size={size} fullWidth />
      <Select options={Fruits} size={size} leftIcon={CurrencyDollar} />
      <Select options={Fruits} size={size} leftIcon={CurrencyDollar} />
      <Select options={Fruits} size={size} error={true} />
      <Select options={Fruits} size={size} errorMessage="error" />
      <Select
        options={Fruits}
        size={size}
        label="Custom styles"
        className="border border-purple-500 bg-baby-blue-100/20"
      />
      <Select options={Fruits} size={size} disabled={true} />
    </div>
  </div>
);

const SelectPage = () => {
  const [inputValue, setInputValue] = useState<
    | {
        title: string;
        value: string;
      }
    | undefined
  >(undefined);
  return (
    <ComponentDocsPageTemplate
      title="Select"
      githubLink={
        'https://github.com/src/components/ui/Component.tsx
      }
      path="/select"
    >
      <div className="p-8 flex flex-row gap-[1rem] w-full border-stroke-tertiary shadow-sm rounded-md items-stretch h-full">
        <SelectVariantColumn title="medium" size="md" />
        <SelectVariantColumn title="large" size="lg" />
        <SelectVariantColumn title="X-Large" size="xl" />
        <Select
          label="Controlled Input"
          value={inputValue?.value}
          placeholder="Select a fruit"
          options={Fruits}
          onChange={(e) =>
            setInputValue({ title: e.target.value, value: e.target.value })
          }
        />
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default SelectPage;
