"use client";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { UserInfoForm } from "./UserInfoForm";
import { UserInfoFormEditing } from "./UserInfoFormEditing";
const userData = [
  {
    id: "15",
    locationId: "31",
    location: "Main Branch",
    userName: "Kira Vend",
    userType: "Manager",
    status: true,
  },
  {
    id: "14",
    locationId: "34",
    location: "Second location",
    userName: "Ilya Manager",
    userType: "Manager",
    status: true,
  },
];
export interface UsersSectionProps {
  className?: string;
}
export default function UsersSection({ className }: UsersSectionProps) {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [users, setUsers] = useState(userData);
  const totalRows = users.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const startRow = (currentPage - 1) * rowsPerPage + 1;
  const endRow = Math.min(currentPage * rowsPerPage, totalRows);
  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setCurrentPage(1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddUser = () => {
    setIsFormVisible(true);
  };

  const handleSaveUser = (newUser: any) => {
    setUsers((prev) => [...prev, newUser]);
    setIsFormVisible(false);
  };

  const handleCancelUser = () => {
    setIsFormVisible(false);
  };

  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  const handleSaveEditedUser = (updatedUser: any) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditing(false);
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingUser(null);
  };
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${
        className || ""
      }`}
    >
      {isFormVisible ? (
        <UserInfoForm onSave={handleSaveUser} onCancel={handleCancelUser} />
      ) : isEditing ? (
        <UserInfoFormEditing
          user={editingUser}
          onSave={handleSaveEditedUser}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-6 lg:p-8 border-b border-gray-100">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
              <span>Users</span>
            </h2>
            <button
              onClick={handleAddUser}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
            >
              <Plus size={20} className="mr-2" />
              <span>Add New User</span>
            </button>
          </div>

          {/* Table Container - Responsive with horizontal scroll */}
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Location ID</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Location</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>User ID</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>User Name</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>User Type</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Status</span>
                    </th>
                    <th className="px-3 sm:px-4 lg:px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-50">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span>{user.locationId}</span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span>{user.location}</span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span>{user.id}</span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <span>{user.userName}</span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span>{user.userType}</span>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center justify-center">
                          {user.status ? (
                            <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                              <Check size={14} className="text-white" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                          )}
                        </div>
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleEditUser(user)}
                            className="p-2 cursor-pointer text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                            aria-label="Edit user"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            className="p-2 cursor-pointer text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 transform hover:scale-110"
                            aria-label="Delete user"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8 py-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                <span>Rows per page:</span>
              </span>
              <div className="relative">
                <select
                  value={rowsPerPage}
                  onChange={(e) =>
                    handleRowsPerPageChange(Number(e.target.value))
                  }
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:shadow-sm cursor-pointer"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end space-x-6">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                <span>
                  {startRow}-{endRow} of {totalRows}
                </span>
              </span>
              <div className="flex items-center space-x-1">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} className="text-gray-600" />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-sm"
                  aria-label="Next page"
                >
                  <ChevronRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
