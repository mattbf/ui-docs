"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import { usePathname } from "next/navigation";

type SideBarLinkProps = {
  title: string;
  href: string;
} & ComponentPropsWithoutRef<"div">;

export const DesignSystemSidebarLink = ({ title, href }: SideBarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="flex items-center justify-start gap-x-2">
      <Link
        href={href}
        className={cn(
          "text-sm font-light w-full flex flex-row gap-x-[0.75rem] items-center rounded-md px-2 py-1 hover:bg-surface-hover text-text-secondary  outline-none select-none",
          {
            "text-green-900 bg-black-alpha-75 hover:bg-black-alpha-75": isActive,
          }
        )}
      >
        {title}
      </Link>
    </div>
  );
};
