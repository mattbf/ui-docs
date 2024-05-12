import Content from './Content';
import DesignSystemNavbar from './DesignSystemNavbar';
import DesignSystemSidebar from './DesignSystemSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full max-h-full max-w-full overflow-hidden overflow-y-auto flex flex-col justify-center items-center bg-slate-50">
      <div className="w-full h-full flex flex-col max-w-screen-2xl relative pt-12">
        <DesignSystemNavbar />
        <div className="w-full h-full grid grid-cols-[225px_1fr_225px] box-border">
          <div className="border-0 box-border">
            <DesignSystemSidebar />
          </div>
          <Content children={children} />
        </div>
      </div>
    </div>
  );
}
