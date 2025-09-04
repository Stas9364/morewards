import React from 'react';
import { ChevronDown } from 'lucide-react';
const locations = [{
  id: 'thursday14',
  name: 'Thursday14'
}, {
  id: 'friday15',
  name: 'Friday15'
}, {
  id: 'saturday16',
  name: 'Saturday16'
}] as any[];

// @component: LocationSelector
export const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = React.useState('thursday14');

  // @return
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <label htmlFor="location-select" className="block text-sm font-medium text-gray-700 mb-2">
          <span>Locations</span>
        </label>
        <div className="relative">
          <select id="location-select" value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full px-4 py-3 pr-10 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none text-gray-900">
            {locations.map(location => <option key={location.id} value={location.id}>
                {location.name}
              </option>)}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>;
};