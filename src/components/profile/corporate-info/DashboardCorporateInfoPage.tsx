import { Edit3 } from "lucide-react";
import { useState } from "react";
interface FormData {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  primaryLocation1: boolean;
  primaryLocation2: boolean;
  primaryLocation3: boolean;
}

// @component: DashboardCorporateInfoPage
export const DashboardCorporateInfoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    address1: "123 Main St",
    address2: "Suite 500",
    address3: "PO Box 1234",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
    primaryLocation1: true,
    primaryLocation2: false,
    primaryLocation3: false,
  });
  const [originalData, setOriginalData] = useState<FormData>({
    ...formData,
  });
  const handleEdit = () => {
    setIsEditing(true);
    setOriginalData({
      ...formData,
    });
  };
  const handleCancel = () => {
    setFormData({
      ...originalData,
    });
    setIsEditing(false);
  };
  const handleSave = () => {
    setOriginalData({
      ...formData,
    });
    setIsEditing(false);
  };
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // @return
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 lg:ml-0">

        {/* Content Area */}
        <div className="md:p-6">
          <div className="">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
              {/* Header */}
              <div className="px-6 lg:px-8 py-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Corporate Info
                </h2>
                <button
                  onClick={handleEdit}
                  disabled={isEditing}
                  className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                >
                  <Edit3 size={16} className="mr-2" />
                  <span className="font-medium">Edit</span>
                </button>
              </div>

              {/* Form */}
              <div className="px-6 lg:px-8 pb-8 space-y-6">
                {/* Address 1 */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Address 1
                  </label>
                  <input
                    type="text"
                    value={formData.address1}
                    onChange={(e) =>
                      handleInputChange("address1", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.primaryLocation1}
                      onChange={(e) =>
                        handleInputChange("primaryLocation1", e.target.checked)
                      }
                      disabled={!isEditing}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                    />
                    <span className="text-sm text-gray-700">
                      Use as a primary location
                    </span>
                  </label>
                </div>

                {/* City and State Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) =>
                        handleInputChange("state", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Zip Code and Country Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      value={formData.zipCode}
                      onChange={(e) =>
                        handleInputChange("zipCode", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Address 2 */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Address 2
                  </label>
                  <input
                    type="text"
                    value={formData.address2}
                    onChange={(e) =>
                      handleInputChange("address2", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.primaryLocation2}
                      onChange={(e) =>
                        handleInputChange("primaryLocation2", e.target.checked)
                      }
                      disabled={!isEditing}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                    />
                    <span className="text-sm text-gray-700">
                      Use as a primary location
                    </span>
                  </label>
                </div>

                {/* Address 3 */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Address 3
                  </label>
                  <input
                    type="text"
                    value={formData.address3}
                    onChange={(e) =>
                      handleInputChange("address3", e.target.value)
                    }
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 disabled:bg-gray-50 disabled:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.primaryLocation3}
                      onChange={(e) =>
                        handleInputChange("primaryLocation3", e.target.checked)
                      }
                      disabled={!isEditing}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                    />
                    <span className="text-sm text-gray-700">
                      Use as a primary location
                    </span>
                  </label>
                </div>
              </div>

              {isEditing && (
                <div className="px-6 lg:px-8 py-6 border-t border-gray-200 flex justify-end space-x-4">
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
