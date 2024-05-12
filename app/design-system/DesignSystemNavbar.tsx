"use client";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowUpLeft, Palette, PuzzlePiece } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

const DesignSystemNavbar = () => {
  const segment = useSelectedLayoutSegment();
  return (
    <div
      className="z-50 fixed top-0 border-b border-l border-r border-stroke-secondary border-0 flex flex-row items-center justify-between gap-8 p-0 w-full max-w-screen-2xl bg-white/80 box-border"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="px-4 flex flex-row items-center gap-2 self-stretch py-2 border-l-0 border-r border-stroke-secondary w-[225px] overflow-hidden">
        <Link href={"/"} className="">
          <Button
            leftIcon={ArrowUpLeft}
            size="xs"
            variant="outline"
            className="group text-text-secondary overflow-hidden transition-all hover:w-full hover:gap-2 gap-0"
          >
            <div className="truncate w-0 group-hover:w-full">Back to app</div>
          </Button>
        </Link>
        <Link href={"/design-system"} className="truncate">
          Design System
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4 h-full py-2">
        <Link
          className={cn(
            "flex items-center gap-1 text-sm rounded-full px-3 py-1 text-text-secondary transition-all",
            { "bg-black/80 text-white font-bold": segment === "colors" },
            {
              "hover:text-primary hover:bg-surface-hover": segment !== "colors",
            }
          )}
          href="/design-system/colors"
        >
          <Palette size={14} color="currentColor" weight="bold" />
          Colors
        </Link>
        <Link
          className={cn(
            "flex items-center gap-1 text-sm rounded-full px-3 py-1 text-text-secondary transition-all",
            { "bg-black/80 text-white font-bold": segment === "components" },
            {
              "hover:text-primary hover:bg-surface-hover": segment !== "components",
            }
          )}
          href="/design-system/components"
        >
          <PuzzlePiece size={14} color="currentColor" weight="bold" />
          Components
        </Link>
      </div>
      <div className="flex flex-row w-[225px] items-center gap-4 h-full py-2 px-4">
        {/* <div className=" w-full cursor-pointer flex flex-row items-center justify-between border border-stroke-secondary rounded-md text-sm px-2 py-1 hover:bg-surface-hover text-text-secondary gap-2 transition-colors">
          <div className="flex flex-row gap-2 items-center">
            <MagnifyingGlass size={14} />
            Search...
          </div>

          <div className="ml-4 px-1 text-xs py-0 rounded-md bg-white shadow-sm border-[0.5px] border-stroke-tertiary">
            ⌘K
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DesignSystemNavbar;
