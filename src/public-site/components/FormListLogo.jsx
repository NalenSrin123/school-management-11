import React, { useState, useEffect } from "react";
import { RiImageAddFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const FormListLogo = ({ onAdd, onUpdate, editData, onClose }) => {
  const [form, setForm] = useState({
    id: "",
    date: "",
    image: "",
    label: "Etec Logo",
  });

  // Populate form when editing
  useEffect(() => {
    if (editData) {
      setForm(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a local URL for the image preview
      const previewUrl = URL.createObjectURL(file);
      setForm({ ...form, image: previewUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id) return alert("Please enter an ID");

    if (editData) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
  };

  return (
    <div className="w-full max-w-[400px] bg-white shadow-2xl rounded-2xl px-7 py-8 relative animate-in fade-in zoom-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        type="button"
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors p-1">
        <FaTimes className="text-xl" />
      </button>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {editData ? "Update Logo" : "Add Logo"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div>
          <label className="font-semibold block px-1 text-slate-700 text-sm">
            ID*
          </label>
          <input
            type="text"
            name="id"
            value={form.id}
            onChange={handleChange}
            placeholder="e.g. LG-100"
            className="w-full h-[48px] border border-gray-200 mt-1.5 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
          />
        </div>
        <div>
          <label className="font-semibold block px-1 text-slate-700 text-sm">
            DATE
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full h-[48px] border border-gray-200 mt-1.5 rounded-xl px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 transition-all"
          />
        </div>
        <div>
          <label className="font-semibold block px-1 text-slate-700 text-sm">
            IMAGE*
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImage}
            id="upload"
            className="hidden"
          />
          <label
            htmlFor="upload"
            className="w-full h-[160px] border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer bg-gray-50 mt-1.5 hover:border-blue-400 hover:bg-blue-50 transition-all overflow-hidden">
            {form.image ? (
              <img
                src={form.image}
                alt="Preview"
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <>
                <RiImageAddFill className="text-5xl text-gray-400" />
                <span className="text-sm text-gray-400 mt-2 font-medium">
                  Click to upload image
                </span>
              </>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-full h-[52px] mt-4 rounded-xl text-lg text-white font-bold bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition-transform active:scale-95">
          {editData ? "Save Changes" : "Confirm Add"}
        </button>
      </form>
    </div>
  );
};

export default FormListLogo;
