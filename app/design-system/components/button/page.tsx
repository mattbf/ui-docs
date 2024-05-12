import React from "react";
import { CaretRight, Lock, Plus } from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/Button";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";

const ButtonVariantRow = ({
  title,
  variant,
  color,
}: {
  title: string;
  variant?: "link" | "default" | "outline" | "ghost" | null | undefined;
  color?: "default" | "dark-green" | "black" | "white" | "error" | undefined;
}): React.JSX.Element => (
  <div className="text-lg text-black font-medium lowercase flex flex-col gap-2 mb-10">
    <Text variant="headline" size="2xl" as="h2">
      {title}
    </Text>

    <div className="flex items-center gap-x-3 w-full p-6 py-8 bg-black-alpha-50 border-stroke-tertiary shadow-sm border rounded-md overflow-x-auto">
      <Button variant={variant} size="sm" color={color}>
        Small
      </Button>
      <Button variant={variant} size="sm" color={color} leftIcon={Plus}>
        Small
      </Button>
      <Button variant={variant} color={color}>
        Button
      </Button>
      <Button variant={variant} color={color} leftIcon={Plus}>
        Button
      </Button>
      <Button variant={variant} size="lg" color={color}>
        Large
      </Button>
      <Button variant={variant} size="lg" color={color} leftIcon={Plus}>
        Large
      </Button>
      <Button variant={variant} size="md" color={color} disabled>
        disabled
      </Button>
      <Button variant={variant} size="md" color={color} leftIcon={Lock} rightIcon={CaretRight}>
        Button
      </Button>
      <Button variant={variant} size="sm" color={color} leftIcon={Plus} />
      <Button variant={variant} size="md" color={color} leftIcon={Plus} />
      <Button variant={variant} size="lg" color={color} leftIcon={Plus} />
    </div>
  </div>
);

const ButtonPage = () => (
  <ComponentDocsPageTemplate title="Button" githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Button.tsx"} path="/button">
    {/* <div className="grid grid-cols-8 border border-red-500">
      <div className="flex flex-col items-center justify-center p-4 border-r border-b border-gray-200">
        <Button size="sm">hello</Button>
      </div>
    </div> */}
    <div>
      <ButtonVariantRow title="Regular" />
      <ButtonVariantRow title="Dark Green" color="dark-green" />
      <ButtonVariantRow title="Black" color="black" />
      <ButtonVariantRow title="White" color="white" />
      <ButtonVariantRow title="Outline" variant="outline" />
      <ButtonVariantRow title="Ghost" variant="ghost" />
    </div>
  </ComponentDocsPageTemplate>
);

export default ButtonPage;
