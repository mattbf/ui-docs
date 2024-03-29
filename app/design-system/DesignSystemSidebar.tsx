import React from 'react';
import { DesignSystemSidebarLink } from './DesignSystemSidebarLink';

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
  <div className="overflow-y-auto py-2 pb-12 border-r border-stroke-secondary">
    <nav className="grid items-start px-4 text-sm font-medium py-2 pb-6">
      {componentLinks.map((l) => (
        <DesignSystemSidebarLink key={l.title} {...l} />
      ))}
    </nav>
  </div>
);

export default DesignSystemSidebar;
