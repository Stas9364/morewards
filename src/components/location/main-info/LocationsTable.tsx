import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
const locationData = [{
  id: '142',
  name: 'Main Location',
  city: 'Troy',
  state: 'South Carolina',
  zip: '29848',
  status: true
}] as any[];
const rowsPerPageOptions = [5, 10, 25, 50];

// @component: LocationsTable
export const LocationsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const totalRows = locationData.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);
  const handleStatusToggle = (locationId: string) => {
    console.log(`Toggle status for location ${locationId}`);
  };
  const handleEdit = (locationId: string) => {
    console.log(`Edit location ${locationId}`);
  };
  const handleRowsPerPageChange = (newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  };

  // @return
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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
            {locationData.map(location => <tr key={location.id} className="hover:bg-gray-50 transition-colors">
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
                  <button onClick={() => handleStatusToggle(location.id)} className={`
                      relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      ${location.status ? 'bg-green-500' : 'bg-gray-300'}
                    `}>
                    <span className={`
                        inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                        ${location.status ? 'translate-x-6' : 'translate-x-1'}
                      `} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button onClick={() => handleEdit(location.id)} className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                    <span>Edit</span>
                  </button>
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">Rows per page:</span>
          <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center space-x-2 px-3 py-1 border border-gray-300 rounded-md bg-white text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span>{rowsPerPage}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            {isDropdownOpen && <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {rowsPerPageOptions.map(option => <button key={option} onClick={() => handleRowsPerPageChange(option)} className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50">
                    <span>{option}</span>
                  </button>)}
              </div>}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">
            <span>{startRow}-{endRow} of {totalRows}</span>
          </span>
          <div className="flex items-center space-x-2">
            <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>;
};