import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';
import { Switch } from '@/components/ui/Switch';

const CheckboxPage = () => (
  <ComponentDocsPageTemplate
    title="Switch"
    githubLink={
      'https://github.com/src/components/ui/Component.tsx
    }
    path="/switch"
  >
    <div className="flex flex-row items-center justify-center">
      <div className="p-8 min-h-[250px] flex flex-col items-center justify-center gap-4">
        <Text variant="label"> Regular</Text>
        <Switch size="xs" />
        <Switch />
        <Switch size="md" />
      </div>
      <div className="p-8 min-h-[250px] flex flex-col items-center justify-center gap-4">
        <Text variant="label"> Vesto Green</Text>
        <Switch size="xs" color="green" />
        <Switch color="green" />
        <Switch size="md" color="green" />
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default CheckboxPage;
