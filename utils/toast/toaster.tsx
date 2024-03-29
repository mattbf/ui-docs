'use client';

import {
  CheckCircle,
  Warning,
  WarningCircle,
} from '@phosphor-icons/react/dist/ssr';

import { useToast } from './useToast';

import { ToasterWrapper, ToastRoot, ToastTitle } from '@/components/ui/Toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToasterWrapper position="bottom-center">
      {toasts.map(({ id, message, variant, ...props }) => (
        <ToastRoot
          key={id}
          {...props}
          variant={variant}
          icon={
            variant === 'success'
              ? CheckCircle
              : variant === 'error'
              ? WarningCircle
              : variant === 'warning'
              ? Warning
              : undefined
          }
          position="bottom-center"
        >
          <ToastTitle title={message} />
        </ToastRoot>
      ))}
    </ToasterWrapper>
  );
}
