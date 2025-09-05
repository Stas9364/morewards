import {
  BarChart3,
  Home,
  LogOut,
  MapPin,
  Monitor,
  User,
  Users,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
const navigationItems = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    slug: "",
  },
  {
    id: "profile",
    label: "Profile",
    icon: User,
    active: true,
    slug: "",
    subItems: [
      {
        id: "profile",
        label: "General Information",
        active: true,
        slug: "profile",
      },
      {
        id: "contact-info",
        label: "Contact Info",
        active: false,
        slug: "profile/contact-info",
      },
      {
        id: "corporate-info",
        label: "Corporate Info",
        active: false,
        slug: "profile/corporate-info",
      },
    ],
  },
  {
    id: "locations",
    label: "Locations",
    icon: MapPin,
    active: false,
    slug: "locations",
    subItems: [
      {
        id: "main-info",
        label: "Main Info",
        active: true,
        slug: "locations/main-info",
      },
      {
        id: "services",
        label: "Services",
        active: false,
        slug: "locations/services",
      },
      {
        id: "operational-info",
        label: "Operational Info",
        active: false,
        slug: "locations/operational-info",
      },
      {
        id: "location-photos",
        label: "Location Photos",
        active: false,
        slug: "locations/photos",
      },
    ],
  },
  {
    id: "users",
    label: "Users",
    icon: Users,
    active: false,
    slug: "users",
  },
  {
    id: "pos",
    label: "POS Devices",
    icon: Monitor,
    active: false,
    slug: "",
  },
  {
    id: "insights",
    label: "Insights",
    icon: BarChart3,
    active: false,
    slug: "",
  },
];
interface SidebarNavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

// @component: SidebarNavigation
export const SidebarNavigation = ({
  isOpen = true,
  onClose,
  isMobile = false,
}: SidebarNavigationProps) => {
  // @return
  return (
    <div
      className={`
      ${
        isMobile
          ? `fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`
          : "w-64"
      } 
      bg-gradient-to-b from-cyan-400 to-blue-600 text-white flex flex-col
    `}
    >
      <div className="p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">MORewards</h1>
        {isMobile && (
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                {item.slug ? (
                  <NavLink
                    to={item.slug}
                    end
                    className={({ isActive }) =>
                      `w-full flex items-center justify-between px-4 py-2 rounded-lg text-left transition-all duration-200 ${
                        isActive
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`
                    }
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </NavLink>
                ) : (
                  <div
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-left transition-all duration-200 text-white/80`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </div>
                )}

                {item.subItems && (
                  <ul className="ml-8 space-y-1 flex flex-col ">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <NavLink
                          to={subItem.slug}
                          end
                          className={({ isActive }) =>
                            `w-full block text-left px-4 py-2 rounded-md text-sm transition-colors duration-200 ${
                              isActive
                                ? "bg-white/20 text-white border-l-4 border-white"
                                : "text-white/70 hover:bg-white/10 hover:text-white"
                            }`
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/20">
        <button className="w-full flex items-center space-x-3 px-4 py-1 text-white/80 hover:bg-white/10 hover:text-white rounded-lg transition-colors duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};
