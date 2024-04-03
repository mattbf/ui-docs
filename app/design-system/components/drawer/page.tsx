import React from "react";

import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const;

const DrawerPage = () => (
  <ComponentDocsPageTemplate title="Drawer" githubLink={"https://github.com/src/components/ui/Component.tsx"} path="/drawer">
    <div className="p-8 min-h-[750px] flex flex-col gap-8 items-center justify-center">
      <div className="grid grid-cols-2 gap-2">
        {DRAWER_SIDES.map((side) => (
          <Drawer key={side}>
            <DrawerTrigger asChild>
              <Button variant="outline">{side + (side === "left" ? " WHITE BG" : "")}</Button>
            </DrawerTrigger>
            <DrawerContent side={side} overlayClassName={side === "left" ? "bg-white/50" : undefined}>
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>Make changes to your profile here. Click save when you're done.</DrawerDescription>
              </DrawerHeader>
              <div className="grid gap-4 py-4 w-full">
                <div className="flex flex-row items-center gap-4 w-full">
                  <Input fullWidth label="Name" id="name" value="Matthew Behan-Fossey" className="col-span-3" />
                </div>
                <div className="flex flex-row items-center gap-4 w-full">
                  <Input fullWidth label="handle" id="username" value="@matthewbf" className="col-span-3" />
                </div>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button type="submit">Save changes</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  </ComponentDocsPageTemplate>
);

export default DrawerPage;
