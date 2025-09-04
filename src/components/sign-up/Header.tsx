interface HeaderProps {
  type?: "registration" | "profile";
  vendorName?: string;
  ein?: string;
  accountNumber?: string;
}

// @component: Header
export const Header = ({
  type,
  vendorName,
  ein,
  accountNumber,
}: HeaderProps) => {
  // @return
  return (
    <header className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white">
      {type === "registration" ? (
        <div className="px-4 py-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg px-3 py-1">
                <span className="text-gray-800 font-bold text-lg">
                  MORewards
                </span>
              </div>
            </div>

            <h1 className="text-2xl font-semibold">
              <span>Vendor Portal</span>
            </h1>

            <div className="w-32"></div>
          </div>
        </div>
      ) : (
        <div className="px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-lg px-3 py-1">
                <span className="text-gray-800 font-bold text-lg">
                  MORewards
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">Vendor Name:</span>
                <span>{vendorName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">EIN:</span>
                <span>{ein}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Account Number/Vendor ID:</span>
                <span>{accountNumber}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
