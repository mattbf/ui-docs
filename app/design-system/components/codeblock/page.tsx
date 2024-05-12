import React from "react";

// pages/index.tsx
import CodeBlock from "@/components/ui/CodeBlock";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;
const code2 = `function MyComponent(props) {
  return (
    <div className="flex flex-row items-center gap-2">
    <Button size="md">Hello</Button>
    <Button size="sm">Hello</Button>
    <Button size="xs">Hello</Button>
  </div>
  );
}`;

const componentCode = `<div className="flex flex-row items-center gap-2">
  <Button size="md">Hello</Button>
  <Button size="sm">Hello</Button>
  <Button size="xs">Hello</Button>
</div>`;

const Component = () => (
  <div className="flex flex-row items-center gap-2">
    <Button size="md">Hello</Button>
    <Button size="sm">Hello</Button>
    <Button size="xs">Hello</Button>
  </div>
);

const CodeBlockPage = () => (
  <ComponentDocsPageTemplate
    title="CodeBlock"
    path="/codeblock"
    githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/CodeBlock.tsx"}
  >
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h1">
          With filename
        </Text>
        <div className="container mx-auto pb-8">
          <CodeBlock aria-label="Hello world" filename="Table.jsx" language="jsx">
            {code}
          </CodeBlock>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Without filename
        </Text>
        <div className="container mx-auto pb-8">
          <CodeBlock aria-label="Hello world" language="jsx">
            {code2}
          </CodeBlock>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Text variant="headline" size="2xl" as="h2">
          Showcase the component
        </Text>
        <div className="container mx-auto pb-8">
          <CodeBlock aria-label="Hello world" language="tsx" component={<Component />}>
            {componentCode}
          </CodeBlock>
        </div>
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default CodeBlockPage;
