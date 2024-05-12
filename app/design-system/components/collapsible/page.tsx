import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible";

import React from "react";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import CodeBlock from "@/components/ui/CodeBlock";

const CollapsibleCode = `
<div className="flex flex-row items-center gap-2">
    <Collapsible>
        <CollapsibleTrigger>Who is the nit king?</CollapsibleTrigger>
        <CollapsibleContent>Its Pranav.</CollapsibleContent>
    </Collapsible>
</div>
`;

const CollapsibleComponent = () => (
  <div className="flex flex-row items-center gap-2">
    <Collapsible>
      <CollapsibleTrigger>Who is the nit king?</CollapsibleTrigger>
      <CollapsibleContent>Its Pranav.</CollapsibleContent>
    </Collapsible>
  </div>
);

const page = () => (
  <ComponentDocsPageTemplate
    title="Collapsible"
    githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Collapsible.tsx"}
    path="/collapsible"
  >
    <div>
      <CodeBlock component={<CollapsibleComponent />} aria-label="Collapsible Component" language="tsx">
        {CollapsibleCode}
      </CodeBlock>
    </div>
  </ComponentDocsPageTemplate>
);

export default page;
