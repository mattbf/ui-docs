import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Card } from "@/components/ui/Card";

const CardPage = () => (
  <ComponentDocsPageTemplate title="Card" githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/Card.tsx"} path="/card">
    <div className="p-8 min-h-[500px] flex flex-row items-center justify-center gap-4">
      <Card> Basic Card</Card>
      <Card className="w-96 h-32"> custom width card</Card>
    </div>
  </ComponentDocsPageTemplate>
);

export default CardPage;
