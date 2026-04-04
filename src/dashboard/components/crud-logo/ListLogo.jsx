import React, { useState, useEffect, useRef } from "react";

function ListLogo () {
  // --- 1. STATE MANAGEMENT ---
  const [logos, setLogos] = useState(() => {
    const saved = localStorage.getItem("my_logos_db");
    return saved ? JSON.parse(saved) : [
      { id: "LG-540", label: "Etec Logo", date: "03/04/2026", image: "https://via.placeholder.com/150" }
    ];
  });

  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null); 

  // Sync with LocalStorage
  useEffect(() => {
    localStorage.setItem("my_logos_db", JSON.stringify(logos));
  }, [logos]);

  // --- 2. OPERATIONS ---
  const handleSave = (imageData) => {
    if (editItem) {
     
      setLogos(logos.map(item => 
        item.id === editItem.id ? { ...item, image: imageData } : item
      ));
    } else {
    
      const newLogo = {
        id: `LG-${Math.floor(Math.random() * 1000)}`,
        label: "Brand Logo",
        date: new Date().toLocaleDateString('en-GB'),
        image: imageData
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
    if (window.confirm("តើអ្នកប្រាកដថាចង់លុបមែនទេ?")) {
      setLogos(logos.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">All Logos</h2>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm"
          >
            + Add Logo
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white text-xs uppercase">
              <tr>
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {logos.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-600">{item.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt="logo" className="w-10 h-10 object-contain border rounded p-1" />
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button 
                        onClick={() => { setEditItem(item); setShowForm(true); }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs transition-colors"
                      >
                        Update
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL (បង្ហាញតែប្រអប់ Image សម្រាប់ទាំង Add និង Update) */}
      {showForm && (
        <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-8">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {editItem ? "Update Logo Image" : "Add Logo"}
            </h2>
            
            <ImageUploadForm 
              initialImage={editItem?.image} 
              onSave={handleSave} 
              buttonLabel={editItem ? "Confirm Update" : "Confirm Add"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// --- Component សម្រាប់ Upload រូបភាព (Image Only Form) ---
function ImageUploadForm({ initialImage, onSave, buttonLabel }) {
  const [preview, setPreview] = useState(initialImage || null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
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
        className="w-full h-48 border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all overflow-hidden"
      >
        {preview ? (
          <img src={preview} alt="preview" className="w-full h-full object-contain p-2" />
        ) : (
          <div className="text-center">
            <p className="text-gray-400 font-medium">Click to upload image</p>
          </div>
        )}
      </div>

      <button 
        onClick={() => preview && onSave(preview)}
        className={`w-full py-3 text-white font-bold rounded-lg shadow-lg transition-all active:scale-95 ${
          preview ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'
        }`}
        disabled={!preview}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default ListLogo;

