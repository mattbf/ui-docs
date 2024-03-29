import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';
import { Skeleton } from '@/components/ui/Loading/Skeleton';

const CheckboxPage = () => (
  <ComponentDocsPageTemplate
    title="Skeleton"
    githubLink={
      'https://github.com/vesto-fi/vesto-web/blob/develop/src/components/ui/Skeleton.tsx'
    }
    path="/skeleton"
  >
    <div className="p-8 flex flex-row items-start gap-[3rem] w-full border-stroke-tertiary shadow-sm rounded-md h-[1000px]">
      <div className="w-1/3 flex flex-col gap-2">
        <Text variant="label" className="mb-2">
          The skeleton will take up the width and height of it's parent
        </Text>
        <div className="w-24 h-24 m-1">
          <Skeleton className="rounded-full" />
        </div>
        <div className="h-12 m-1 w-full">
          <Skeleton />
        </div>
        <div className="w-12 h-3 m-1">
          <Skeleton />
        </div>
        <div className="w-18 h-32 m-1">
          <Skeleton />
        </div>
        <div className="w-18 h-32 m-1">
          <Skeleton />
        </div>
        <Text className="font-mono bg-surface-quaternary text-text-primary p-4 rounded-sm border border-stroke-tertiary my-2">
          <code>{`
          <div className="w-24 h-24 m-1">
            <Skeleton rounded />
        </div>`}</code>
        </Text>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <Text variant="label" className="mb-2">
          OR can be overriden simply by passing classes
        </Text>
        <Skeleton className="w-24 h-6" />
        <Text className="font-mono bg-surface-quaternary text-text-primary p-4 rounded-sm border border-stroke-tertiary my-2">
          <code>{'<Skeleton className="w-24 h-6" />'}</code>
        </Text>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default CheckboxPage;
