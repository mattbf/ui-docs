"use client";
import { Text } from "@/components/ui/Text";
import copyToClipboard from "@/utils/copyToClipboard";
import React from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { FigmaLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Map = {
  [key: string]: string | undefined;
};

const colorMap: Map = {
  "black-alpha-25": "bg-black-alpha-25",
  "black-alpha-50": "bg-black-alpha-50",
  "black-alpha-75": "bg-black-alpha-75",
  "black-alpha-100": "bg-black-alpha-100",
  "black-alpha-500": "bg-black-alpha-500",
  "black-alpha-700": "bg-black-alpha-700",
  "black-alpha-900": "bg-black-alpha-900",
  "graphite-25": "bg-graphite-25",
  "graphite-50": "bg-graphite-50",
  "graphite-75": "bg-graphite-75",
  "graphite-100": "bg-graphite-100",
  "graphite-500": "bg-graphite-500",
  "graphite-600": "bg-graphite-600",
  "graphite-700": "bg-graphite-700",
  "graphite-900": "bg-graphite-900",
  "graphite-950": "bg-graphite-950",
  "green-25": "bg-green-25",
  "green-50": "bg-green-50",
  "green-75": "bg-green-75",
  "green-100": "bg-green-100",
  "green-500": "bg-green-500",
  "green-600": "bg-green-600",
  "green-700": "bg-green-700",
  "green-900": "bg-green-900",
  "green-950": "bg-green-950",
  "orange-25": "bg-orange-25",
  "orange-50": "bg-orange-50",
  "orange-75": "bg-orange-75",
  "orange-100": "bg-orange-100",
  "orange-500": "bg-orange-500",
  "orange-700": "bg-orange-700",
  "orange-900": "bg-orange-900",
  "red-25": "bg-red-25",
  "red-50": "bg-red-50",
  "red-75": "bg-red-75",
  "red-100": "bg-red-100",
  "red-500": "bg-red-500",
  "red-700": "bg-red-700",
  "red-900": "bg-red-900",
  "gold-25": "bg-gold-25",
  "gold-50": "bg-gold-50",
  "gold-75": "bg-gold-75",
  "gold-100": "bg-gold-100",
  "gold-500": "bg-gold-500",
  "gold-700": "bg-gold-700",
  "gold-900": "bg-gold-900",
  "baby-blue-25": "bg-baby-blue-25",
  "baby-blue-50": "bg-baby-blue-50",
  "baby-blue-75": "bg-baby-blue-75",
  "baby-blue-100": "bg-baby-blue-100",
  "baby-blue-500": "bg-baby-blue-500",
  "baby-blue-700": "bg-baby-blue-700",
  "baby-blue-900": "bg-baby-blue-900",
  "purple-25": "bg-purple-25",
  "purple-50": "bg-purple-50",
  "purple-75": "bg-purple-75",
  "purple-100": "bg-purple-100",
  "purple-500": "bg-purple-500",
  "purple-700": "bg-purple-700",
  "purple-900": "bg-purple-900",
  "grass-25": "bg-grass-25",
  "grass-50": "bg-grass-50",
  "grass-75": "bg-grass-75",
  "grass-100": "bg-grass-100",
  "grass-500": "bg-grass-500",
  "grass-600": "bg-grass-600",
  "grass-700": "bg-grass-700",
  "grass-900": "bg-grass-900",
  "yellow-25": "bg-yellow-25",
  "yellow-50": "bg-yellow-50",
  "yellow-75": "bg-yellow-75",
  "yellow-100": "bg-yellow-100",
  "yellow-500": "bg-yellow-500",
  "yellow-700": "bg-yellow-700",
  "yellow-900": "bg-yellow-900",
};

const ColorBlock = ({ code, color }: { color: string; code: number }): React.JSX.Element => {
  const bgString = colorMap[`${color}-${code}`];
  const opacity = bgString === undefined ? "opacity-20" : "opacity-1";

  if (!bgString)
    return (
      <div className={`flex flex-col   gap-1 flex-1 ${opacity}`}>
        <div className={`border border-stroke-secondary rounded-sm min-w-[32px] h-[40px] ${bgString}`} />
        <div className="w-full text-center px-1 font-mono text-xs text-black-aplha-500">{code}</div>
      </div>
    );
  return (
    <TooltipProvider>
      <Tooltip delayDuration={75}>
        <TooltipTrigger>
          <div className={`flex flex-col   gap-1 flex-1 ${opacity}`} onClick={() => (bgString ? void copyToClipboard(bgString, true) : null)}>
            <div
              className={`border border-stroke-secondary rounded-sm min-w-[32px] h-[40px] ${bgString} hover:outline hover:outline-black/50 hover:outline-2`}
            />
            <div className="w-full text-center px-1 font-mono text-xs text-black-aplha-500">{code}</div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" size="sm">
          click to copy tailwind class to clipboard
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
const ColorRow = ({ name, colorArray }: { name: string; colorArray: number[] }): React.JSX.Element => (
  <div className="text-sm text-text-secondary lowercase font-mono grid grid-cols-[auto-fit_minmax(100px,_1fr)_100px] gap-2 mb-10">
    <div>{name}</div>
    <div className="grid grid-cols-11 gap-2 w-full">
      {colorArray.map((code) => (
        <ColorBlock key={code} color={name} code={code} />
      ))}
    </div>
  </div>
);

const page = () => (
  <div>
    <div className="mb-8">
      <Text variant="headline" size="4xl">
        Colors
      </Text>
      <div className="mt-2 w-fit cursor-pointer flex h-[1.5rem] p-1 gap-x-1 text-sm items-center text-[#0ACF83] hover:underline transition-colors hover:opacity-90 outline-none select-none">
        <FigmaLogo size={16} color="currentColor" weight="bold" />
        <Link
          href={"https://www.figma.com/file/GApUKsrij7hTGqMOPC8wj8/Design-System?type=design&node-id=14%3A2&mode=design&t=3M4nY8yTq6L02OIh-1"}
          target="_blank"
        >
          Edit on Figma
        </Link>
      </div>
    </div>
    <ColorRow name="graphite" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="green" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="orange" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="red" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="gold" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="baby-blue" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="purple" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="grass" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="yellow" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="red" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
  </div>
);

export default page;
