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
  "evergreen-25": "bg-evergreen-25",
  "evergreen-50": "bg-evergreen-50",
  "evergreen-75": "bg-evergreen-75",
  "evergreen-100": "bg-evergreen-100",
  "evergreen-500": "bg-evergreen-500",
  "evergreen-600": "bg-evergreen-600",
  "evergreen-700": "bg-evergreen-700",
  "evergreen-900": "bg-evergreen-900",
  "evergreen-950": "bg-evergreen-950",
  "sandstone-25": "bg-sandstone-25",
  "sandstone-50": "bg-sandstone-50",
  "sandstone-75": "bg-sandstone-75",
  "sandstone-100": "bg-sandstone-100",
  "sandstone-500": "bg-sandstone-500",
  "sandstone-700": "bg-sandstone-700",
  "sandstone-900": "bg-sandstone-900",
  "tomato-25": "bg-tomato-25",
  "tomato-50": "bg-tomato-50",
  "tomato-75": "bg-tomato-75",
  "tomato-100": "bg-tomato-100",
  "tomato-500": "bg-tomato-500",
  "tomato-700": "bg-tomato-700",
  "tomato-900": "bg-tomato-900",
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
  "lavender-25": "bg-lavender-25",
  "lavender-50": "bg-lavender-50",
  "lavender-75": "bg-lavender-75",
  "lavender-100": "bg-lavender-100",
  "lavender-500": "bg-lavender-500",
  "lavender-700": "bg-lavender-700",
  "lavender-900": "bg-lavender-900",
  "success-green-25": "bg-success-green-25",
  "success-green-50": "bg-success-green-50",
  "success-green-75": "bg-success-green-75",
  "success-green-100": "bg-success-green-100",
  "success-green-500": "bg-success-green-500",
  "success-green-600": "bg-success-green-600",
  "success-green-700": "bg-success-green-700",
  "success-green-900": "bg-success-green-900",
  "warning-yellow-25": "bg-warning-yellow-25",
  "warning-yellow-50": "bg-warning-yellow-50",
  "warning-yellow-75": "bg-warning-yellow-75",
  "warning-yellow-100": "bg-warning-yellow-100",
  "warning-yellow-500": "bg-warning-yellow-500",
  "warning-yellow-700": "bg-warning-yellow-700",
  "warning-yellow-900": "bg-warning-yellow-900",
  "error-red-25": "bg-error-red-25",
  "error-red-50": "bg-error-red-50",
  "error-red-75": "bg-error-red-75",
  "error-red-100": "bg-error-red-100",
  "error-red-500": "bg-error-red-500",
  "error-red-700": "bg-error-red-700",
  "error-red-900": "bg-error-red-900",
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
      <div className="mt-2 w-fit cursor-pointer flex h-[1.5rem] p-1 gap-x-1 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90 outline-none select-none">
        <FigmaLogo size={16} color="currentColor" weight="bold" />
        <Link href={"https://www.figma.com/file/"} target="_blank">
          Edit on Figma
        </Link>
      </div>
    </div>
    <ColorRow name="graphite" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="evergreen" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="sandstone" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="tomato" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="gold" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="baby-blue" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="lavender" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="success-green" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="warning-yellow" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
    <ColorRow name="error-red" colorArray={[25, 50, 75, 100, 200, 500, 600, 700, 800, 900, 950]} />
  </div>
);

export default page;
