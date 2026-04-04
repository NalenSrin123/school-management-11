import { useState } from "react";
import FormListLogo from "../../public-site/components/FormListLogo";

// Initial static data
const initialData = [
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
];

export default function List_logo() {
  const [logos, setLogos] = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  // Function to add a new logo
  const handleAdd = (newLogo) => {
    setLogos([
      ...logos,
      { ...newLogo, id: newLogo.id || Date.now().toString() },
    ]);
    setShowForm(false);
  };

  // Function to update an existing logo
  const handleUpdate = (updatedLogo) => {
    const newData = logos.map((item) =>
      item.id === updatedLogo.id ? updatedLogo : item,
    );
    setLogos(newData);
    setEditData(null);
    setShowForm(false);
  };

  // Function to delete a logo
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this logo?")) {
      setLogos(logos.filter((logo) => logo.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-1">
                Asset Manager
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
                Logo Table
              </h1>
              <p className="text-slate-400 text-sm mt-1.5">
                Manage and organize Etec brand logo assets
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl text-lg font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {logos.length} Assets
              </span>
              <button
                onClick={() => {
                  setEditData(null);
                  setShowForm(true);
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition shadow-md">
                + Add Logo
              </button>
            </div>
          </div>
        </div>

        {/* Modal Overlay for Form */}
        {showForm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <FormListLogo
              onAdd={handleAdd}
              onUpdate={handleUpdate}
              editData={editData}
              onClose={() => setShowForm(false)}
            />
          </div>
        )}

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 text-lg font-bold text-slate-600">
            All Logos
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-{[640px]}">
              <thead className="bg-blue-600 text-white text-sm uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Image</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logos.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-blue-50 transition duration-200">
                    <td className="px-6 py-4 text-sm font-mono text-slate-600">
                      {row.id}
                    </td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={
                          row.image ||
                          "https://via.placeholder.com/60x40?text=Logo"
                        }
                        alt={row.label}
                        className="w-14 h-10 object-contain border border-slate-200 rounded-md p-1 bg-white"
                      />
                      <span className="text-sm font-medium text-slate-700">
                        {row.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {row.date
                        ? new Date(row.date).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center space-x-7">
                      <button
                        onClick={() => {
                          setEditData(row);
                          setShowForm(true);
                        }}
                        className="px-3 py-1 h-{[40px] w-[80px]} bg-blue-500 text-white text-xs font-semibold rounded-md hover:bg-blue-600 transition">
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="px-3 py-1 h-{[40px] w-[80px]} bg-red-500 text-white text-xs font-semibold rounded-md hover:bg-red-600 transition">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
