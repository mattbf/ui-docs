'use client';
import { cn } from '@/lib/utils';
import {
  MagnifyingGlass,
  Palette,
  PuzzlePiece,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import React from 'react';

const DesignSystemNavbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div
      className="border-b border-stroke-secondary flex flex-row items-center justify-between gap-8 w-full px-4 py-2 bg-white/80" // absolute top-0
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="flex flex-row items-center gap-4">
        Vesto Design System
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link
          className={cn(
            'flex items-center gap-1 text-sm rounded-full px-3 py-1 text-text-secondary transition-all',
            { 'bg-black/80 text-white font-bold': segment === 'colors' },
            {
              'hover:text-primary hover:bg-surface-hover': segment !== 'colors',
            },
          )}
          href="/design-system/colors"
        >
          <Palette size={14} color="currentColor" weight="bold" />
          Colors
        </Link>
        <Link
          className={cn(
            'flex items-center gap-1 text-sm rounded-full px-3 py-1 text-text-secondary transition-all',
            { 'bg-black/80 text-white font-bold': segment === 'components' },
            {
              'hover:text-primary hover:bg-surface-hover':
                segment !== 'components',
            },
          )}
          href="/design-system/components"
        >
          <PuzzlePiece size={14} color="currentColor" weight="bold" />
          Components
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="cursor-pointer flex flex-row items-center border border-stroke-secondary rounded-md text-sm px-2 py-1 hover:bg-surface-hover text-text-secondary gap-2 transition-colors">
          <MagnifyingGlass size={14} />
          Search...
          <div className="ml-4 px-1 text-xs py-0 rounded-md bg-white shadow-sm border-[0.5px] border-stroke-tertiary">
            ⌘K
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSystemNavbar;
