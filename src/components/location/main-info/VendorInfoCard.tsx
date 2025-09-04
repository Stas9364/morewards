// @component: VendorInfoCard
export const VendorInfoCard = () => {
  // @return
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <span>Vendor Name</span>
          </label>
          <input
            type="text"
            value="Thursday14"
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <span>Vendor ID</span>
          </label>
          <input
            type="text"
            value="127"
            readOnly
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 cursor-not-allowed focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
