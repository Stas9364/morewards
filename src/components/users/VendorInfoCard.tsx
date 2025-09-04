export interface VendorInfoCardProps {
  className?: string;
}
export default function VendorInfoCard({ className }: VendorInfoCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 ${
        className || ""
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-3">
          <label
            htmlFor="vendor-name"
            className="block text-sm font-semibold text-gray-700 tracking-wide"
          >
            <span>Vendor Name</span>
          </label>
          <input
            id="vendor-name"
            type="text"
            value={"Thursday14"}
            readOnly
            className="w-full cursor-not-allowed px-4 py-3 border border-gray-200 rounded-xl   transition-all duration-200 bg-gray-5"
            placeholder="Enter vendor name"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="vendor-id"
            className="block text-sm font-semibold text-gray-700 tracking-wide"
          >
            <span>Vendor ID</span>
          </label>
          <input
            id="vendor-id"
            type="text"
            value={"127"}
            readOnly
            className="w-full cursor-not-allowed px-4 py-3 border border-gray-200 rounded-xl transition-all duration-200 bg-gray-50 "
            placeholder="Enter vendor ID"
          />
        </div>
      </div>
    </div>
  );
}
