import { useState } from "react";
import { ProfilePage } from "./ProfilePage";
import { RegistrationPage } from "./RegistrationPage";
import { useNavigate } from "react-router-dom";
type Page = "registration" | "profile";
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

// @component: VendorPortalApp
export const VendorPortalApp = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<Page>("registration");
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleRegistrationSubmit = (data: UserData) => {
    setUserData(data);
    // setCurrentPage("profile");

    navigate("/profile", { replace: true });
  };
  const handleNavigateToProfile = () => {
    // setCurrentPage("profile");
  };
  const handleNavigateToRegistration = () => {
    setCurrentPage("registration");
  };

  // @return
  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === "registration" && (
        <RegistrationPage
          onSubmit={handleRegistrationSubmit}
          onNavigateToProfile={handleNavigateToProfile}
        />
      )}
      {currentPage === "profile" && (
        <ProfilePage
          userData={userData}
          onNavigateToRegistration={handleNavigateToRegistration}
        />
      )}
    </div>
  );
};
