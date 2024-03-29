'use client';
import { Text } from '@/components/ui/Text';
import {
  CaretLeft,
  CaretRight,
  GitBranch,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { componentLinks } from '@/app/design-system/DesignSystemSidebar';

const ComponentDocsPageTemplate = ({
  title,
  path,
  githubLink,
  children,
}: {
  title: string;
  path: string;
  githubLink?: string;
  children: React.ReactNode;
}) => {
  const index = componentLinks.findIndex((c) => c.href.includes(path));
  const previous = index > -1 ? componentLinks[index - 1] : null;
  const next = index > -1 ? componentLinks[index + 1] : null;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <div className="mb-8">
        <Text variant="headline" size="4xl">
          {title}
        </Text>
        {githubLink && (
          <div className="mt-2 w-fit cursor-pointer flex h-[1.5rem] p-1 gap-x-1 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90 outline-none select-none">
            <GitBranch size={16} color="currentColor" weight="bold" />
            <Link href={githubLink} target="_blank">
              Edit on Github
            </Link>
          </div>
        )}
      </div>
      <div>{children}</div>
      <div className="border-t border-stroke-secondary flex flex-row justify-between items-center py-4">
        {previous && previous?.href ? (
          <Link
            href={previous.href}
            className="group transition-all flex flex-col justify-end items-end gap-2 px-3 py-1 rounded-md"
          >
            <Text
              variant="body"
              size="sm"
              className="text-text-secondary group-hover:text-text-primary"
            >
              Previous
            </Text>
            <div className="flex flex-row items-center gap-2">
              <CaretLeft
                size={18}
                className="text-text-secondary group-hover:text-text-primary transition-all"
              />
              <Text
                variant="label"
                size="lg"
                className="text-baby-blue-700 group-hover:underline transition-all"
              >
                {previous?.title}
              </Text>
            </div>
          </Link>
        ) : (
          <div className="invisible" />
        )}
        {next && next.href ? (
          <Link
            href={next.href}
            className="group transition-all flex flex-col gap-2 px-3 py-2 rounded-md"
          >
            <Text
              variant="body"
              size="sm"
              className="text-text-secondary group-hover:text-text-primary"
            >
              Next
            </Text>
            <div className="flex flex-row items-center gap-2">
              <Text
                variant="label"
                size="lg"
                className="text-baby-blue-700 group-hover:underline transition-all"
              >
                {next?.title}
              </Text>
              <CaretRight
                size={18}
                className="text-text-secondary group-hover:text-text-primary transition-all"
              />
            </div>
          </Link>
        ) : (
          <div className="invisible" />
        )}
      </div>
    </div>
  );
};

export default ComponentDocsPageTemplate;
