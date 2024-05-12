import React, { RefObject, useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/ScrollArea';
import { Text } from '@/components/ui/Text';
import { usePathname } from 'next/navigation';

type Heading = {
  level: 1 | 2 | 3;
  text: string;
  id: string;
  children: Heading[];
};

const DesignSystemTOC = ({
  contentRef,
}: {
  contentRef: RefObject<HTMLDivElement>;
}) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();
  const paths = pathname.split('/').filter((p) => !!p && p !== '');

  useEffect(() => {
    const extractHeadings = () => {
      const h1Elements = contentRef.current?.querySelectorAll('h1');
      const h2Elements = contentRef.current?.querySelectorAll('h2');

      if (!h1Elements || !h2Elements) return;

      const foundHeadings: Heading[] = [];

      let currentH1Heading: Heading | null = null;

      h1Elements.forEach((h1) => {
        const h1Heading: Heading = {
          level: 1,
          text: h1.textContent || '',
          id: h1.id,
          children: [],
        };
        currentH1Heading = h1Heading;
        foundHeadings.push(h1Heading);
      });

      h2Elements.forEach((h2) => {
        const h2Heading: Heading = {
          level: 2,
          text: h2.textContent || '',
          id: h2.id,
          children: [],
        };

        if (currentH1Heading) {
          currentH1Heading.children.push(h2Heading);
        } else {
          foundHeadings.push(h2Heading);
        }
      });

      setHeadings(foundHeadings);
    };

    if (contentRef.current) {
      extractHeadings();
    }
  }, [contentRef, pathname]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showTOC =
    paths &&
    paths.length >= 3 &&
    paths[1] === 'components' &&
    headings.length >= 1;

  const renderHeadings = (curPageHeadings: Heading[]) => (
    <ul className="flex flex-col gap-2">
      {curPageHeadings.map((heading, index) => (
        <li key={index}>
          <div onClick={() => scrollToHeading(heading.id)}>
            <Text
              variant="body"
              size="sm"
              className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors"
            >
              {heading.text}
            </Text>
          </div>
          {heading.children.length > 0 && (
            <ul className="ml-4 pt-2">{renderHeadings(heading.children)}</ul>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`fixed h-full top-12 left-auto right-auto w-[225px] p-6 ${
        showTOC ? 'border-l' : null
      } border-r border-stroke-secondary`}
    >
      {showTOC && (
        <ScrollArea className="h-full pb-12">
          <Text variant="label" size="md" className="mb-3">
            Quick links
          </Text>
          {renderHeadings(headings)}
        </ScrollArea>
      )}
    </div>
  );
};

export default DesignSystemTOC;
