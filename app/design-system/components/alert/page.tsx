'use client';
import { type Icon as IconType } from '@phosphor-icons/react';
import { Warning } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

import { Alert } from '@/components/ui/Alert';
import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

const alertVariants = ['default', 'success', 'warning', 'error'];

const AlertVariantBox = ({
  heading,
  title,
  icon,
}: {
  heading: string;
  title?: string;
  icon?: IconType;
}): React.ReactElement | null => (
  <div className="text-lg text-black font-medium flex flex-col gap-2 mb-10">
    <div className="w-[12rem] px-2 text-text-secondary uppercase">
      {heading}
    </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-6 py-8 bg-white border-stroke-primary shadow-sm border rounded-md place-items-center overflow-x-auto">
      {alertVariants.map((variant, idx) => (
        <Alert
          key={idx}
          icon={icon}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant={variant}
          title={title}
          description="This amount exceeds the total amount of funds in your Vesto account
        ($7,209,114.82)."
        />
      ))}
    </div>
  </div>
);

const AlertPage = () => (
  <ComponentDocsPageTemplate
    title="Alert"
    githubLink={
      'https://github.com/src/components/ui/Component.tsx
    }
    path="/alert"
  >
    <div className="p-8 flex flex-row gap-x-4">
      <AlertVariantBox heading="Regular" title={'Woah there cowboy!'} />
      <AlertVariantBox
        heading="With Icon"
        icon={Warning}
        title={'Nice looking icon eh'}
      />
      <AlertVariantBox heading="Just Text" />
    </div>
  </ComponentDocsPageTemplate>
);

export default AlertPage;
