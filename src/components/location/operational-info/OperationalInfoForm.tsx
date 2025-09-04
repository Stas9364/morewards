import React from 'react';
import { Edit, Clock } from 'lucide-react';
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const operationalData = {
  hours: {
    Monday: {
      open: '09:00',
      close: '17:00'
    },
    Tuesday: {
      open: '09:00',
      close: '17:00'
    },
    Wednesday: {
      open: '09:00',
      close: '17:00'
    },
    Thursday: {
      open: '09:00',
      close: '17:00'
    },
    Friday: {
      open: '09:00',
      close: '17:00'
    },
    Saturday: {
      open: '10:00',
      close: '16:00'
    },
    Sunday: {
      open: '10:00',
      close: '16:00'
    }
  },
  timezone: '',
  onlineBookingUrl: '',
  deliveryRadius: '',
  serviceAreaDescription: '',
  appointmentRequired: false,
  onlineBookingAvailable: false,
  walkInsAccepted: false,
  deliveryAvailable: false
};

// @component: OperationalInfoForm
export const OperationalInfoForm = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState(operationalData);
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleCancel = () => {
    setFormData(operationalData);
    setIsEditing(false);
  };
  const handleHoursChange = (day: string, field: 'open' | 'close', value: string) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: {
          ...prev.hours[day as keyof typeof prev.hours],
          [field]: value
        }
      }
    }));
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
          <span>Operational Info</span>
        </h2>
        <button onClick={() => setIsEditing(true)} className="flex items-center px-3 py-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors">
          <Edit className="w-4 h-4 mr-1" />
          <span>Edit</span>
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-4">
            <span>Hours of Operation</span>
          </h3>
          <div className="space-y-3">
            {daysOfWeek.map(day => <div key={day} className="flex items-center space-x-4">
                <div className="w-20 text-sm text-gray-600">
                  <span>{day}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <input type="time" value={formData.hours[day as keyof typeof formData.hours].open} onChange={e => handleHoursChange(day, 'open', e.target.value)} disabled={!isEditing} className="px-3 py-2 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                    <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                  <span className="text-gray-500">-</span>
                  <div className="relative">
                    <input type="time" value={formData.hours[day as keyof typeof formData.hours].close} onChange={e => handleHoursChange(day, 'close', e.target.value)} disabled={!isEditing} className="px-3 py-2 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
                    <Clock className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
              <span>Timezone</span>
            </label>
            <input id="timezone" type="text" value={formData.timezone} onChange={e => setFormData(prev => ({
            ...prev,
            timezone: e.target.value
          }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="booking-url" className="block text-sm font-medium text-gray-700 mb-2">
              <span>Online Booking URL</span>
            </label>
            <input id="booking-url" type="url" value={formData.onlineBookingUrl} onChange={e => setFormData(prev => ({
            ...prev,
            onlineBookingUrl: e.target.value
          }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
        </div>

        <div>
          <label htmlFor="delivery-radius" className="block text-sm font-medium text-gray-700 mb-2">
            <span>Delivery Radius</span>
          </label>
          <input id="delivery-radius" type="text" value={formData.deliveryRadius} onChange={e => setFormData(prev => ({
          ...prev,
          deliveryRadius: e.target.value
        }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
        </div>

        <div>
          <label htmlFor="service-area" className="block text-sm font-medium text-gray-700 mb-2">
            <span>Service Area Description</span>
          </label>
          <textarea id="service-area" rows={4} value={formData.serviceAreaDescription} onChange={e => setFormData(prev => ({
          ...prev,
          serviceAreaDescription: e.target.value
        }))} disabled={!isEditing} className="w-full px-3 py-2 border border-gray-300 rounded-md disabled:bg-gray-50 disabled:text-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.appointmentRequired} onChange={e => handleCheckboxChange('appointmentRequired', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Appointment Required</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.walkInsAccepted} onChange={e => handleCheckboxChange('walkInsAccepted', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Walk-ins Accepted</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.onlineBookingAvailable} onChange={e => handleCheckboxChange('onlineBookingAvailable', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Online Booking Available</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" checked={formData.deliveryAvailable} onChange={e => handleCheckboxChange('deliveryAvailable', e.target.checked)} disabled={!isEditing} className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 disabled:opacity-50" />
            <span className="text-sm text-gray-700">Delivery Available</span>
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