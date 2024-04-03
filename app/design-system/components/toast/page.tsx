"use client";
import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Warning, WarningCircle } from "@phosphor-icons/react/dist/ssr";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Text } from "@/components/ui/Text";

import Snackbartest from "@/app/design-system/Snackbartest";
import { Button } from "@/components/ui/Button";
import { Toast, ToastTitle } from "@/components/ui/Toast";

const ToastPage = () => {
  const [successOpen, setSuccessOpen] = useState(false);
  const [failureOpen, setFailureOpen] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  const timerRef = useRef(0);

  useEffect(() => () => clearTimeout(timerRef.current), []);
  return (
    <ComponentDocsPageTemplate title="Toast" githubLink={"https://github.com/src/components/ui/Component.tsx"} path="/toast">
      <div>
        <div className="p-8 min-h-[250px] flex flex-row items-center justify-center gap-x-4">
          <Button
            onClick={() => {
              setFailureOpen(false);
              setWarningOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                setSuccessOpen(true);
              }, 100);
            }}
          >
            Success Bottom Center
          </Button>
          <Toast
            variant="success"
            icon={CheckCircle}
            open={successOpen}
            position="bottom-center"
            onOpenChange={(boolean: boolean) => {
              setSuccessOpen(boolean);
            }}
          >
            <ToastTitle title="Success with timeout!" />
          </Toast>
          <Button
            onClick={() => {
              setSuccessOpen(false);
              setWarningOpen(false);
              setFailureOpen(true);
            }}
          >
            Failure Top Left
          </Button>
          <Toast
            variant="error"
            icon={WarningCircle}
            open={failureOpen}
            position="top-left"
            duration={2000}
            onOpenChange={(boolean: boolean) => {
              setFailureOpen(boolean);
            }}
          >
            <ToastTitle title="Error, shorter duration!" />
          </Toast>
          <Button
            onClick={() => {
              setFailureOpen(false);
              setSuccessOpen(false);
              setWarningOpen(true);
            }}
          >
            Warning Toast Default
          </Button>
          <Toast
            variant="warning"
            icon={Warning}
            open={warningOpen}
            onOpenChange={(boolean: boolean) => {
              setWarningOpen(boolean);
            }}
          >
            <ToastTitle title="Warning!" />
          </Toast>
        </div>
        <div className="p-8 min-h-[250px] flex flex-col items-center justify-center gap-4">
          <Text variant="headline" size="2xl">
            Global Snackbar
          </Text>
          <Text variant="body" size="md" className="text-text-secondary">
            Call the function{" "}
            <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-lavender-900 text-white rounded-lg px-2 py-1">
              showSnackbar
            </code>{" "}
            or{" "}
            <code className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-lavender-900 text-white rounded-lg px-2 py-1">
              displayErrors
            </code>{" "}
            to show the global snackbar
          </Text>
          <Snackbartest />
        </div>
      </div>
    </ComponentDocsPageTemplate>
  );
};

export default ToastPage;
