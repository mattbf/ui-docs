import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const PopoverPage = () => (
  <ComponentDocsPageTemplate
    title="Popover"
    githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Popover.tsx"}
    path="/popover"
  >
    <div className="p-8 flex flex-row items-start gap-[3rem] w-full border-stroke-tertiary shadow-sm rounded-md h-[1000px]">
      <div className="w-1/3 flex flex-col gap-8">
        <Text variant="label" className="mb-2">
          A simple popover
        </Text>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-32">
              Open Popover
            </Button>
          </PopoverTrigger>
          <PopoverContent className="py-1 px-3 w-auto">This is a popover</PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-32">
              Right
            </Button>
          </PopoverTrigger>
          <PopoverContent className="py-1 px-3 w-auto" side="right">
            This is a popover
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-32">
              Left
            </Button>
          </PopoverTrigger>
          <PopoverContent className="py-1 px-3 w-auto" side="left">
            This is a popover
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-32">
              Top
            </Button>
          </PopoverTrigger>
          <PopoverContent className="py-1 px-3 w-auto" side="top">
            This is a popover
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <Text variant="label" className="mb-2">
          Content can be anything you want
        </Text>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-32">
              Open Popover
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 flex flex-col gap-2">
            <Text>Text component</Text>
            <Button>Button</Button>
            <Input size="md" label="Label" infoMessage="Message" />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default PopoverPage;
