import DesignSystemNavbar from './DesignSystemNavbar';
import DesignSystemSidebar from './DesignSystemSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full max-h-full max-w-full overflow-hidden flex flex-col justify-center items-center bg-slate-50">
      <div className="w-full h-full flex flex-col max-w-screen-xl border-l border-r border-stroke-secondary relative">
        <DesignSystemNavbar />
        <div className="w-full h-full grid grid-cols-[190px_1fr]">
          <DesignSystemSidebar />
          <div className="min-h-screen overflow-y-auto px-8 pt-12 pb-24">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
