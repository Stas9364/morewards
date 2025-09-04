import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { SignUp } from "./pages/SignUp.tsx";
import { AppShellLayout } from "./components/layout/AppShellLayout.tsx";
import { Profile } from "./pages/Profile.tsx";
import { ContactInfo } from "./pages/ContactInfo.tsx";
import { BusinessDashboard } from "./components/profile/BusinessDashboard.tsx";
import { CorporateInfo } from "./pages/CorporateInfo.tsx";
import { Locations } from "./pages/Locations.tsx";
import { LocationMainInfo } from "./pages/LocationMainInfo.tsx";
import { LocationsDashboard } from "./components/location/LocationsDashboard.tsx";
import { LocationServices } from "./pages/LocationServices.tsx";
import { LocationOperationalInfo } from "./pages/LocationOperationalInfo.tsx";
import { LocationPhotos } from "./pages/LocationPhotos.tsx";
import { Users } from "./pages/Users.tsx";

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  {
    path: "/",
    element: <AppShellLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
        children: [
          { index: true, element: <BusinessDashboard /> },
          { path: "contact-info", element: <ContactInfo /> },
          { path: "corporate-info", element: <CorporateInfo /> },
        ],
      },
      {
        path: "locations",
        element: <Locations />,
        children: [
          { index: true, element: <LocationsDashboard /> },
          { path: "main-info", element: <LocationMainInfo /> },
          { path: "services", element: <LocationServices /> },
          { path: "operational-info", element: <LocationOperationalInfo /> },
          { path: "photos", element: <LocationPhotos /> },
        ],
      },
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
