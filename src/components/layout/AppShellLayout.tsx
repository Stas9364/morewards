import { Outlet } from "react-router-dom";
import { SidebarNavigation } from "../sidebar/SidebarNavigation";
import { useIsMobile } from "../../hooks/use-mobile";
import { useState } from "react";
import { HeaderBar } from "../profile/HeaderBar";

export const AppShellLayout = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          style={{ background: "rgb(0 0 0 / 0)" }}
        />
      )}

      <SidebarNavigation
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        isMobile={isMobile}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <HeaderBar
          onMenuClick={() => setIsSidebarOpen(true)}
          isMobile={isMobile}
        />
        <div className="flex-1 overflow-y-auto">
          <div className="mt-6 px-6 pb-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
