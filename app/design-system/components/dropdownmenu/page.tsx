'use client';
import React from 'react';

import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { CreditCard, Gear } from '@phosphor-icons/react/dist/ssr';

const DropDownMenuPage = () => (
  <ComponentDocsPageTemplate
    title="Drop Down Menu"
    githubLink={
      'https://github.com/src/components/ui/Component.tsx
    }
    path="/dropdownmenu"
  >
    <div className="p-8 min-h-[750px] flex flex-col gap-8 items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72">
          <DropdownMenuGroup>
            <DropdownMenuItem label="Billing" icon={CreditCard}>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem label="Settings" icon={Gear}>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem label="Vesto Dev"></DropdownMenuItem>
          <DropdownMenuItem label="Support"></DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem label="Log out">
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Max height</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 max-h-32 overflow-y-auto">
          {Array.from({ length: 100 }).map((_item, i) => (
            <DropdownMenuItem key={i} label={i + ' Vesto'}></DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </ComponentDocsPageTemplate>
);

export default DropDownMenuPage;
