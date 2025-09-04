import { useState } from "react";
import { Edit, Globe } from "lucide-react";

// @component: BusinessLocationDefaultsCard
export const BusinessLocationDefaultsCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("https://pizzagalaxy.com");
  const [tempUrl, setTempUrl] = useState("https://pizzagalaxy.com");
  const handleEdit = () => {
    setTempUrl(websiteUrl);
    setIsEditing(true);
  };
  const handleSave = () => {
    setWebsiteUrl(tempUrl);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setTempUrl(websiteUrl);
    setIsEditing(false);
  };

  // @return
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Business Location Defaults
        </h2>
        <button
          onClick={handleEdit}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Edit className="w-4 h-4" />
        </button>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Globe className="w-4 h-4 inline mr-1" />
          Default Website URL
        </label>
        {isEditing ? (
          <input
            type="url"
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
            placeholder="Enter website URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        ) : (
          <p className="text-sm text-gray-600">{websiteUrl}</p>
        )}
      </div>

      {isEditing && (
        <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};
