import React from 'react';
import { CaretRight, Lock, Plus } from '@phosphor-icons/react/dist/ssr';

import { Button } from '@/components/ui/Button';
import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

const ButtonVariantRow = ({
  title,
  variant,
  color,
}: {
  title: string;
  variant?: 'link' | 'default' | 'outline' | 'ghost' | null | undefined;
  color?: 'default' | 'dark-green' | 'black' | 'white' | 'error' | undefined;
}): React.JSX.Element => (
  <div className="text-lg text-black font-medium lowercase flex flex-col gap-2 mb-10">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">{title}</div>
    <div className="flex items-center gap-x-3 w-full p-6 py-8 bg-black-alpha-50 border-stroke-tertiary shadow-sm border rounded-md">
      <Button variant={variant} size="sm" color={color}>
        Small
      </Button>
      <Button variant={variant} size="sm" color={color} leftIcon={Plus}>
        Small
      </Button>
      <Button variant={variant} color={color}>
        Button
      </Button>
      <Button variant={variant} color={color} leftIcon={Plus}>
        Button
      </Button>
      <Button variant={variant} size="lg" color={color}>
        Large
      </Button>
      <Button variant={variant} size="lg" color={color} leftIcon={Plus}>
        Large
      </Button>
      <Button variant={variant} size="md" color={color} disabled>
        disabled
      </Button>
      <Button
        variant={variant}
        size="md"
        color={color}
        leftIcon={Lock}
        rightIcon={CaretRight}
      >
        Button
      </Button>
      <Button variant={variant} size="sm" color={color} leftIcon={Plus} />
      <Button variant={variant} size="md" color={color} leftIcon={Plus} />
      <Button variant={variant} size="lg" color={color} leftIcon={Plus} />
    </div>
  </div>
);

const ButtonPage = () => (
  <ComponentDocsPageTemplate
    title="Button"
    githubLink={
      'https://github.com/vesto-fi/vesto-web/blob/develop/src/components/ui/Button.tsx'
    }
    path="/button"
  >
    <div>
      <ButtonVariantRow title="regular" />
      <ButtonVariantRow title="Dark Green" color="dark-green" />
      <ButtonVariantRow title="black" color="black" />
      <ButtonVariantRow title="white" color="white" />
      <ButtonVariantRow title="Outline" variant="outline" />
      <ButtonVariantRow title="Ghost" variant="ghost" />
    </div>
  </ComponentDocsPageTemplate>
);

export default ButtonPage;
