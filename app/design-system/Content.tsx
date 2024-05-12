'use client';
import React, { useRef } from 'react';
import DesignSystemTOC from './DesignSystemTOC';

const Content = ({ children }: { children: React.ReactNode }) => {
  const contentRef = useRef(null);

  return (
    <>
      <div
        className="w-full flex flex-col min-h-screen h-fit px-8 pt-12 pb-240 overflow-x-hidden"
        ref={contentRef}
      >
        {children}
      </div>
      <div className="flex-1 ">
        <DesignSystemTOC contentRef={contentRef} />
      </div>
    </>
  );
};

export default Content;
