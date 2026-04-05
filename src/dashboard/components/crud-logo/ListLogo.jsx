import React, { useState, useEffect, useRef } from "react";

function ListLogo() {
  const [logos, setLogos] = useState(() => {
    const saved = localStorage.getItem("my_logos_db");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: "LG-540",
            label: "Etec Logo",
            date: "03/04/2026",
            image: "https://via.placeholder.com/150",
          },
        ];
  });

  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("my_logos_db", JSON.stringify(logos));
  }, [logos]);

  const closeModal = () => {
    setShowForm(false);
    setEditItem(null);
  };

  const handleSave = (image) => {
    if (editItem) {
      setLogos(
        logos.map((item) =>
          item.id === editItem.id ? { ...item, image } : item
        )
      );
    } else {
      const newLogo = {
        id: `LG-${Math.floor(Math.random() * 1000)}`,
        label: "Brand Logo",
        date: new Date().toLocaleDateString("en-GB"),
        image,
      };
      setLogos([...logos, newLogo]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setLogos(logos.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">Logo Table</h2>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add Logo
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="bg-blue-600 text-white text-sm">
            <tr>
              <th className="p-4">ID</th>
              <th className="p-4">Image</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {logos.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.id}</td>

                <td className="p-4 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt="logo"
                    className="w-10 h-10 border rounded"
                  />
                  {item.label}
                </td>

                <td className="p-4">{item.date}</td>

                <td className="p-4 text-center space-x-2">
                  <button
                    onClick={() => {
                      setEditItem(item);
                      setShowForm(true);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {logos.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-400">
                  No logos yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 relative">
            
            <button
              onClick={closeModal}
              className="absolute right-3 top-2 text-xl"
            >
              ×
            </button>

            <h2 className="text-lg font-bold mb-4">
              {editItem ? "Update Logo" : "Add Logo"}
            </h2>

            <ImageUploadForm
              initialImage={editItem?.image}
              onSave={handleSave}
              buttonLabel={editItem ? "Update" : "Add"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- IMAGE UPLOAD ---------------- */

function ImageUploadForm({ initialImage, onSave, buttonLabel }) {
  const [preview, setPreview] = useState(initialImage || null);
  const fileRef = useRef();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        ref={fileRef}
        onChange={handleChange}
        className="hidden"
      />

      <div
        onClick={() => fileRef.current.click()}
        className="border-2 border-dashed p-6 text-center cursor-pointer"
      >
        {preview ? (
          <img src={preview} alt="preview" className="mx-auto h-32" />
        ) : (
          "Click to upload image"
        )}
      </div>

      <button
        onClick={() => preview && onSave(preview)}
        disabled={!preview}
        className={`w-full py-2 rounded text-white ${
          preview ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default ListLogo;