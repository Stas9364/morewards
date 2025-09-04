import UsersSection from "./UsersSection";
import VendorInfoCard from "./VendorInfoCard";
export interface MainContentAreaProps {
  className?: string;
}
export default function MainContentArea({ className }: MainContentAreaProps) {
  return (
    <div className={`flex-1 flex flex-col min-h-0 lg:ml-0 ${className || ""}`}>
      <main className="flex-1  md:p-6">
        <div className="space-y-6">
          <VendorInfoCard />
          <UsersSection />
        </div>
      </main>
    </div>
  );
}
