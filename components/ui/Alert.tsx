import { type Icon as IconType } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const alertVariants = cva("relative w-full rounded-md border p-[1rem] pl-[1.25rem] gap-[0.75rem] flex flex-row items-start gap-[0.75rem]", {
  variants: {
    variant: {
      default: "bg-green-25 border-green-75 text-text-primary",
      success: "bg-grass-25 border-grass-75 text-grass-900",
      warning: "bg-yellow-25 border-yellow-75 text-yellow-900",
      error: "bg-red-25 border-red-75 text-red-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const VARIANT_TO_ICON_COLOR: { [key: string]: string } = {
  default: "text-text-secondary",
  success: "text-grass-700",
  warning: "text-yellow-700",
  error: "text-red-700",
};

type AlertProps = {
  title?: string;
  description?: string | ReactNode;
  icon?: IconType;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ className, variant, title, description, icon: Icon, children, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
    {Icon && <Icon size={18} className={cn(VARIANT_TO_ICON_COLOR[variant as string], "shrink-0")} />}
    <div className="flex flex-col gap-[0.5rem]">
      {title && (
        <Text variant="label" size="md" className="text-inherit leading-none">
          {title}
        </Text>
      )}
      {description && typeof description === "string" ? (
        <Text variant="body" size="sm" className="text-inherit leaading-normal">
          {description}
        </Text>
      ) : description ? (
        description
      ) : null}
    </div>
    {children}
  </div>
));
Alert.displayName = "Alert";

export { Alert };
