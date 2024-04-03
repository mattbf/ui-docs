import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';

const TextVariantColumn = ({
  title,
  variant,
  phrase,
}: {
  title: string;
  phrase: string;
  variant?: 'body' | 'headline' | 'label' | 'overline' | null | undefined;
}): React.JSX.Element => (
  <div className="text-lg text-black font-medium lowercase flex flex-col gap-2 mb-10">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">{title}</div>
    <div className="flex flex-col items-start gap-y-[1rem] w-full p-6 py-8 border-stroke-tertiary shadow-sm border rounded-md">
      {variant === 'headline' && (
        <>
          <Text as="div" variant={variant} size={'9xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="div" variant={variant} size={'8xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="div" variant={variant} size={'7xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="div" variant={variant} size={'6xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
        </>
      )}
      {variant !== 'overline' && (
        <>
          <Text as="div" variant={variant} size={'5xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="h1" variant={variant} size={'4xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="h2" variant={variant} size={'3xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="span" variant={variant} size={'2xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text as="label" variant={variant} size={'xl'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
        </>
      )}

      <Text variant={variant} size={'lg'}>
        {phrase ? phrase : "Hello I'm some text"}
      </Text>
      <Text variant={variant} size={'md'}>
        {phrase ? phrase : "Hello I'm some text"}
      </Text>
      <Text variant={variant} size={'sm'}>
        {phrase ? phrase : "Hello I'm some text"}
      </Text>
      {(variant === 'body' || variant === 'label') && (
        <>
          <Text variant={variant} size={'xs'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
          <Text variant={variant} size={'2xs'}>
            {phrase ? phrase : "Hello I'm some text"}
          </Text>
        </>
      )}
    </div>
  </div>
);
const TextPage = () => (
  <ComponentDocsPageTemplate
    title="Text"
    githubLink={
      'https://github.com/src/components/ui/Component.tsx
    }
    path="/text"
  >
    <div className="p-8">
      <TextVariantColumn
        phrase="The cash management
platform that helps."
        title="headline"
        variant={'headline'}
      />
      <TextVariantColumn
        phrase="Earn up to ~5% yield
        on your idle cash."
        title="body"
        variant={'body'}
      />
      <TextVariantColumn
        phrase="Schedule
        a demo"
        title="label"
        variant={'label'}
      />
      <TextVariantColumn
        phrase="total revenue"
        title="overline"
        variant={'overline'}
      />
    </div>
  </ComponentDocsPageTemplate>
);

export default TextPage;
