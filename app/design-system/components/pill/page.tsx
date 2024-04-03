import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";
import { PillGroup, PillItem } from "@/components/ui/Pill";

const PillPage = () => (
  <ComponentDocsPageTemplate title="Pill" githubLink={"https://github.com/src/components/ui/Component.tsx"} path="/pill">
    <div className="p-8 min-h-[250px] flex flex-row items-center justify-center gap-6">
      <div className="flex-col">
        <Text variant="headline" size="lg" className="mb-2">
          Small
        </Text>
        <PillGroup size="sm" defaultValue="small 1">
          <PillItem value="small 1" size="sm" />
          <PillItem value="small 2" size="sm" />
          <PillItem value="small 3" size="sm" />
        </PillGroup>
      </div>
      <div className="flex-col">
        <Text variant="headline" size="lg" className="mb-2">
          Medium
        </Text>
        <PillGroup size="md" defaultValue="medium 1">
          <PillItem value="medium 1" />
          <PillItem value="medium 2" />
          <PillItem value="medium 3" />
        </PillGroup>
      </div>
      <div className="flex-col">
        <Text variant="headline" size="lg" className="mb-2">
          Large
        </Text>
        <PillGroup size="lg" defaultValue="large 1">
          <PillItem value="large 1" size="lg" />
          <PillItem value="large 2" size="lg" />
        </PillGroup>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default PillPage;
