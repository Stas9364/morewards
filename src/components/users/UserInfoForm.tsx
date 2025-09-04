import { ChevronDown } from "lucide-react";
import { useState } from "react";
const locationOptions = [
  {
    value: "",
    label: "Select a location",
  },
  {
    value: "location1",
    label: "Main Office",
  },
  {
    value: "location2",
    label: "Branch Office",
  },
  {
    value: "location3",
    label: "Remote Location",
  },
];
const typeOptions = [
  {
    value: "",
    label: "Select a type",
  },
  {
    value: "admin",
    label: "Administrator",
  },
  {
    value: "manager",
    label: "Manager",
  },
  {
    value: "employee",
    label: "Employee",
  },
];

interface UserInfoFormProps {
  onSave: (user: object) => void;
  onCancel: () => void;
}

// @component: UserInfoForm
export const UserInfoForm = ({ onSave, onCancel }: UserInfoFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleInitial: "",
    lastName: "",
    location: "",
    type: "",
    businessEmail: "",
    reenterEmail: "",
    active: true,
    canProcessRefund: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSave = async () => {
    setIsSaving(true);
    console.log("Saving user data:", formData);

    // Создаем нового пользователя
    const newUser = {
      id: Date.now().toString(), // Простой ID
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

    setTimeout(() => {
      setIsSaving(false);
      onSave(newUser);
    }, 1000);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      middleInitial: "",
      lastName: "",
      location: "",
      type: "",
      businessEmail: "",
      reenterEmail: "",
      active: true,
      canProcessRefund: false,
    });
    onCancel();
  };
  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.businessEmail &&
    formData.reenterEmail &&
    formData.location &&
    formData.type &&
    formData.businessEmail === formData.reenterEmail;

  // @return
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        <span>User Information</span>
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span>First Name</span>
            </label>
            <input
              id="first-name"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter first name"
            />
          </div>

          <div>
            <label
              htmlFor="middle-initial"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span>Middle Initial</span>
            </label>
            <input
              id="middle-initial"
              type="text"
              maxLength={1}
              value={formData.middleInitial}
              onChange={(e) =>
                handleInputChange("middleInitial", e.target.value)
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="M"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span>Last name</span>
            </label>
            <input
              id="last-name"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span>Location</span>
            </label>
            <div className="relative">
              <select
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              <span>Type</span>
            </label>
            <div className="relative">
              <select
                id="type"
                value={formData.type}
                onChange={(e) => handleInputChange("type", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="business-email"
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter business email"
            />
          </div>

          <div>
            <label
              htmlFor="reenter-email"
              className="block text-sm font-medium text-gray-700 mb-2"
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Re-enter business email"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input
              id="active"
              type="checkbox"
              checked={formData.active}
              onChange={(e) => handleInputChange("active", e.target.checked)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="active"
              className="ml-3 text-sm font-medium text-gray-700"
            >
              <span>Active</span>
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="can-process-refund"
              type="checkbox"
              checked={formData.canProcessRefund}
              onChange={(e) =>
                handleInputChange("canProcessRefund", e.target.checked)
              }
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="can-process-refund"
              className="ml-3 text-sm font-medium text-gray-700"
            >
              <span>Can Process Refund</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6">
          <button
            onClick={handleCancel}
            className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            <span>Cancel</span>
          </button>
          <button
            onClick={handleSave}
            disabled={!isFormValid || isSaving}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span>{isSaving ? "Saving..." : "Save"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
