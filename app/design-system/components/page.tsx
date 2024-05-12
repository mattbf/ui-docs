import { Text } from "@/components/ui/Text";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";
import { componentLinks } from "@/app/design-system/DesignSystemSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components",
};

const page = () => {
  const firstComponentLink = componentLinks[0]?.href;
  return (
    <div>
      <div className="mb-8">
        <Text variant="headline" size="4xl">
          Components
        </Text>
        <Text variant="body" size="lg" className="text-text-secondary mt-4">
          A web design system
        </Text>
      </div>
      <div className="grid grid-cols-2 border border-gray-300">
        <Link
          href={`https://github.com/`}
          target="_blank"
          className=" group border-r border-b border-gray-300 p-8 hover:bg-white/80 transition-colors relative"
        >
          <Text variant="label" size="md">
            repo
          </Text>
          <Text variant="body" size="sm" className="text-text-secondary">
            Github repo
          </Text>
          <ArrowSquareOut size={18} className="absolute top-8 right-8 opacity-20 group-hover:opacity-80 transition-opacity" />
        </Link>
        <Link
          href={`https://www.figma.com/`}
          target="_blank"
          className=" group border-b border-gray-300 p-8 hover:bg-white/80 transition-colors relative"
        >
          <Text variant="label" size="md">
            Design System
          </Text>
          <Text variant="body" size="sm" className="text-text-secondary">
            Figma
          </Text>
          <ArrowSquareOut size={18} className="absolute top-8 right-8 opacity-20 group-hover:opacity-80 transition-opacity" />
        </Link>

        <Link
          href={`https://www.notion.so/`}
          target="_blank"
          className=" group border-r border-gray-300 p-8 hover:bg-white/80 transition-colors relative"
        >
          <Text variant="label" size="md">
            Engineering Docs
          </Text>
          <Text variant="body" size="sm" className="text-text-secondary">
            Notion
          </Text>
          <ArrowSquareOut size={18} className="absolute top-8 right-8 opacity-20 group-hover:opacity-80 transition-opacity" />
        </Link>
        <Link href={`https://linear.app/`} target="_blank" className=" group border-gray-300 p-8 hover:bg-white/80 transition-colors relative">
          <Text variant="label" size="md">
            Tickets and Tasks
          </Text>
          <Text variant="body" size="sm" className="text-text-secondary">
            Linear
          </Text>
          <ArrowSquareOut size={18} className="absolute top-8 right-8 opacity-20 group-hover:opacity-80 transition-opacity" />
        </Link>
      </div>

      <div className=" flex flex-row">
        <Link
          href={firstComponentLink ?? "/"}
          className="group w-full h-full border border-t-0 border-gray-300 p-8 hover:bg-white/80 transition-colors"
        >
          <Text variant="label" size="md">
            Explore Components
          </Text>
          <Text variant="body" size="sm" className="text-text-secondary">
            Docs
          </Text>
        </Link>
      </div>
    </div>
  );
};

export default page;
