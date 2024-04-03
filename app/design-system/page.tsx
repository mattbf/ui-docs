import { Palette, PuzzlePiece } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System | Vesto",
};

function DesignSystem() {
  return (
    <div className="flex flex-row h-screen min-h-screen w-full  overflow-hidden bg-graphite-25 overflow-y-auto relative">
      <div className="flex h-full max-h-screen flex-col gap-2  bg-graphite-25 sticky top-0 w-[250px] shrink-0">
        <div className="flex h-[60px] items-center px-6">
          <div className="flex items-center gap-2 font-semibold">
            <span className=""> Design System</span>
          </div>
        </div>

        <div className="flex-1 overflow-auto py-2 pb-12">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-1.5 text-md rounded-lg px-4 py-3 mb-1 text-text-secondary font-bold transition-all hover:text-evergreen-900 hover:bg-surface-hover"
              href="#colors"
            >
              <Palette size={18} color="currentColor" weight="bold" />
              Colors
            </Link>
            <Link
              className="flex items-center gap-1.5 text-md rounded-lg px-4 py-3 mb-1 text-text-secondary font-bold transition-all hover:text-evergreen-900 hover:bg-surface-hover"
              href="#components"
            >
              <PuzzlePiece size={18} color="currentColor" weight="bold" />
              Components
            </Link>
          </nav>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col gap-4 p-0 md:gap-8 mr-2 shrink w-full grow">
        {/* <div id="getting-started">
            <div className="w-full px-2 py-3 border-b border-t border-black-aplha-50 sticky top-0 bg-surface-quaternary/20 backdrop-blur-3xl bg-surface-primary/80 z-50">
              <h2 className="text-md font-bold text-evergreen-950 uppercase">
                Getting Started
              </h2>
            </div>
            <div className="h-[50rem] p-4 m-2 rounded-lg border border-zinc-200 border-dashed dark:border-zinc-800">
              <p className="text-gray-500">
                Learn how to setup and start using our product.
              </p>
              <div className="text-blue-500 underline">Read more</div>
            </div>
          </div> */}

        {/* <div id="components">
          <h2 className="text-2xl px-4 py-2 font-bold text-evergreen-950 my-2">
            Components
          </h2>
          <div
            id="alert"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Alert</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <AlertSystem />
          </div>
          <div
            id="card"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Card</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <CardSystem />
          </div>
          <div
            id="calendar"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Calendar</span>
              </h2>
            </div>
            <CalendarSystem />
          </div>
          <div
            id="checkbox"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Checkbox</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <CheckboxSystem />
          </div>
          <div
            id="combobox"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Combobox</span>
              </h2>
            </div>
            <ComboboxSystem />
          </div>
          <div
            id="drawer"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Drawer</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <DrawerSystem />
          </div>
          <div
            id="dropdownmenu"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Dropdown Menu</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <DropdownmenuSystem />
          </div>

          <div
            id="text"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Text</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <TextSystem />
          </div>

          <div
            id="input"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Input</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <InputSystem />
          </div>
          <div
            id="loading"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Loading</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <LoadingSystem />
          </div>
          <div
            id="modal"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Modal</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <ModalSystem />
          </div>
          <div
            id="pill"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Pill</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <PillSystem />
          </div>
          <div
            id="popover"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Popover</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <PopoverSystem />
          </div>
          <div
            id="radiocard"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Radio Card</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <RadioCardSystem />
          </div>
          <div
            id="scrollarea"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Scroll Area</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <ScrollAreaSystem />
          </div>
          <div
            id="select"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Select</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <SelectSystem />
          </div>

          <div
            id="sentry"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Sentry</span>
              </h2>
            </div>
            <SentrySystem />
          </div>
          <div
            id="switch"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Switch</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <SwitchSystem />
          </div>
          <div
            id="table"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Table</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <TableSytem />
          </div>
          <div
            id="tabs"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Tabs</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <TabsSystem />
          </div>
          <div
            id="tags"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Tag</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <TagSystem />
          </div>
          <div
            id="toast"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Toast</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <ToastSystem />
          </div>
          <div
            id="tooltip"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Tooltip</span>
              </h2>
              <div className="cursor-pointer flex h-[1.5rem] p-1 px-2 gap-x-2 text-sm items-center text-baby-blue-700 hover:underline transition-colors hover:opacity-90">
                <GitBranch size={16} color="currentColor" weight="bold" />
                <Link
                  href={
                    'https://github.com/src/components/ui/Component.tsx
                  }
                  target="_blank"
                >
                  Edit on Github
                </Link>
              </div>
            </div>
            <TooltipSystem />
          </div>
          <div
            id="virtualized"
            className="my-2 mb-12 shadow-sm rounded-lg border border-stroke-tertiary bg-white"
          >
            <div className="flex items-center justify-between w-full px-4 py-3 border-b border-black-aplha-50 sticky top-0 backdrop-blur-3xl bg-surface-primary/80 z-50 rounded-tl-lg rounded-tr-lg">
              <h2 className="flex flex-row items center gap-x-1 text-md font-bold text-text-tertiary uppercase">
                Components
                <CaretRight color="currentColor" size={16} weight="bold" />
                <span className="text-evergreen-950">Virtualized</span>
              </h2>
            </div>
            <VirtualizedSystem />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default function Page() {
  return <DesignSystem />;
}
