import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';
import { Button } from '@/components/ui/Button';
import {
  DefaultTabsButton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';
import { Text } from '@/components/ui/Text';

const TabsPage = () => (
  <ComponentDocsPageTemplate
    title="Tabs"
    githubLink={
      'https://github.com/vesto-fi/vesto-web/blob/develop/src/components/ui/Tabs.tsx'
    }
    path="/tabs"
  >
    <div className="p-8 min-h-[750px] flex flex-col items-center justify-start">
      <Text variant="overline" size="sm" className="text-text-secondary m-12">
        Using the default tab button
      </Text>
      <Tabs
        defaultValue="default1"
        className="min-w-[400px] w-[600px] h-[200px]"
      >
        <TabsList>
          <TabsTrigger value="default1">
            <DefaultTabsButton>Default Trigger</DefaultTabsButton>
          </TabsTrigger>
          <TabsTrigger value="default2">
            <DefaultTabsButton>Default Trigger 2</DefaultTabsButton>
          </TabsTrigger>
          <TabsTrigger value="default3">
            <DefaultTabsButton>Default Trigger 2</DefaultTabsButton>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="default1"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            Another tab
          </Text>
        </TabsContent>
        <TabsContent
          value="default2"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            Put any content in here
          </Text>
          <Text variant="body">
            You can also pass custom components to the <code>TabsTrigger</code>
          </Text>
        </TabsContent>
        <TabsContent
          value="default3"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            So fun!
          </Text>
        </TabsContent>
      </Tabs>
      <div className="w-full h-[1px] my-12 bg-black-alpha-100"></div>
      <Text variant="overline" size="sm" className="text-text-secondary m-12">
        Custom colors and actions
      </Text>
      <Tabs
        defaultValue="default1"
        className="min-w-[400px] w-[600px] h-[200px]"
      >
        <TabsList>
          <TabsTrigger value="default1">
            <DefaultTabsButton tabAccentColor="sandstone" withDots>
              Uno
            </DefaultTabsButton>
          </TabsTrigger>
          <TabsTrigger value="default2">
            <DefaultTabsButton tabAccentColor="evergreen-light" withDots>
              Dos
            </DefaultTabsButton>
          </TabsTrigger>
          <TabsTrigger value="default3">
            <DefaultTabsButton tabAccentColor="lavender" withDots>
              Tres
            </DefaultTabsButton>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="default1"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            Another tab
          </Text>
        </TabsContent>
        <TabsContent
          value="default2"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            Put any content in here
          </Text>
          <Text variant="body">
            You can also pass custom components to the <code>TabsTrigger</code>
          </Text>
        </TabsContent>
        <TabsContent
          value="default3"
          className="py-4 border border-stroke-primary"
        >
          <Text variant="headline" size="2xl">
            So fun!
          </Text>
        </TabsContent>
      </Tabs>
      <div className="w-full h-[1px] my-12 bg-black-alpha-100"></div>
      <Text variant="overline" size="sm" className="text-text-secondary m-12">
        Custom Tabs baby
      </Text>
      <Tabs defaultValue="button" className="min-w-[400px] w-[600px]">
        <TabsList>
          <TabsTrigger value="button">
            <Button size="sm" color="dark-green">
              Button as trigger
            </Button>
          </TabsTrigger>
          <TabsTrigger value="text">
            <Text>Text as trigger</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="button" className="p-4 border border-lavender-500">
          random content
        </TabsContent>
        <TabsContent value="text" className="p-4 border border-lavender-500">
          random text
        </TabsContent>
      </Tabs>
    </div>
  </ComponentDocsPageTemplate>
);

export default TabsPage;
