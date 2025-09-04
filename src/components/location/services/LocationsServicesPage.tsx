import { useState } from "react";
import { ServicesForm } from "./ServicesForm";
import { ChevronDown } from "lucide-react";

const locationOptions = [
  {
    id: "thursday14",
    label: "Thursday14",
  },
  {
    id: "friday15",
    label: "Friday15",
  },
  {
    id: "saturday16",
    label: "Saturday16",
  },
];

// @component: LocationsServicesPage
export const LocationsServicesPage = () => {
  const [selectedLocation, setSelectedLocation] = useState("thursday14");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  const handleSave = () => {
    setIsEditing(false);
    console.log("Form saved");
  };

  // @return
  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 flex flex-col md:p-6 space-y-6">
        {/* Location Selector */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">
              <span>Locations</span>
            </h3>
            <div className="relative max-w-xs">
              <button
                onClick={() =>
                  setIsLocationDropdownOpen(!isLocationDropdownOpen)
                }
                className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span className="text-gray-900">
                  {
                    locationOptions.find((opt) => opt.id === selectedLocation)
                      ?.label
                  }
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
              {isLocationDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {locationOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedLocation(option.id);
                        setIsLocationDropdownOpen(false);
                      }}
                      className="block w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h1 className="text-xl font-semibold text-gray-900">
                  Services
                </h1>
                {!isEditing && (
                  <button
                    onClick={handleEdit}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Edit</span>
                  </button>
                )}
              </div>

              <div className="p-6">
                <ServicesForm
                  isEditing={isEditing}
                  onCancel={handleCancel}
                  onSave={handleSave}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
