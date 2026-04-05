import { useEffect, useState } from "react";

const API_URL =
  "https://school-management-11-back-main-gofjr4.laravel.cloud/api/roadmaps";

export default function RouteMap() {
  const [roadmaps, setRoadmaps] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    description: "",
    status: "active", 
    image: null,
  });
  const [preview, setPreview] = useState(null);

  const fetchRoadmaps = async () => {
    try {
      const res = await fetch(API_URL, {
        headers: {
          Accept: "application/json",
        },
      });
      const data = await res.json();
      setRoadmaps(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("status", form.status);

    if (form.image) {
      formData.append("image_path", form.image);
    }

    try {
      if (form.id) {
        await fetch(`${API_URL}/${form.id}?_method=PUT`, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
      } else {
        await fetch(API_URL, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        });
      }
      resetForm();
      fetchRoadmaps();
    } catch (error) {
      console.error("Submit error:", error);
    }
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
          },
        });
        fetchRoadmaps();
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const handleEdit = (item) => {
    setForm({
      id: item.id,
      title: item.title,
      description: item.description,
      status: item.status,
      image: null,
    });
    setPreview(item.image_path);
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      description: "",
      status: "active",
      image: null,
    });
    setPreview(null);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            {form.id ? "Edit Roadmap Entry" : "Create New Roadmap"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title (Required)
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter roadmap title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none">
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter roadmap details..."
                value={form.description}
                onChange={handleChange}
                className="w-full border p-2 rounded h-24 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="flex items-center gap-6 p-4 border-2 border-dashed rounded-lg">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Image
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {preview && (
                <div className="relative">
                  <img
                    src={preview}
                    alt="preview"
                    className="w-24 h-24 object-cover rounded-lg border shadow-sm"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setForm({ ...form, image: null });
                    }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs">
                    ✕
                  </button>
                </div>
              )}
            </div>
            <div className="flex gap-3 pt-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-lg font-semibold transition shadow-md">
                {form.id ? "Update Changes" : "Save Roadmap"}
              </button>
              {form.id && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2.5 rounded-lg font-semibold transition">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6 border-b bg-gray-50 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              Existing Roadmaps
            </h2>
            <span className="text-sm text-gray-500">
              {roadmaps.length} Items Total
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 font-bold text-gray-600 text-sm uppercase">
                    Image
                  </th>
                  <th className="p-4 font-bold text-gray-600 text-sm uppercase">
                    Roadmap Details
                  </th>
                  <th className="p-4 font-bold text-gray-600 text-sm uppercase">
                    Status
                  </th>
                  <th className="p-4 font-bold text-gray-600 text-sm uppercase text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {roadmaps.length > 0 ? (
                  roadmaps.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        {item.image_path ? (
                          <img
                            src={item.image_path}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded shadow-sm border"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center text-[10px] text-gray-400 border border-dashed">
                            NO IMAGE
                          </div>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-gray-800">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500 max-w-md line-clamp-2">
                          {item.description}
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            item.status === "active"
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : "bg-red-100 text-red-700 border border-red-200"
                          }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition">
                            Edit
                          </button>
                          <div className="w-px h-4 bg-gray-300 self-center"></div>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-800 font-semibold text-sm transition">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-12 text-center text-gray-500 italic">
                      No roadmaps available. Create one above to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
