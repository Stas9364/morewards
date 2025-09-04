import MainContentArea from "./MainContentArea";
export interface DashboardLayoutProps {
  className?: string;
}
export default function DashboardLayout({ className }: DashboardLayoutProps) {
  return (
    <div className={`flex h-screen w-full bg-gray-50 ${className || ""}`}>
      <MainContentArea />
    </div>
  );
}
