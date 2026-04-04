import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function Create_logo() {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 tracking-wide">
          Create Logo
        </h2>

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all duration-300">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full object-contain rounded-xl p-2"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <UploadCloud size={40} className="mb-2" />
              <p className="text-lg font-medium">Click to add logo</p>
              <p className="text-sm">PNG, JPG, SVG up to 5MB</p>
            </div>
          )}

          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>

        {/* Info Fields */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo Name
            </label>
            <input
              type="text"
              placeholder="Enter logo name"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Created Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-5 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition">
            Cancel
          </button>
          <button className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}