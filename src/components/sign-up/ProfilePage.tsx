import { Header } from './Header';
import { SidebarNavigation } from '../sidebar/SidebarNavigation';
import { Edit } from 'lucide-react';
interface UserData {
  vendorName: string;
  ein: string;
  email: string;
  legalName: string;
  phone: string;
  url: string;
  businessType: string;
  businessCategory: string;
}
interface ProfilePageProps {
  userData: UserData | null;
  onNavigateToRegistration: () => void;
}

// @component: ProfilePage
export const ProfilePage = ({
  userData,
}: ProfilePageProps) => {
  const defaultUserData = {
    vendorName: 'Lemaster Pizza Galaxy',
    ein: '123456789',
    email: 'contact@pizzagalaxy.com',
    legalName: 'Lemaster Pizza Galaxy LLC',
    phone: '(555) 123-4567',
    url: 'https://pizzagalaxy.com',
    businessType: 'Single Location',
    businessCategory: 'Restaurant'
  };
  const displayData = userData || defaultUserData;

  // @return
  return <div className="min-h-screen bg-gray-50">
      <Header type="profile" vendorName={displayData.vendorName} ein={displayData.ein} accountNumber="232" />
      
      <div className="flex">
        <SidebarNavigation />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  <span>Business Details</span>
                </h2>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                  <Edit size={20} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      <span>Address</span>
                    </h3>
                    <p className="text-gray-600">
                      <span>2012 N Sorrento Hils Rd St.Augustine, FL 32092-1234 USA</span>
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Locations: </span>
                      <span className="text-gray-600">2</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Location Users: </span>
                      <span className="text-gray-600">15</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">POS Device(s): </span>
                      <span className="text-gray-600">6</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      <span>Description</span>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    <span>Image</span>
                  </h3>
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Restaurant interior showing warm lighting and dining area" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    <span>Business Location Defaults</span>
                  </h2>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <Edit size={18} />
                  </button>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    <span>Default Website URL</span>
                  </h3>
                  <p className="text-blue-600 text-sm">
                    <span>https://pizzagalaxy.com</span>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    <span>Social Media Links</span>
                  </h2>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <Edit size={18} />
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Facebook</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Instagram</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">LinkedIn</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    <span>Hours of Operations</span>
                  </h2>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md">
                    <Edit size={18} />
                  </button>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Monday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Tuesday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Wednesday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Thursday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Friday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">9:00 am - 5:00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>;
};