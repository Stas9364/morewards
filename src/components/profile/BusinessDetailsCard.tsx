import React, { useState } from 'react';
import { Edit, MapPin, Building, Users, Monitor } from 'lucide-react';
interface BusinessDetails {
  address: string;
  locations: number;
  locationUsers: number;
  posDevices: number;
  description: string;
}
const initialBusinessDetails: BusinessDetails = {
  address: '2012 N Sorrento Hils Rd St.Augustine, FL 32092-1234 USA',
  locations: 2,
  locationUsers: 15,
  posDevices: 6,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};

// @component: BusinessDetailsCard
export const BusinessDetailsCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState<BusinessDetails>(initialBusinessDetails);
  const [tempDetails, setTempDetails] = useState<BusinessDetails>(initialBusinessDetails);
  const handleEdit = () => {
    setTempDetails(details);
    setIsEditing(true);
  };
  const handleSave = () => {
    setDetails(tempDetails);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setTempDetails(details);
    setIsEditing(false);
  };
  const handleInputChange = (field: keyof BusinessDetails, value: string | number) => {
    setTempDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // @return
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Business Details</h2>
        <button onClick={handleEdit} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <Edit className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Address
            </label>
            {isEditing ? <textarea value={tempDetails.address} onChange={e => handleInputChange('address', e.target.value)} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /> : <p className="text-sm text-gray-600">{details.address}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Building className="w-4 h-4 inline mr-1" />
                Locations
              </label>
              {isEditing ? <input type="number" value={tempDetails.locations} onChange={e => handleInputChange('locations', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /> : <p className="text-sm text-gray-600">{details.locations}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Users className="w-4 h-4 inline mr-1" />
                Location Users
              </label>
              {isEditing ? <input type="number" value={tempDetails.locationUsers} onChange={e => handleInputChange('locationUsers', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /> : <p className="text-sm text-gray-600">{details.locationUsers}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Monitor className="w-4 h-4 inline mr-1" />
                POS Device(s)
              </label>
              {isEditing ? <input type="number" value={tempDetails.posDevices} onChange={e => handleInputChange('posDevices', parseInt(e.target.value) || 0)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /> : <p className="text-sm text-gray-600">{details.posDevices}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            {isEditing ? <textarea value={tempDetails.description} onChange={e => handleInputChange('description', e.target.value)} rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" /> : <p className="text-sm text-gray-600 leading-relaxed">{details.description}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Restaurant interior with warm lighting and wooden furnishings" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {isEditing && <div className="flex justify-end space-x-3 mt-6 pt-4 border-t border-gray-200">
          <button onClick={handleCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Cancel
          </button>
          <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Save
          </button>
        </div>}
    </div>;
};