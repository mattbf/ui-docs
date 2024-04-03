import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Tag } from '@/components/ui/Tag';

const tagColors = [
  'white',
  'default',
  'blue',
  'gold',
  'orange',
  'success-green',
  'warning-yellow',
  'error-red',
  'graphite',
  'black',
  'dark-green',
  'dark-blue',
  'dark-gold',
  'dark-orange',
  'success-dark-green',
  'warning-dark-yellow',
  'error-dark-red',
  'dark-graphite',
];

const TAILWIND_SIZE_TO_LABEL: { [key: string]: string } = {
  sm: 'Small',
  md: 'Medium',
  lg: 'Large',
};

const TagVariantRow = ({
  title,
  variant,
}: {
  title: string;
  variant?: 'default' | 'outline' | null | undefined;
}): React.ReactElement | null => (
  <div className="text-lg text-black font-medium flex flex-col gap-2 mb-10">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">{title}</div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-6 py-8 bg-black-alpha-50 border-stroke-tertiary shadow-sm border rounded-md place-items-center overflow-x-auto">
      {Array.from({ length: Math.ceil(tagColors.length / 3) }).map((_, i) => (
        <div key={i} className="flex gap-x-4 place-items-center">
          {tagColors.slice(i * 3, (i + 1) * 3).map((color) =>
            ['sm', 'md', 'lg'].map((size, idx) => (
              <Tag
                key={idx}
                variant={variant}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                size={size}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                color={color}
              >
                {TAILWIND_SIZE_TO_LABEL[size]}
              </Tag>
            )),
          )}
        </div>
      ))}
    </div>
  </div>
);
const TagPage = () => (
  <ComponentDocsPageTemplate
    title="Tag"
    githubLink={
      'https://github.com/src/components/ui/Component.tsx
    }
    path="/tag"
  >
    <div className="p-8 flex flex-row gap-x-4">
      <TagVariantRow title="Regular" />
      <TagVariantRow title="Outline" variant="outline" />
    </div>
  </ComponentDocsPageTemplate>
);

export default TagPage;
