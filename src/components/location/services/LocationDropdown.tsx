import { ChevronDown } from "lucide-react";
import { useState } from "react";
interface LocationDropdownProps {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}
const locations = [
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
  {
    id: "sunday17",
    label: "Sunday17",
  },
];

// @component: LocationDropdown
export const LocationDropdown = ({
  selectedLocation,
  onLocationChange,
}: LocationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLocationSelect = (location: string) => {
    onLocationChange(location);
    setIsOpen(false);
  };

  // @return
  return (
    <div className="relative">
      <div className="mb-2">
        <span className="text-sm font-medium text-gray-700">Locations</span>
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full max-w-xs flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        >
          <span className="text-gray-900 font-medium">{selectedLocation}</span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <div className="py-1">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationSelect(location.label)}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                    selectedLocation === location.label
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-900"
                  }`}
                >
                  {location.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-0" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
};
