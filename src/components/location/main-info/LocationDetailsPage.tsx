import { Calendar, ChevronDown, Edit } from "lucide-react";
import { useState } from "react";
export interface LocationDetailsPageProps {
  className?: string;
}
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

const locationTypeOptions = [
  {
    id: "branch",
    label: "branch",
  },
  {
    id: "headquarters",
    label: "headquarters",
  },
  {
    id: "warehouse",
    label: "warehouse",
  },
];

export default function LocationDetailsPage({
  className = "",
}: LocationDetailsPageProps) {
  const [selectedLocation, setSelectedLocation] = useState("thursday14");
  const [locationType, setLocationType] = useState("branch");
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);

  // Edit mode states for each section
  const [isMainInfoEditing, setIsMainInfoEditing] = useState(false);
  const [isContactDetailsEditing, setIsContactDetailsEditing] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    locationName: "Main Location",
    streetAddress1: "123 Main Street",
    streetAddress2: "Suite 100",
    streetAddress3: "",
    city: "Troy",
    state: "South Carolina",
    zipCode: "29848",
    createdDate: "01/15/2024",
    phoneNumber: "(555) 123-4567",
    phoneCountryCode: "+1",
    secondaryPhone: "(555) 987-6543",
    faxNumber: "(555) 123-4568",
    email: "contact@mainlocation.com",
    websiteUrl: "https://www.mainlocation.com",
    socialMediaUrl: "https://www.facebook.com/mainlocation",
  });

  // Backup data for cancel functionality
  const [backupData, setBackupData] = useState(formData);
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleMainInfoEdit = () => {
    setBackupData(formData);
    setIsMainInfoEditing(true);
  };
  const handleContactDetailsEdit = () => {
    setBackupData(formData);
    setIsContactDetailsEditing(true);
  };
  const handleSave = (section: "mainInfo" | "contactDetails") => {
    console.log("Saving form data:", formData);
    if (section === "mainInfo") {
      setIsMainInfoEditing(false);
    } else {
      setIsContactDetailsEditing(false);
    }
    // Update backup data with saved changes
    setBackupData(formData);
  };
  const handleCancel = (section: "mainInfo" | "contactDetails") => {
    console.log("Cancelling changes");
    // Restore data from backup
    setFormData(backupData);
    if (section === "mainInfo") {
      setIsMainInfoEditing(false);
    } else {
      setIsContactDetailsEditing(false);
    }
  };
  return (
    <div className={`min-h-screen bg-gray-50 flex ${className}`}>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Main content area */}
        <main className="flex-1  md:p-6 space-y-6">
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

          {/* Main Info Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                <span>Main Info</span>
              </h3>
              {!isMainInfoEditing && (
                <button
                  onClick={handleMainInfoEdit}
                  className="inline-flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  <span>Edit</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Location Name</span>
                </label>
                <input
                  type="text"
                  value={formData.locationName}
                  onChange={(e) =>
                    handleInputChange("locationName", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter location name"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Location Type</span>
                </label>
                <div className="relative">
                  <button
                    onClick={() =>
                      isMainInfoEditing &&
                      setIsTypeDropdownOpen(!isTypeDropdownOpen)
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!isMainInfoEditing}
                  >
                    <span className="text-gray-900">
                      {
                        locationTypeOptions.find(
                          (opt) => opt.id === locationType
                        )?.label
                      }
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  {isTypeDropdownOpen && isMainInfoEditing && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      {locationTypeOptions.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setLocationType(option.id);
                            setIsTypeDropdownOpen(false);
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

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Street Address 1</span>
                </label>
                <input
                  type="text"
                  value={formData.streetAddress1}
                  onChange={(e) =>
                    handleInputChange("streetAddress1", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter street address"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Street Address 2</span>
                </label>
                <input
                  type="text"
                  value={formData.streetAddress2}
                  onChange={(e) =>
                    handleInputChange("streetAddress2", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Apt, suite, etc. (optional)"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Street Address 3</span>
                </label>
                <input
                  type="text"
                  value={formData.streetAddress3}
                  onChange={(e) =>
                    handleInputChange("streetAddress3", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Additional address line (optional)"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>City</span>
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter city"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>State</span>
                </label>
                <input
                  type="text"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter state"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>ZIP Code</span>
                </label>
                <input
                  type="text"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                  }`}
                  placeholder="Enter ZIP code"
                  readOnly={!isMainInfoEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Created Date</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.createdDate}
                    onChange={(e) =>
                      handleInputChange("createdDate", e.target.value)
                    }
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                      !isMainInfoEditing ? "bg-gray-50 cursor-not-allowed" : ""
                    }`}
                    placeholder="mm/dd/yyyy"
                    readOnly={!isMainInfoEditing}
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {isMainInfoEditing && (
              <div className="flex justify-end space-x-3 mt-8">
                <button
                  onClick={() => handleCancel("mainInfo")}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <span>Cancel</span>
                </button>
                <button
                  onClick={() => handleSave("mainInfo")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>Save</span>
                </button>
              </div>
            )}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <span>Map</span>
            </h3>
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                <span>Contact Details</span>
              </h3>
              {!isContactDetailsEditing && (
                <button
                  onClick={handleContactDetailsEdit}
                  className="inline-flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  <span>Edit</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter phone number"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Phone Country Code</span>
                </label>
                <input
                  type="text"
                  value={formData.phoneCountryCode}
                  onChange={(e) =>
                    handleInputChange("phoneCountryCode", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="e.g., +1"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Secondary Phone</span>
                </label>
                <input
                  type="tel"
                  value={formData.secondaryPhone}
                  onChange={(e) =>
                    handleInputChange("secondaryPhone", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter secondary phone"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Fax Number</span>
                </label>
                <input
                  type="tel"
                  value={formData.faxNumber}
                  onChange={(e) =>
                    handleInputChange("faxNumber", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter fax number"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter email address"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Website URL</span>
                </label>
                <input
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) =>
                    handleInputChange("websiteUrl", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter website URL"
                  readOnly={!isContactDetailsEditing}
                />
              </div>

              <div className="space-y-2 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span>Social Media Profiles URL</span>
                </label>
                <input
                  type="url"
                  value={formData.socialMediaUrl}
                  onChange={(e) =>
                    handleInputChange("socialMediaUrl", e.target.value)
                  }
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    !isContactDetailsEditing
                      ? "bg-gray-50 cursor-not-allowed"
                      : ""
                  }`}
                  placeholder="Enter social media URL"
                  readOnly={!isContactDetailsEditing}
                />
              </div>
            </div>

            {isContactDetailsEditing && (
              <div className="flex justify-end space-x-3 mt-8">
                <button
                  onClick={() => handleCancel("contactDetails")}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <span>Cancel</span>
                </button>
                <button
                  onClick={() => handleSave("contactDetails")}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span>Save</span>
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
