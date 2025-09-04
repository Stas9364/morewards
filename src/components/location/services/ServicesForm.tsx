import { ChevronDown } from "lucide-react";
import { useState } from "react";
interface ServicesFormProps {
  isEditing: boolean;
  onCancel: () => void;
  onSave: () => void;
}
const priceRanges = [
  {
    id: "budget",
    label: "$",
    value: "$",
  },
  {
    id: "moderate",
    label: "$$",
    value: "$$",
  },
  {
    id: "expensive",
    label: "$$$",
    value: "$$$",
  },
  {
    id: "luxury",
    label: "$$$$",
    value: "$$$$",
  },
];

// @component: ServicesForm
export const ServicesForm = ({
  isEditing,
  onCancel,
  onSave,
}: ServicesFormProps) => {
  const [formData, setFormData] = useState({
    description: "",
    servicesOffered: "",
    specialities: "",
    servicesCategories: "",
    keywords: "",
    priceRange: "$",
    searchTags: "",
  });
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handlePriceRangeSelect = (value: string) => {
    handleInputChange("priceRange", value);
    setIsPriceDropdownOpen(false);
  };
  const handleCancel = () => {
    setFormData({
      description: "",
      servicesOffered: "",
      specialities: "",
      servicesCategories: "",
      keywords: "",
      priceRange: "$",
      searchTags: "",
    });
    onCancel();
  };

  // @return
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
          disabled={!isEditing}
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg resize-none transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter description..." : ""}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Offered
        </label>
        <input
          type="text"
          value={formData.servicesOffered}
          onChange={(e) => handleInputChange("servicesOffered", e.target.value)}
          disabled={!isEditing}
          className={`w-full px-3 py-2 border rounded-lg transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter services offered..." : ""}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specialities
        </label>
        <input
          type="text"
          value={formData.specialities}
          onChange={(e) => handleInputChange("specialities", e.target.value)}
          disabled={!isEditing}
          className={`w-full px-3 py-2 border rounded-lg transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter specialities..." : ""}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Services Categories
        </label>
        <input
          type="text"
          value={formData.servicesCategories}
          onChange={(e) =>
            handleInputChange("servicesCategories", e.target.value)
          }
          disabled={!isEditing}
          className={`w-full px-3 py-2 border rounded-lg transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter services categories..." : ""}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Keywords
        </label>
        <input
          type="text"
          value={formData.keywords}
          onChange={(e) => handleInputChange("keywords", e.target.value)}
          disabled={!isEditing}
          className={`w-full px-3 py-2 border rounded-lg transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter keywords..." : ""}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="relative">
          <button
            onClick={() =>
              isEditing && setIsPriceDropdownOpen(!isPriceDropdownOpen)
            }
            disabled={!isEditing}
            className={`w-full flex items-center justify-between px-3 py-2 border rounded-lg transition-colors ${
              isEditing
                ? "border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                : "border-gray-200 bg-gray-50 text-gray-600 cursor-not-allowed"
            } focus:outline-none`}
          >
            <span>{formData.priceRange}</span>
            {isEditing && (
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  isPriceDropdownOpen ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {isPriceDropdownOpen && isEditing && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="py-1">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => handlePriceRangeSelect(range.value)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      formData.priceRange === range.value
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-900"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Tags
        </label>
        <input
          type="text"
          value={formData.searchTags}
          onChange={(e) => handleInputChange("searchTags", e.target.value)}
          disabled={!isEditing}
          className={`w-full px-3 py-2 border rounded-lg transition-colors ${
            isEditing
              ? "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              : "border-gray-200 bg-gray-50 text-gray-600"
          } focus:outline-none`}
          placeholder={isEditing ? "Enter search tags..." : ""}
        />
      </div>

      {isEditing && (
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-colors"
          >
            Save
          </button>
        </div>
      )}

      {isPriceDropdownOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setIsPriceDropdownOpen(false)}
        />
      )}
    </div>
  );
};
