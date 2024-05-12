import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";
import { Checkbox } from "@/components/ui/Checkbox";

const CheckboxPage = () => (
  <ComponentDocsPageTemplate
    title="Checkbox"
    githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Checkbox.tsx"}
    path="/checkbox"
  >
    <div className="p-8 min-h-[500px] flex flex-row items-center justify-center gap-4">
      <Card className="m-8">
        <Text variant="headline" size="lg" className="mb-2">
          Medium (default)
        </Text>
        <Checkbox />
        <div className="flex flex-row items-start gap-3">
          <Checkbox />
          <Text variant="label" size="md">
            with label
          </Text>
        </div>
      </Card>
      <Card className="m-8">
        <Text variant="headline" size="lg" className="mb-2">
          Small
        </Text>
        <Checkbox size="sm" />
        <div className="flex flex-row items-start gap-3">
          <Checkbox size="sm" />
          <Text variant="label" size="sm">
            with label
          </Text>
        </div>
      </Card>
    </div>
  </ComponentDocsPageTemplate>
);

export default CheckboxPage;
