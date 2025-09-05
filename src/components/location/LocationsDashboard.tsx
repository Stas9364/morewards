import { ChevronDown, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  zip: string;
  status: boolean;
}
const LOCATIONS_DATA: Location[] = [
  {
    id: "142",
    name: "Main Location",
    city: "Troy",
    state: "South Carolina",
    zip: "29848",
    status: true,
  },
];

// @component: LocationsDashboard
export const LocationsDashboard = () => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState<Location[]>(LOCATIONS_DATA);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const toggleLocationStatus = (locationId: string) => {
    setLocations((prev) =>
      prev.map((location) =>
        location.id === locationId
          ? {
              ...location,
              status: !location.status,
            }
          : location
      )
    );
  };
  const totalPages = Math.ceil(locations.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, locations.length);
  const currentLocations = locations.slice(startIndex, endIndex);

  // @return
  return (
    <div className=" flex">
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        <div className="md:p-6  mx-auto">
          {/* Vendor Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span>Vendor Name</span>
                </label>
                <input
                  type="text"
                  value={"Thursday14"}
                  readOnly
                  className="w-full cursor-not-allowed px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span>Vendor ID</span>
                </label>
                <input
                  type="text"
                  value={"127"}
                  readOnly
                  className="w-full cursor-not-allowed px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* My Locations Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                <span>My Locations</span>
              </h2>
              <button onClick={() => navigate('/locations/main-info')} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus size={20} className="mr-2" />
                <span>Add new location</span>
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>Location ID</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>Name</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>City</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>State</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>Zip</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>Status</span>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentLocations.map((location) => (
                    <tr key={location.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span>{location.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span>{location.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span>{location.city}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span>{location.state}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <span>{location.zip}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleLocationStatus(location.id)}
                          className={`
                            relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                            ${location.status ? "bg-green-500" : "bg-gray-300"}
                          `}
                        >
                          <span
                            className={`
                              inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                              ${
                                location.status
                                  ? "translate-x-6"
                                  : "translate-x-1"
                              }
                            `}
                          />
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                          <span>Edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <span className="text-sm text-gray-700">Rows per page:</span>
                <div className="relative">
                  <select
                    value={rowsPerPage}
                    onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    className="appearance-none bg-white border border-gray-300 rounded px-3 py-1 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  <span>
                    {startIndex + 1}-{endIndex} of {locations.length}
                  </span>
                </span>
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="p-1 rounded hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
