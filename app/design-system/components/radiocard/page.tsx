'use client';
import React, { useState } from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Text } from '@/components/ui/Text';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

const RadioCardPage = () => {
  const [checked, setChecked] = useState('option1');
  return (
    <ComponentDocsPageTemplate
      title="Radio Card"
      githubLink={
        'https://github.com/src/components/ui/Component.tsx
      }
      path="/radiocard"
    >
      <div className="p-8 min-h-[250px] flex flex-col items-center justify-center gap-4">
        <RadioGroup>
          <RadioGroupItem
            id="1option1"
            value="1option1"
            label="Default option1"
          >
            Hello
          </RadioGroupItem>
          <RadioGroupItem
            id="1option2"
            value="1option2"
            label="Default option2"
          >
            Option 2
          </RadioGroupItem>
          <RadioGroupItem
            id="1option3"
            value="1option3"
            label="Default option3"
          >
            Option 3
          </RadioGroupItem>
        </RadioGroup>

        <Text>
          {' '}
          In order to use the Card styling it must be controlled and you need to
          pass ids, variant="card" and a checked value
        </Text>
        <RadioGroup
          value={checked}
          onValueChange={(value: string) => setChecked(value)}
        >
          <RadioGroupItem
            id="option1"
            value="option1"
            variant="card"
            label="Option 1"
            checked={checked === 'option1'}
          >
            Hello
          </RadioGroupItem>
          <RadioGroupItem
            id="option2"
            value="option2"
            variant="card"
            label="Option 2"
            checked={checked === 'option2'}
          >
            Option 2
          </RadioGroupItem>
          <RadioGroupItem
            id="option3"
            value="option3"
            variant="card"
            label="Option 3"
            checked={checked === 'option3'}
          >
            Option 3
          </RadioGroupItem>
        </RadioGroup>
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default RadioCardPage;
