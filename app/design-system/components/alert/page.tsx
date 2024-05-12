"use client";
import { type Icon as IconType } from "@phosphor-icons/react";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import React from "react";

import { Alert } from "@/components/ui/Alert";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";
import CodeBlock from "@/components/ui/CodeBlock";

const alertVariants = ["default", "success", "warning", "error"];

const AlertExample1Code = `<Alert
  title={'Woah there cowboy!'}
  description={"Some description"}
/>`;
const AlertExample2Code = `<Alert
  icon={<Warning />}
  title={'Woah there cowboy!'}
  description={"Some description"}
/>`;
const AlertExample3Code = `<Alert description={"Some description"} />`;

const AlertVariantBox = ({ title, icon }: { title?: string; icon?: IconType }): React.ReactElement | null => (
  <div className="grid grid-cols-1 gap-x-4 gap-y-4 p-4 place-items-center overflow-x-auto">
    {alertVariants.map((variant, idx) => (
      <Alert
        key={idx}
        icon={icon}
        // @ts-ignore
        variant={variant}
        title={title}
        description="This amount exceeds the total amount of funds in your account
        ($7,209,114.82)."
      />
    ))}
  </div>
);

const AlertPage = () => (
  <ComponentDocsPageTemplate title="Alert" githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Alert.tsx"} path="/alert">
    <div className="flex flex-col gap-16 pb-12">
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Regular
        </Text>
        <div className="container mx-auto">
          <CodeBlock aria-label="Hello world" language="html" component={<AlertVariantBox title={"Woah there cowboy!"} />}>
            {AlertExample1Code}
          </CodeBlock>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          With Icon
        </Text>
        <div className="container mx-auto">
          <CodeBlock aria-label="Hello world" language="html" component={<AlertVariantBox icon={Warning} title={"Nice looking icon eh"} />}>
            {AlertExample2Code}
          </CodeBlock>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Just Text
        </Text>
        <div className="container mx-auto">
          <CodeBlock aria-label="Hello world" language="html" component={<AlertVariantBox />}>
            {AlertExample3Code}
          </CodeBlock>
        </div>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default AlertPage;
