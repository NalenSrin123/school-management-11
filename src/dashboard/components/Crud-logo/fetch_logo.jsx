import React, { useState, useEffect, useRef } from "react";

function ImageUploadForm({ initialImage, onSave, buttonLabel, closeModal }) {
  const [preview, setPreview] = useState(initialImage || null);
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setPreview(initialImage);
  }, [initialImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    processFile(file);
  };

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else if (file) {
      alert("Please select only image files (jpg, png, etc.)");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    processFile(file);
  };

  const removeImage = (e) => {
    e.stopPropagation();
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="image/*"
      />

      <div
        onClick={() => fileInputRef.current.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full h-64 border-2 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group overflow-hidden
          ${
            preview
              ? "border-gray-300 bg-gray-50"
              : isDragging
              ? "border-blue-500 bg-blue-50 shadow-inner"
              : "border-gray-300 border-dashed bg-gray-50 hover:border-blue-400 hover:bg-blue-50"
          }`}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="logo preview"
              className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
              <p className="text-white font-medium bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
                Click to change image
              </p>
            </div>
            <button
              onClick={removeImage}
              title="Delete"
              className="absolute top-3 right-3 bg-white/80 hover:bg-red-500 text-gray-700 hover:text-white rounded-full p-1.5 shadow-md transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        ) : (
          <div className="text-center p-6 flex flex-col items-center gap-4">
            <div className={`p-4 rounded-full transition-colors ${isDragging ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-gray-700 font-semibold text-base">
                {isDragging ? "Drop image here..." : "Click or drag image to drop here"}
              </p>
              <p className="text-gray-500 text-sm">Supported files: PNG, JPG, GIF (max 5MB)</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={closeModal}
          className="flex-1 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors active:scale-95"
        >
          Cancel
        </button>
        <button
          onClick={() => preview && onSave(preview)}
          className={`flex-{[2]} py-3 text-white font-bold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 active:scale-95
            ${
              preview
                ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200 hover:shadow-lg hover:shadow-blue-300"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          disabled={!preview}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

function Fetch_Logo() {
  const [logos, setLogos] = useState(() => {
    const saved = localStorage.getItem("my_logos_db");
    return saved
      ? JSON.parse(saved)
      : [{ id: "LG-540", label: "Etec Logo", date: "03/04/2026", image: "https://via.placeholder.com/150" }];
  });

  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("my_logos_db", JSON.stringify(logos));
  }, [logos]);

  const handleSave = (imageData) => {
    if (editItem) {
      setLogos(
        logos.map((item) =>
          item.id === editItem.id ? { ...item, image: imageData } : item
        )
      );
    } else {
      const newLogo = {
        id: `LG-${Math.floor(Math.random() * 1000)}`,
        label: "Brand Logo",
        date: new Date().toLocaleDateString("en-GB"),
        image: imageData,
      };
      setLogos([...logos, newLogo]);
    }
    closeModal();
  };

  const closeModal = () => {
    setShowForm(false);
    setEditItem(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setLogos(logos.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="p-6 flex justify-between items-center border-b border-gray-100 bg-white">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Table Logo</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your brand logo here</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-sm transition-all hover:shadow-blue-200 active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Logo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-700 text-white text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Image</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {logos.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-600 font-mono">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 p-1 flex items-center justify-center overflow-hidden flex-shrink-0`">
                        <img
                          src={item.image}
                          alt="logo"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      {/* Edit Button with Text */}
                      <button
                        onClick={() => {
                          setEditItem(item);
                          setShowForm(true);
                        }}
                        className="flex items-center gap-1.5 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-blue-200"
                        title="Edit"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <span className="text-sm font-medium">Edit</span>
                      </button>

                      {/* Delete Button with Text */}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="flex items-center gap-1.5 text-red-500 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-red-200"
                        title="Delete"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        <span className="text-sm font-medium">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {logos.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-16 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 mx-auto mb-4 opacity-40">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    There is no logo yet. Click "Add Logo" to add one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl relative p-8 transform transition-all duration-300 scale-100 opacity-100">
            <div className="flex justify-between items-center mb-7">
              <h2 className="text-2xl font-bold text-gray-900">
                {editItem ? "Update Logo Image" : "Add New Logo"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ImageUploadForm
              initialImage={editItem?.image}
              onSave={handleSave}
              buttonLabel={editItem ? "Save changes" : "Add this logo"}
              closeModal={closeModal}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Fetch_Logo;