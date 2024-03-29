'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { ComponentPropsWithoutRef } from 'react';
import { usePathname } from 'next/navigation';

type SideBarLinkProps = {
  title: string;
  href: string;
} & ComponentPropsWithoutRef<'div'>;

export const DesignSystemSidebarLink = ({ title, href }: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(href);

  return (
    <div className="flex items-center justify-start gap-x-2">
      <Link
        href={href}
        className={cn(
          'text-sm font-light w-full flex flex-row gap-x-[0.75rem] items-center rounded-md px-2 py-1 hover:bg-surface-hover text-text-secondary  outline-none select-none',
          {
            'text-evergreen-900 bg-black-alpha-75 hover:bg-black-alpha-75':
              isActive,
          },
        )}
      >
        {title}
      </Link>
    </div>
  );
};

{
  /* <div className="flex items-center justify-start gap-x-2 pl-6">
<div className="h-6 w-px bg-stroke-primary" />
<Link
  className="text-sm font-light flex items-center rounded-md px-2 py-1 w-full hover:bg-surface-hover text-text-secondary bg-surface-tertiary"
  href="#alert"
>
  Alert
</Link>
</div> */
}
