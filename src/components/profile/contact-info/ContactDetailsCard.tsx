import { Edit2 } from "lucide-react";
export interface ContactData {
  firstName: string;
  middleInitial: string;
  lastName: string;
  businessEmail: string;
  reenterEmail: string;
  mainPhone: string;
  fax: string;
}
interface ContactDetailsCardProps {
  contactData: ContactData;
  isEditing: boolean;
  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
  onInputChange: (field: keyof ContactData, value: string) => void;
}

// @component: ContactDetailsCard
export const ContactDetailsCard = ({
  contactData,
  isEditing,
  onEdit,
  onSave,
  onCancel,
  onInputChange,
}: ContactDetailsCardProps) => {
  // @return
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6  ">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          <span>Contact Details</span>
        </h2>
        {!isEditing && (
          <button
            onClick={onEdit}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          >
            <Edit2 size={18} />
            <span>Edit</span>
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>First Name</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={contactData.firstName}
                onChange={(e) => onInputChange("firstName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">{contactData.firstName}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>MI</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={contactData.middleInitial}
                onChange={(e) => onInputChange("middleInitial", e.target.value)}
                maxLength={1}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">
                  {contactData.middleInitial}
                </span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>Last Name</span>
            </label>
            {isEditing ? (
              <input
                type="text"
                value={contactData.lastName}
                onChange={(e) => onInputChange("lastName", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">{contactData.lastName}</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span>Business Email</span>
          </label>
          {isEditing ? (
            <input
              type="email"
              value={contactData.businessEmail}
              onChange={(e) => onInputChange("businessEmail", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-gray-900">{contactData.businessEmail}</span>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span>Re-enter Email</span>
          </label>
          {isEditing ? (
            <input
              type="email"
              value={contactData.reenterEmail}
              onChange={(e) => onInputChange("reenterEmail", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          ) : (
            <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-gray-900">{contactData.reenterEmail}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>Main phone</span>
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={contactData.mainPhone}
                onChange={(e) => onInputChange("mainPhone", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">{contactData.mainPhone}</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span>Fax</span>
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={contactData.fax}
                onChange={(e) => onInputChange("fax", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            ) : (
              <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-gray-900">{contactData.fax}</span>
              </div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
            <button
              onClick={onCancel}
              className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200"
            >
              <span>Cancel</span>
            </button>
            <button
              onClick={onSave}
              className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
            >
              <span>Save</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
