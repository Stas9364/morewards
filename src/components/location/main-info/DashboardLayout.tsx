import { Menu } from "lucide-react";
import { useState } from "react";
import { LocationsManagementSection } from "./LocationsManagementSection";
import { VendorInfoCard } from "./VendorInfoCard";

// @component: DashboardLayout
export const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // @return
  return (
    <div className=" bg-gray-50 flex">
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">
            <span>Dashboard</span>
          </h1>
          <div className="w-10" />
        </div>

        {/* Main content area */}
        <main className="flex-1 p-6 lg:p-8 space-y-8">
          <VendorInfoCard />
          <LocationsManagementSection />
        </main>
      </div>
    </div>
  );
};
