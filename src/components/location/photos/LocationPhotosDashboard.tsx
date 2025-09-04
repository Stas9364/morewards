import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronDown, Upload } from "lucide-react";
import React, { useRef, useState } from "react";
interface Photo {
  id: string;
  url: string;
  showByDisplay: boolean;
}
const LOCATIONS = ["Thursday14", "Friday15", "Saturday16", "Sunday17"];
const INITIAL_PHOTOS: Photo[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop",
    showByDisplay: false,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
    showByDisplay: false,
  },
];

// @component: LocationPhotosDashboard
export const LocationPhotosDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [otherPhotos, setOtherPhotos] = useState<Photo[]>(INITIAL_PHOTOS);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const coverPhotoRef = useRef<HTMLInputElement>(null);
  const otherPhotoRef = useRef<HTMLInputElement>(null);
  const handleCoverPhotoUpload = (file: File) => {
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 10 * 1024 * 1024
    ) {
      setCoverPhoto(file);
    }
  };
  const handleOtherPhotoUpload = (file: File) => {
    if (
      file &&
      file.type.startsWith("image/") &&
      file.size <= 10 * 1024 * 1024
    ) {
      const newPhoto: Photo = {
        id: Date.now().toString(),
        url: URL.createObjectURL(file),
        showByDisplay: false,
      };
      setOtherPhotos([...otherPhotos, newPhoto]);
    }
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleCoverPhotoUpload(files[0]);
    }
  };
  const togglePhotoDisplay = (photoId: string) => {
    setOtherPhotos((photos) =>
      photos.map((photo) =>
        photo.id === photoId
          ? {
              ...photo,
              showByDisplay: !photo.showByDisplay,
            }
          : photo
      )
    );
  };
  const handleSave = () => {
    console.log("Saving:", {
      location: selectedLocation,
      coverPhoto,
      otherPhotos,
    });
  };
  const handleCancel = () => {
    setCoverPhoto(null);
    setOtherPhotos(INITIAL_PHOTOS);
    setSelectedLocation(LOCATIONS[0]);
  };

  // @return
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        <div className="  md:p-6 mt-16 lg:mt-0">
          {/* Location Selector */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Locations
            </label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full lg:w-80 flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-900">{selectedLocation}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                  >
                    {LOCATIONS.map((location) => (
                      <button
                        key={location}
                        onClick={() => {
                          setSelectedLocation(location);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {location}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Location Photos */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Location Photos
            </h2>

            {/* Cover Photo */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Cover photo
              </label>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => coverPhotoRef.current?.click()}
                className={`relative border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragOver
                    ? "border-blue-400 bg-blue-50"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {coverPhoto ? (
                  <div className="space-y-3">
                    <img
                      src={URL.createObjectURL(coverPhoto)}
                      alt="Cover preview"
                      className="mx-auto max-h-48 rounded-lg"
                    />
                    <p className="text-sm text-gray-600">{coverPhoto.name}</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Upload size={48} className="mx-auto text-gray-400" />
                    <div>
                      <p className="text-blue-600 font-medium">
                        Upload a file or drag and drop
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                )}

                <input
                  ref={coverPhotoRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    e.target.files?.[0] &&
                    handleCoverPhotoUpload(e.target.files[0])
                  }
                  className="hidden"
                />
              </div>
            </div>

            {/* Other Photos */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Other photos
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPhotos.map((photo) => (
                  <div key={photo.id} className="space-y-3">
                    <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img
                        src={photo.url}
                        alt="Location photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={photo.showByDisplay}
                        onChange={() => togglePhotoDisplay(photo.id)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">
                        show photo by display
                      </span>
                    </label>
                  </div>
                ))}

                {/* Add New Photo */}
                <div
                  onClick={() => otherPhotoRef.current?.click()}
                  className="aspect-video border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <Camera size={32} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">Add new photo</span>

                  <input
                    ref={otherPhotoRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleOtherPhotoUpload(e.target.files[0])
                    }
                    className="hidden"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                onClick={handleCancel}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
