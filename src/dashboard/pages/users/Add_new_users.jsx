import React, { useState } from "react";
import { Link } from "react-router-dom";

function Add_new_users() {
  const [preview, setPreview] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [selected, setSelected] = useState(null);
  
  // Add state to control form visibility
  const [showForm, setShowForm] = useState(true);

  // form state to track all inputs
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    username: "",
  });

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  // handleChange for inputs
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleAddUser = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    // Hide the form after adding user
    setShowForm(false);

    // clear all form fields
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      gender: "",
      username: "",
      password: "",
    });
    setPreview(null);
    setSelected(null);
  };

  // Function to reopen the form if needed
  const handleAddAnotherUser = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Success Alert Toast */}
      <div
        className={`fixed top-5 right-5 z-100 flex items-center gap-3 bg-white border border-green-300 shadow-lg rounded-xl px-5 py-3.5 transition-all duration-500 ${
          showAlert
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* alert check icon */}
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">
            User added successfully!
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            The new user has been created.
          </p>
        </div>
        {/* Close button */}
        <button
          onClick={() => setShowAlert(false)}
          className="ml-2 text-gray-300 hover:text-gray-500 transition-colors text-lg leading-none"
        >
          ×
        </button>
      </div>

      {/* Centered container */}
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="font-bold text-xl sm:text-2xl text-gray-900">
            Add new user
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">User / New</p>
        </div>

        {/* Success Message & Add Another Button (shown when form is hidden) */}
        {!showForm && (
          <div className="bg-white border border-gray-200 px-5 sm:px-6 py-8 sm:py-10 rounded-2xl w-full text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              User Added Successfully!
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              The new user has been created and saved to the system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleAddAnotherUser}
                className="px-6 py-2.5 rounded-xl bg-blue-400 border border-gray-300 text-white text-sm font-medium hover:bg-blue-600 active:scale-95 transition-all"
              >
                Add Another User
              </button>
              <Link
                to="/dashboard/table"
                className="px-6 py-2.5 rounded-xl border border-gray-400 text-gray-700 text-sm font-medium hover:bg-gray-100 active:scale-95 transition-all"
              >
                Back to Table
              </Link>
            </div>
          </div>
        )}

        {/* Form Card (shown only when showForm is true) */}
        {showForm && (
          <div className="bg-white border border-gray-200 px-5 sm:px-6 py-5 sm:py-6 rounded-2xl w-full">
            {/* Card header */}
            <div className="mb-5">
              <p className="text-base sm:text-lg font-bold text-gray-900">
                Profile information
              </p>
              <p className="text-xs text-gray-400 mt-0.5">
                Basic details and contact info for the user
              </p>
            </div>

            {/* Avatar upload */}
            <div className="flex flex-row items-center gap-4 sm:gap-6 mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-green-400 bg-green-100 flex items-center justify-center overflow-hidden shrink-0">
                {preview ? (
                  <img
                    src={preview}
                    alt="picture"
                    className="w-full h-full object-cover m-1.5"
                  />
                ) : (
                  <span className="text-xs text-green-600 font-medium">
                    Photo
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Profile photo</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  PNG or JPG, max 2MB
                </p>
                <label className="text-xs font-bold text-green-500 cursor-pointer hover:text-green-600 mt-1.5 block">
                  Upload photo
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhoto}
                  />
                </label>
              </div>
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="border border-gray-300 rounded-lg placeholder:text-gray-400 py-2.5 px-4 text-sm w-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="border border-gray-300 rounded-lg placeholder:text-gray-400 py-2.5 px-4 text-sm w-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="border border-gray-300 rounded-lg placeholder:text-gray-400 py-2.5 px-4 text-sm w-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+885 12 345 6789"
                    className="border border-gray-300 rounded-lg placeholder:text-gray-400 py-2.5 px-4 text-sm w-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg py-2.5 px-4 text-sm w-full bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition text-gray-700"
                  >
                    <option value="">Select Role</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Editor</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="@username"
                    value={form.username}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg py-2.5 px-4 text-sm w-full bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition text-gray-700"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="border border-gray-300 rounded-lg py-2.5 px-4 pr-10 text-sm w-full bg-white focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition text-gray-700"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      // Eye-off icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      // Eye icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3">
              <Link
                to="/dashboard/table"
                className="w-full sm:w-auto px-8 py-2.5 rounded-xl border border-gray-400 hover:text-white text-sm font-medium hover:bg-red-600 active:scale-95 transition-all text-center"
              >
                Cancel
              </Link>
              <button
                onClick={handleAddUser}
                className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-blue-400 border border-gray-300 text-white text-sm font-medium hover:bg-blue-600 active:scale-95 transition-all"
              >
                Add new user
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Add_new_users;