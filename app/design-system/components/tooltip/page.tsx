"use client";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Text } from "@/components/ui/Text";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";

const CheckboxPage = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpenOnClick, setTooltipOpenOnClick] = useState(false);
  const [autoCloseTimeout, setAutoCloseTimeout] = useState<NodeJS.Timeout>();
  return (
    <ComponentDocsPageTemplate
      title="Tooltip"
      githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Tooltip.tsx"}
      path="/tooltip"
    >
      <div className="p-8 min-h-[750px] flex flex-col items-start justify-start gap-12">
        <div className="w-full">
          <Text variant="overline" size="md" className="text-text-secondary mb-2">
            Position, offset, and size.
          </Text>
          <div className="flex items-center gap-x-12 w-full p-6 py-8 bg-black-alpha-50 border-stroke-tertiary shadow-sm border rounded-md">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Hover
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    right
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    bottom
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    top
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    top + offset = 15px
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={15}>
                  Well hello there friend
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Small
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" size="sm">
                  Well hello there friend
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="w-full">
          <Text variant="overline" size="md" className="text-text-secondary mb-2">
            Delay, Controlled and trigger on click
          </Text>
          <div className="flex items-center gap-x-12 w-full p-6 py-8 bg-black-alpha-50 border-stroke-tertiary shadow-sm border rounded-md">
            <TooltipProvider>
              <Tooltip delayDuration={3000}>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Delay 3s
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip open={tooltipOpen} onOpenChange={(open: boolean) => setTooltipOpen(open)}>
                <TooltipTrigger>
                  <Button variant="outline" size="sm">
                    Controlled
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Well hello there friend</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Popover
              open={tooltipOpenOnClick}
              onOpenChange={(open: boolean) => {
                if (open) {
                  const timeout = setTimeout(() => {
                    setTooltipOpenOnClick(false);
                  }, 3000);
                  setAutoCloseTimeout(timeout);
                } else {
                  clearTimeout(autoCloseTimeout);
                }
                setTooltipOpenOnClick(open);
              }}
            >
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  Using a popover to mimic tooltip: Open on Click
                </Button>
              </PopoverTrigger>
              <PopoverContent variant="tooltip" size="sm" side="right">
                Well hello there friend
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default CheckboxPage;
