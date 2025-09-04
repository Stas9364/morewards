import { Plus } from "lucide-react";
import { LocationsTable } from "./LocationsTable";

// @component: LocationsManagementSection
export const LocationsManagementSection = () => {
  // @return
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          <span>My Locations</span>
        </h2>
        <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Plus className="h-5 w-5 mr-2" />
          <span>Add new location</span>
        </button>
      </div>

      {/* Table */}
      <LocationsTable />
    </div>
  );
};
