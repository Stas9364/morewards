import { useState } from "react";
import { ContactDetailsCard } from "./ContactDetailsCard";
export interface ContactData {
  firstName: string;
  middleInitial: string;
  lastName: string;
  businessEmail: string;
  reenterEmail: string;
  mainPhone: string;
  fax: string;
}

// @component: ContactDetailsPage
export const ContactDetailsPage = () => {
  const [contactData, setContactData] = useState<ContactData>({
    firstName: "John",
    middleInitial: "D",
    lastName: "Doe",
    businessEmail: "john.doe@example.com",
    reenterEmail: "john.doe@example.com",
    mainPhone: "123-456-7890",
    fax: "098-765-4321",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState<ContactData>(contactData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleEdit = () => {
    setIsEditing(true);
    setTempData(contactData);
  };
  const handleSave = () => {
    if (tempData.businessEmail !== tempData.reenterEmail) {
      alert("Email addresses do not match");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(tempData.businessEmail)) {
      alert("Please enter a valid email address");
      return;
    }
    setContactData(tempData);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setTempData(contactData);
    setIsEditing(false);
  };
  const handleInputChange = (field: keyof ContactData, value: string) => {
    setTempData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // @return
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 ">
        <div className=" md:p-6">
          <ContactDetailsCard
            contactData={isEditing ? tempData : contactData}
            isEditing={isEditing}
            onEdit={handleEdit}
            onSave={handleSave}
            onCancel={handleCancel}
            onInputChange={handleInputChange}
          />
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          style={{
            background: "rgb(0 0 0 / 0)",
          }}
        />
      )}
    </div>
  );
};
