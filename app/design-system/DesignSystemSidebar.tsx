import React from 'react';
import { DesignSystemSidebarLink } from './DesignSystemSidebarLink';
import { ScrollArea } from '@/components/ui/ScrollArea';

const basePath = `/design-system/components`;
export const componentLinks = [
  {
    title: 'Alert',
    href: `${basePath}/alert`,
  },
  {
    title: 'Button',
    href: `${basePath}/button`,
  },
  {
    title: 'Calendar',
    href: `${basePath}/calendar`,
  },
  {
    title: 'Card',
    href: `${basePath}/card`,
  },
  {
    title: 'Checkbox',
    href: `${basePath}/checkbox`,
  },
  {
    title: 'Codeblock',
    href: `${basePath}/codeblock`,
  },
  {
    title: 'Collapsible',
    href: `${basePath}/collapsible`,
  },
  {
    title: 'Combobox',
    href: `${basePath}/combobox`,
  },
  {
    title: 'Drawer',
    href: `${basePath}/drawer`,
  },
  {
    title: 'Dropdown Menu',
    href: `${basePath}/dropdownmenu`,
  },
  {
    title: 'Input',
    href: `${basePath}/input`,
  },
  {
    title: 'InputOTP',
    href: `${basePath}/input-otp`,
  },
  {
    title: 'Skeleton',
    href: `${basePath}/skeleton`,
  },
  {
    title: 'Modal',
    href: `${basePath}/modal`,
  },
  {
    title: 'Pill',
    href: `${basePath}/pill`,
  },
  {
    title: 'Popover',
    href: `${basePath}/popover`,
  },
  {
    title: 'Radio Card',
    href: `${basePath}/radiocard`,
  },
  {
    title: 'Scroll Area',
    href: `${basePath}/scrollarea`,
  },
  {
    title: 'Select',
    href: `${basePath}/select`,
  },
  {
    title: 'Sentry',
    href: `${basePath}/sentry`,
  },
  {
    title: 'Switch',
    href: `${basePath}/switch`,
  },
  {
    title: 'Table',
    href: `${basePath}/table`,
  },
  {
    title: 'Tabs',
    href: `${basePath}/tabs`,
  },
  {
    title: 'Tag',
    href: `${basePath}/tag`,
  },
  {
    title: 'Text',
    href: `${basePath}/text`,
  },
  {
    title: 'Toast',
    href: `${basePath}/toast`,
  },
  {
    title: 'Tooltip',
    href: `${basePath}/tooltip`,
  },
  {
    title: 'Virtualized',
    href: `${basePath}/virtualized`,
  },
];

const DesignSystemSidebar = () => (
  <div className="fixed w-[226px] h-screen py-2 border-r border-l border-stroke-secondary">
    <ScrollArea className="h-full pb-12">
      <nav className="grid items-start px-4 text-sm font-medium py-2 pb-6">
        {componentLinks.map((l) => (
          <DesignSystemSidebarLink key={l.href} {...l} />
        ))}
      </nav>
    </ScrollArea>
  </div>
);

export default DesignSystemSidebar;
