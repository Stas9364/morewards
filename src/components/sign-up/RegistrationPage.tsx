import { useState } from "react";
import { Header } from "./Header";
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
interface RegistrationPageProps {
  onSubmit: (data: UserData) => void;
  onNavigateToProfile: () => void;
}
interface FormData {
  inviteCode: string;
  nameOfSender: string;
  ein: string;
  vendorName: string;
  email: string;
  reenterEmail: string;
  password: string;
  reenterPassword: string;
  legalName: string;
  phone: string;
  url: string;
  businessType: string;
  businessCategory: string;
}
interface FormErrors {
  ein?: string;
  vendorName?: string;
  email?: string;
  reenterEmail?: string;
  password?: string;
  reenterPassword?: string;
}

// @component: RegistrationPage
export const RegistrationPage = ({ onSubmit }: RegistrationPageProps) => {
  const [formData, setFormData] = useState<FormData>({
    inviteCode: "",
    nameOfSender: "",
    ein: "",
    vendorName: "",
    email: "",
    reenterEmail: "",
    password: "",
    reenterPassword: "",
    legalName: "",
    phone: "",
    url: "",
    businessType: "Single Location",
    businessCategory: "Not selected",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const getFieldError = (
    field: keyof FormData,
    data: FormData
  ): string | undefined => {
    switch (field) {
      case "ein": {
        if (!data.ein.trim()) return "EIN is required";
        if (!/^\d{2}-\d{7}$/.test(data.ein) && !/^\d{9}$/.test(data.ein)) {
          return "EIN must be in format XX-XXXXXXX or 9 digits (e.g., 12-3456789 or 123456789)";
        }
        return undefined;
      }
      case "vendorName": {
        if (!data.vendorName.trim()) return "Vendor Name is required";
        if (data.vendorName.trim().length < 2)
          return "Vendor Name must be at least 2 characters long";
        return undefined;
      }
      case "email": {
        if (!data.email.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
          return "Please enter a valid email address (e.g., user@example.com)";
        return undefined;
      }
      case "reenterEmail": {
        if (!data.reenterEmail.trim())
          return "Please re-enter your email to confirm";
        if (data.email !== data.reenterEmail)
          return "Email addresses do not match. Please check both fields";
        return undefined;
      }
      case "password": {
        if (!data.password.trim()) return "Password is required";
        if (data.password.length < 8)
          return "Password must be at least 8 characters long";
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
          return "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        }
        return undefined;
      }
      case "reenterPassword": {
        if (!data.reenterPassword.trim())
          return "Please re-enter your password to confirm";
        if (data.password !== data.reenterPassword)
          return "Passwords do not match. Please check both fields";
        return undefined;
      }
      default:
        return undefined;
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // EIN validation
    if (!formData.ein.trim()) {
      newErrors.ein = "EIN is required";
    } else if (
      !/^\d{2}-\d{7}$/.test(formData.ein) &&
      !/^\d{9}$/.test(formData.ein)
    ) {
      newErrors.ein =
        "EIN must be in format XX-XXXXXXX or 9 digits (e.g., 12-3456789 or 123456789)";
    }

    // Vendor Name validation
    if (!formData.vendorName.trim()) {
      newErrors.vendorName = "Vendor Name is required";
    } else if (formData.vendorName.trim().length < 2) {
      newErrors.vendorName = "Vendor Name must be at least 2 characters long";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email =
        "Please enter a valid email address (e.g., user@example.com)";
    }

    // Re-enter Email validation
    if (!formData.reenterEmail.trim()) {
      newErrors.reenterEmail = "Please re-enter your email to confirm";
    } else if (formData.email !== formData.reenterEmail) {
      newErrors.reenterEmail =
        "Email addresses do not match. Please check both fields";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Re-enter Password validation
    if (!formData.reenterPassword.trim()) {
      newErrors.reenterPassword = "Please re-enter your password to confirm";
    } else if (formData.password !== formData.reenterPassword) {
      newErrors.reenterPassword =
        "Passwords do not match. Please check both fields";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };

      setErrors((prevErrors) => {
        const updated: FormErrors = { ...prevErrors };

        // recalc edited field
        updated[field as keyof FormErrors] = getFieldError(field, next);

        // keep dependent validations in sync
        if (field === "email" || field === "reenterEmail") {
          updated.reenterEmail = getFieldError("reenterEmail", next);
        }
        if (field === "password" || field === "reenterPassword") {
          updated.reenterPassword = getFieldError("reenterPassword", next);
        }

        // cleanup undefined values
        Object.keys(updated).forEach((k) => {
          const key = k as keyof FormErrors;
          if (updated[key] === undefined) {
            delete updated[key];
          }
        });
        return updated;
      });

      return next;
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        vendorName: formData.vendorName,
        ein: formData.ein,
        email: formData.email,
        legalName: formData.legalName,
        phone: formData.phone,
        url: formData.url,
        businessType: formData.businessType,
        businessCategory: formData.businessCategory,
      });
    }
  };
  const isFormValid =
    formData.ein &&
    formData.vendorName &&
    formData.email &&
    formData.reenterEmail &&
    formData.password &&
    formData.reenterPassword &&
    formData.email === formData.reenterEmail &&
    formData.password === formData.reenterPassword &&
    Object.keys(errors).length === 0;

  // @return
  return (
    <div className="min-h-screen bg-gray-50">
      <Header type="registration" />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            <span>General Information</span>
          </h1>

          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h3 className="text-sm font-medium text-blue-800 mb-1">
                  Required Information
                </h3>
                <p className="text-sm text-blue-700">
                  Fields marked with{" "}
                  <span className="text-red-500 font-medium">*</span> are
                  required. Please ensure all information is accurate before
                  submitting.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="inviteCode"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Invite Code:</span>
                </label>
                <input
                  type="text"
                  id="inviteCode"
                  value={formData.inviteCode}
                  onChange={(e) =>
                    handleInputChange("inviteCode", e.target.value)
                  }
                  placeholder="Invite code"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="nameOfSender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Name of a sender:</span>
                </label>
                <input
                  type="text"
                  id="nameOfSender"
                  value={formData.nameOfSender}
                  onChange={(e) =>
                    handleInputChange("nameOfSender", e.target.value)
                  }
                  placeholder="Name of a sender"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ein"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <span>
                  EIN: <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                id="ein"
                value={formData.ein}
                onChange={(e) => handleInputChange("ein", e.target.value)}
                placeholder="12-3456789 or 123456789"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                  errors.ein
                    ? "border-red-500 focus:ring-red-500 bg-red-50"
                    : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                }`}
              />
              {errors.ein && (
                <div className="mt-1 flex items-start space-x-1">
                  <svg
                    className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-red-600">{errors.ein}</p>
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="vendorName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <span>
                  Vendor Name: <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                id="vendorName"
                value={formData.vendorName}
                onChange={(e) =>
                  handleInputChange("vendorName", e.target.value)
                }
                placeholder="Enter your business name"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                  errors.vendorName
                    ? "border-red-500 focus:ring-red-500 bg-red-50"
                    : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                }`}
              />
              {errors.vendorName && (
                <div className="mt-1 flex items-start space-x-1">
                  <svg
                    className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-red-600">{errors.vendorName}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>
                    Email: <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="user@example.com"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                  }`}
                />
                {errors.email && (
                  <div className="mt-1 flex items-start space-x-1">
                    <svg
                      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-600">{errors.email}</p>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="reenterEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>
                    Re-enter Email: <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  id="reenterEmail"
                  value={formData.reenterEmail}
                  onChange={(e) =>
                    handleInputChange("reenterEmail", e.target.value)
                  }
                  placeholder="Confirm your email address"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                    errors.reenterEmail
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : formData.email &&
                        formData.reenterEmail &&
                        formData.email === formData.reenterEmail
                      ? "border-green-500 focus:ring-green-500 bg-green-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                  }`}
                />
                {errors.reenterEmail && (
                  <div className="mt-1 flex items-start space-x-1">
                    <svg
                      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-600">
                      {errors.reenterEmail}
                    </p>
                  </div>
                )}
                {!errors.reenterEmail &&
                  formData.email &&
                  formData.reenterEmail &&
                  formData.email === formData.reenterEmail && (
                    <div className="mt-1 flex items-start space-x-1">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-green-600">
                        Email addresses match
                      </p>
                    </div>
                  )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>
                    Password: <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="At least 8 characters with A-Z, a-z, 0-9"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                    errors.password
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                  }`}
                />
                {errors.password && (
                  <div className="mt-1 flex items-start space-x-1">
                    <svg
                      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-600">{errors.password}</p>
                  </div>
                )}
                {!errors.password && formData.password && (
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center space-x-1">
                      <svg
                        className={`w-3 h-3 ${
                          formData.password.length >= 8
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-xs ${
                          formData.password.length >= 8
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        At least 8 characters
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className={`w-3 h-3 ${
                          /(?=.*[A-Z])/.test(formData.password)
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-xs ${
                          /(?=.*[A-Z])/.test(formData.password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        One uppercase letter
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className={`w-3 h-3 ${
                          /(?=.*[a-z])/.test(formData.password)
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-xs ${
                          /(?=.*[a-z])/.test(formData.password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        One lowercase letter
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg
                        className={`w-3 h-3 ${
                          /(?=.*\d)/.test(formData.password)
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span
                        className={`text-xs ${
                          /(?=.*\d)/.test(formData.password)
                            ? "text-green-600"
                            : "text-gray-500"
                        }`}
                      >
                        One number
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="reenterPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>
                    Re-enter Password: <span className="text-red-500">*</span>
                  </span>
                </label>
                <input
                  type="password"
                  id="reenterPassword"
                  value={formData.reenterPassword}
                  onChange={(e) =>
                    handleInputChange("reenterPassword", e.target.value)
                  }
                  placeholder="Confirm your password"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors ${
                    errors.reenterPassword
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : formData.password &&
                        formData.reenterPassword &&
                        formData.password === formData.reenterPassword
                      ? "border-green-500 focus:ring-green-500 bg-green-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                  }`}
                />
                {errors.reenterPassword && (
                  <div className="mt-1 flex items-start space-x-1">
                    <svg
                      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-sm text-red-600">
                      {errors.reenterPassword}
                    </p>
                  </div>
                )}
                {!errors.reenterPassword &&
                  formData.password &&
                  formData.reenterPassword &&
                  formData.password === formData.reenterPassword && (
                    <div className="mt-1 flex items-start space-x-1">
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm text-green-600">Passwords match</p>
                    </div>
                  )}
              </div>
            </div>

            <div>
              <label
                htmlFor="legalName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                <span>Legal Name:</span>
              </label>
              <input
                type="text"
                id="legalName"
                value={formData.legalName}
                onChange={(e) => handleInputChange("legalName", e.target.value)}
                placeholder="Legal Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Phone:</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>URL:</span>
                </label>
                <input
                  type="url"
                  id="url"
                  value={formData.url}
                  onChange={(e) => handleInputChange("url", e.target.value)}
                  placeholder="URL"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Business Type:</span>
                </label>
                <select
                  id="businessType"
                  value={formData.businessType}
                  onChange={(e) =>
                    handleInputChange("businessType", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Single Location">Single Location</option>
                  <option value="Multi Location">Multi Location</option>
                  <option value="Franchise">Franchise</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="businessCategory"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <span>Business Category:</span>
                </label>
                <select
                  id="businessCategory"
                  value={formData.businessCategory}
                  onChange={(e) =>
                    handleInputChange("businessCategory", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Not selected">Not selected</option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Retail">Retail</option>
                  <option value="Service">Service</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col items-end pt-6">
              {!isFormValid && (
                <div className="mb-3 text-right">
                  <p className="text-sm text-gray-600 mb-1">
                    Please complete all required fields to submit:
                  </p>
                  <ul className="text-xs text-gray-500 space-y-0.5">
                    {!formData.ein && <li>• EIN is required</li>}
                    {!formData.vendorName && <li>• Vendor Name is required</li>}
                    {!formData.email && <li>• Email is required</li>}
                    {!formData.reenterEmail && (
                      <li>• Email confirmation is required</li>
                    )}
                    {!formData.password && <li>• Password is required</li>}
                    {!formData.reenterPassword && (
                      <li>• Password confirmation is required</li>
                    )}
                    {formData.email &&
                      formData.reenterEmail &&
                      formData.email !== formData.reenterEmail && (
                        <li>• Email addresses must match</li>
                      )}
                    {formData.password &&
                      formData.reenterPassword &&
                      formData.password !== formData.reenterPassword && (
                        <li>• Passwords must match</li>
                      )}
                    {Object.keys(errors).length > 0 && (
                      <li>• Please fix validation errors above</li>
                    )}
                  </ul>
                </div>
              )}
              <button
                type="submit"
                disabled={!isFormValid}
                className={`px-8 py-3 rounded-md font-medium transition-colors ${
                  isFormValid
                    ? "bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                <span>
                  {isFormValid
                    ? "Submit Registration"
                    : "Complete Required Fields"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
