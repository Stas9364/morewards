import { ChevronDown } from "lucide-react";
import { useState } from "react";
const locationOptions = [
  {
    value: "first-location",
    label: "First location",
  },
  {
    value: "second-location",
    label: "Second location",
  },
  {
    value: "third-location",
    label: "Third location",
  },
];
const typeOptions = [
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "employee",
    label: "Employee",
  },
  {
    value: "admin",
    label: "Admin",
  },
];

interface UserInfoFormEditingProps {
  user: any;
  onSave: (user: any) => void;
  onCancel: () => void;
}

// @component: UserInfoForm
export const UserInfoFormEditing = ({
  user,
  onSave,
  onCancel,
}: UserInfoFormEditingProps) => {
  const [formData, setFormData] = useState({
    firstName: user?.userName?.split(" ")[0] || "",
    middleInitial: user?.userName?.split(" ")[1] || "",
    lastName: user?.userName?.split(" ")[2] || "",
    location: user?.locationId || "",
    type: typeOptions.find((opt) => opt.label === user?.userType)?.value || "",
    businessEmail: "some@email.com", // У пользователя нет email в данных
    reenterEmail: "some@email.com",
    active: user?.status || true,
    processRefund: false,
  });
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleDropdownSelect = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownOpen(null);
  };
  const handleCancel = () => {
    onCancel();
  };

  const handleSave = () => {
    // Создаем обновленного пользователя
    const updatedUser = {
      ...user,
      locationId: formData.location,
      location:
        locationOptions.find((opt) => opt.value === formData.location)?.label ||
        formData.location,
      userName:
        `${formData.firstName} ${formData.middleInitial} ${formData.lastName}`.trim(),
      userType:
        typeOptions.find((opt) => opt.value === formData.type)?.label ||
        formData.type,
      status: formData.active,
    };

    onSave(updatedUser);
  };

  // @return
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        <span>User Information</span>
      </h2>

      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              <span>First Name</span>
            </label>
            <input
              id="first-name"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="middle-initial"
              className="block text-sm font-medium text-gray-700"
            >
              <span>Middle Initial</span>
            </label>
            <input
              id="middle-initial"
              type="text"
              value={formData.middleInitial}
              onChange={(e) =>
                handleInputChange("middleInitial", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              <span>Last name</span>
            </label>
            <input
              id="last-name"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            />
          </div>
        </div>

        {/* Location and Type Dropdowns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              <span>Location</span>
            </label>
            <button
              onClick={() =>
                setDropdownOpen(dropdownOpen === "location" ? null : "location")
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 text-left flex items-center justify-between"
            >
              <span>
                {locationOptions.find((opt) => opt.value === formData.location)
                  ?.label || "Select location"}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            {dropdownOpen === "location" && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {locationOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleDropdownSelect("location", option.value)
                    }
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              <span>Type</span>
            </label>
            <button
              onClick={() =>
                setDropdownOpen(dropdownOpen === "type" ? null : "type")
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 text-left flex items-center justify-between"
            >
              <span>
                {typeOptions.find((opt) => opt.value === formData.type)
                  ?.label || "Select type"}
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
            {dropdownOpen === "type" && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {typeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleDropdownSelect("type", option.value)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors duration-200"
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Email Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="business-email"
              className="block text-sm font-medium text-gray-700"
            >
              <span>Business Email</span>
            </label>
            <input
              id="business-email"
              type="email"
              value={formData.businessEmail}
              onChange={(e) =>
                handleInputChange("businessEmail", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="reenter-email"
              className="block text-sm font-medium text-gray-700"
            >
              <span>Re-enter Email</span>
            </label>
            <input
              id="reenter-email"
              type="email"
              value={formData.reenterEmail}
              onChange={(e) =>
                handleInputChange("reenterEmail", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.active}
              onChange={(e) => handleInputChange("active", e.target.checked)}
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Active</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.processRefund}
              onChange={(e) =>
                handleInputChange("processRefund", e.target.checked)
              }
              className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">
              Process Refund
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            onClick={handleCancel}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};
