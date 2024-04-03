import { Palette, PuzzlePiece } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System",
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
      <div className="flex flex-col gap-4 p-0 md:gap-8 mr-2 shrink w-full grow"></div>
    </div>
  );
}

export default function Page() {
  return <DesignSystem />;
}
