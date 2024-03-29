'use client';
import { useRef } from 'react';

import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils';

function RowVirtualizerVariable({ rows }: { rows: number[] }) {
  const parentRef = useRef(null);

  const rowVirtualizer = useVirtualizer({
    count: rows?.length,
    getScrollElement: () => parentRef?.current,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    estimateSize: (i) => rows[i],
    overscan: 5,
  });

  return (
    <>
      <div
        ref={parentRef}
        style={{
          height: 600,
          width: 400,
          overflow: 'auto',
        }}
        className="border border-stroke-primary rounded-lg p-2"
      >
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.index}
              className={cn(
                'border-b border-stroke-tertiary pl-4 flex flex-row items-center',
                {
                  'bg-surface-secondary': virtualRow.index % 2,
                },
              )}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${rows[virtualRow.index]}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              Row {virtualRow.index}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
import ComponentDocsPageTemplate from '@/app/design-system/components/ComponentDocsPageTemplate';

const CheckboxPage = () => {
  const rows: number[] = new Array(10000)
    .fill(true)
    .map(() => 25 + Math.round(Math.random() * 100));
  return (
    <ComponentDocsPageTemplate title="Virtualizing" path="/virtualized">
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="p-8 min-h-[250px] flex flex-row items-center justify-center gap-x-4">
          <RowVirtualizerVariable rows={rows} />
        </div>
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default CheckboxPage;
