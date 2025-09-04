import React from 'react';
import { Edit } from 'lucide-react';
const facilitiesData = {
  parkingInfo: '',
  accessibilityFeatures: '',
  paymentMethodsAccepted: '',
  wifiAvailable: false,
  outdoorSeating: false,
  petFriendly: false
};

// @component: FacilitiesForm
export const FacilitiesForm = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState(facilitiesData);
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleCancel = () => {
    setFormData(facilitiesData);
    setIsEditing(false);
  };
  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  // @return
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          <span>Facilities</span>
        </h2>
        <button onClick={() => setIsEditing(true)} className="flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors">
          <Edit className="w-4 h-4 mr-1" />
          <span>Edit</span>
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parking-info" className="block text-sm font-medium text-gray-700 mb-2">
              <span>Parking Info</span>
            </label>
            <input id="parking-info" type="text" value={formData.parkingInfo} onChange={e => setFormData(prev => ({
            ...prev,
            parkingInfo: e.target.value
          }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="accessibility-features" className="block text-sm font-medium text-gray-700 mb-2">
              <span>Accessibility Features</span>
            </label>
            <input id="accessibility-features" type="text" value={formData.accessibilityFeatures} onChange={e => setFormData(prev => ({
            ...prev,
            accessibilityFeatures: e.target.value
          }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
        </div>

        <div>
          <label htmlFor="payment-methods" className="block text-sm font-medium text-gray-700 mb-2">
            <span>Payment Methods Accepted</span>
          </label>
          <input id="payment-methods" type="text" value={formData.paymentMethodsAccepted} onChange={e => setFormData(prev => ({
          ...prev,
          paymentMethodsAccepted: e.target.value
        }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.wifiAvailable} onChange={e => handleCheckboxChange('wifiAvailable', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Wi-Fi Available</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.outdoorSeating} onChange={e => handleCheckboxChange('outdoorSeating', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Outdoor Seating</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.petFriendly} onChange={e => handleCheckboxChange('petFriendly', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Pet Friendly</span>
          </label>
        </div>

        {isEditing && <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button onClick={handleCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors">
              <span>Cancel</span>
            </button>
            <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-colors">
              <span>Save</span>
            </button>
          </div>}
      </div>
    </div>;
};