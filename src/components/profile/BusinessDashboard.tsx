import { Clock, Edit, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { BusinessDetailsCard } from "./BusinessDetailsCard";
import { BusinessLocationDefaultsCard } from "./BusinessLocationDefaultsCard";

const initialHours = {
  Sunday: {
    isOpen: false,
    start: "",
    end: "",
  },
  Monday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
  Tuesday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
  Wednesday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
  Thursday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
  Friday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
  Saturday: {
    isOpen: true,
    start: "9:00 am",
    end: "5:00 pm",
  },
};
const socialMediaData = [
  {
    name: "Facebook",
    value: "",
    icon: Facebook,
  },
  {
    name: "Instagram",
    value: "",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    value: "",
    icon: Linkedin,
  },
];

// @component: BusinessDashboard
export const BusinessDashboard = () => {
  const [isEditingHours, setIsEditingHours] = useState(false);
  const [isEditingSocial, setIsEditingSocial] = useState(false);
  const [hours, setHours] = useState(initialHours);
  const [socialMedia, setSocialMedia] = useState(socialMediaData);
  const handleHoursEdit = () => {
    setIsEditingHours(!isEditingHours);
  };
  const handleSocialEdit = () => {
    setIsEditingSocial(!isEditingSocial);
  };
  const handleHoursChange = (
    day: string,
    field: string,
    value: string | boolean
  ) => {
    setHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };
  const handleSocialChange = (index: number, value: string) => {
    setSocialMedia((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              value,
            }
          : item
      )
    );
  };

  // @return
  return (
    <main className="flex-1 overflow-y-auto md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Business Details - Full Width */}
        <BusinessDetailsCard />

        {/* Three columns layout for remaining cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BusinessLocationDefaultsCard />

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Social Media Links
              </h2>
              <button
                onClick={handleSocialEdit}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {socialMedia.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div
                    key={social.name}
                    className="flex items-center space-x-3"
                  >
                    <IconComponent className="w-5 h-5 text-gray-600" />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-700">
                        {social.name}
                      </span>
                      {isEditingSocial ? (
                        <input
                          type="url"
                          value={social.value}
                          onChange={(e) =>
                            handleSocialChange(index, e.target.value)
                          }
                          placeholder={`Enter ${social.name} URL`}
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      ) : (
                        <p className="text-sm text-gray-500 mt-1">
                          {social.value || "Not set"}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {isEditingSocial && (
              <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsEditingSocial(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsEditingSocial(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-gray-600" />
                Hours of Operations
              </h2>
              <button
                onClick={handleHoursEdit}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Edit className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {Object.entries(hours).map(([day, schedule]) => (
                <div
                  key={day}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium text-gray-700 text-sm">
                    {day}
                  </span>
                  {isEditingHours ? (
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={schedule.isOpen}
                        onChange={(e) =>
                          handleHoursChange(day, "isOpen", e.target.checked)
                        }
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      {schedule.isOpen ? (
                        <div className="flex items-center space-x-1">
                          <input
                            type="time"
                            value={schedule.start
                              .replace(" am", "")
                              .replace(" pm", "")}
                            onChange={(e) =>
                              handleHoursChange(day, "start", e.target.value)
                            }
                            className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-20"
                          />
                          <span className="text-xs text-gray-500">-</span>
                          <input
                            type="time"
                            value={schedule.end
                              .replace(" am", "")
                              .replace(" pm", "")}
                            onChange={(e) =>
                              handleHoursChange(day, "end", e.target.value)
                            }
                            className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 w-20"
                          />
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">Closed</span>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-gray-600">
                      {schedule.isOpen
                        ? `${schedule.start} - ${schedule.end}`
                        : "Closed"}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {isEditingHours && (
              <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setIsEditingHours(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsEditingHours(false)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
