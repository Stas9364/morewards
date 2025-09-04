import { FacilitiesForm } from "./FacilitiesForm";
import { LocationSelector } from "./LocationSelector";
import { OperationalInfoForm } from "./OperationalInfoForm";

// @component: LocationDashboard
export const LocationDashboard = () => {
  // @return
  return (
    <div className="flex h-screen bg-gray-50">
      <main className="flex-1 ">
        <div className="md:p-6 space-y-6">
          <LocationSelector />
          <OperationalInfoForm />
          <FacilitiesForm />
        </div>
      </main>
    </div>
  );
};
