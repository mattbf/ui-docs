"use client";
import React, { ReactNode } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";
import { Card } from "./Card";
import { Text } from "./Text";
import { Button } from "./Button";
import { Copy } from "@phosphor-icons/react/dist/ssr";
import copyToClipboard from "@/utils/copyToClipboard";
interface CodeBlockProps {
  children: string;
  language: string;
  filename?: string;
  component?: ReactNode;
  "aria-label"?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language, filename, component, "aria-label": ariaLabel }) => {
  const codeRef = React.useRef<HTMLPreElement>(null);

  React.useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);

  return (
    <>
      {!!component ? (
        <Card className="p-0 shadow-sm overflow-hidden flex flex-col gap-0 relative">
          <div className="bg-white p-4 border-b border-stroke-secondary">{component}</div>
          <div className="group relative">
            <pre
              ref={codeRef}
              className="p-4 overflow-x-auto text-sm selection:bg-lavender-100 !bg-lavender-50/70 selection:text-lavender-700"
              aria-label={ariaLabel}
            >
              <code className={`language-${language}`}>{children}</code>
            </pre>
            <Button
              leftIcon={Copy}
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 group-hover:opacity-100 opacity-10 transition-all"
              onClick={() => void copyToClipboard(children)}
            />
          </div>
        </Card>
      ) : (
        <Card className="p-0 shadow-sm overflow-hidden flex flex-col gap-0 relative">
          {filename && (
            <div className="bg-black-alpha-25 border-b border-stroke-tertiary px-4 py-3">
              <Text variant="body" size="sm" className="text-text-secondary">
                {filename}
              </Text>
            </div>
          )}
          <div className="group relative">
            <pre ref={codeRef} className="p-4 overflow-x-auto text-sm selection:bg-lavender-100 selection:text-lavender-700" aria-label={ariaLabel}>
              <code className={`language-${language}`}>{children}</code>
            </pre>
            <Button
              leftIcon={Copy}
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 group-hover:opacity-100 opacity-10 transition-all"
              onClick={() => void copyToClipboard(children)}
            />
          </div>
        </Card>
      )}
    </>
  );
};

export default CodeBlock;
