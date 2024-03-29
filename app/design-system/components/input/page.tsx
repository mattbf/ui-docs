'use client';
import { CurrencyDollar, Info, Percent } from '@phosphor-icons/react/dist/ssr';
import { useState } from 'react';

import { Input } from '@/components/ui/Input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';
import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

const InputVariantColumn = ({
  title,
  size,
}: {
  title: string;
  size: 'md' | 'lg' | 'xl' | undefined;
}): React.JSX.Element => (
  <div className="text-lg text-black font-medium lowercase flex flex-col gap-2 mb-10 grow h-full">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">{title}</div>
    <div className="flex flex-col items-start gap-y-[1rem] w-full h-full p-6 py-8 bg-surface-secondary/30 rounded-md border border-stroke-tertiary">
      <Input size={size} />
      <Input size={size} label="Label" infoMessage="Message" />
      <Input
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

      <Input size={size} fullWidth />
      <Input size={size} placeholder="placeholder" />
      <Input size={size} leftIcon={CurrencyDollar} />
      <Input size={size} leftIcon={CurrencyDollar} rightIcon={Percent} />
      <Input size={size} error={true} />
      <Input size={size} errorMessage="error" />
      <Input
        size={size}
        label="Custom styles"
        className="border border-purple-500 bg-baby-blue-100/20"
      />
      <Input size={size} disabled={true} />
    </div>
  </div>
);

const InputPage = () => {
  const [inputValue, setInputValue] = useState<string>('controlled');
  return (
    <ComponentDocsPageTemplate
      title="Input"
      githubLink={
        'https://github.com/vesto-fi/vesto-web/blob/develop/src/components/ui/Input.tsx'
      }
      path="/input"
    >
      <div className="p-8 flex flex-row gap-[1rem] w-full border-stroke-tertiary shadow-sm rounded-md items-stretch">
        <InputVariantColumn title="medium" size="md" />
        <InputVariantColumn title="large" size="lg" />
        <InputVariantColumn title="X-Large" size="xl" />
        <Input
          label="Controlled Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default InputPage;
