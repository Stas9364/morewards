import { Menu } from "lucide-react";
interface HeaderBarProps {
  onMenuClick?: () => void;
  isMobile?: boolean;
}

// @component: HeaderBar
export const HeaderBar = ({
  onMenuClick,
  isMobile = false,
}: HeaderBarProps) => {
  // @return
  return (
    <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isMobile && (
            <button
              onClick={onMenuClick}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Vendor Name:
              </span>
              <span className="text-sm text-gray-900">
                Lemaster Pizza Galaxy
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">EIN:</span>
              <span className="text-sm text-gray-900">123456789</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">
                Account Number/Vendor ID:
              </span>
              <span className="text-sm text-gray-900">232</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
