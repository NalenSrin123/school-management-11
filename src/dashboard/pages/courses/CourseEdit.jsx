  import { useState, useRef, useEffect } from "react";

const SUBJECTS = [
  "Web Development",
  "Software Engineering",
  "Mobile Development",
  "Database Administrator",
  "Graphics Design",
];

const BTN = {
  save: "flex cursor-pointer items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105 active:scale-95 transition-all",
  cancel: "px-6 cursor-pointer py-2.5 text-sm font-semibold text-gray-500 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-100 hover:scale-105 rounded-full shadow-md shadow-gray-100 active:scale-95 transition-all",
};

const inputCls = (err) =>
  `w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-violet-400 transition-all ${
    err ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-violet-300"
  }`;

export default function CourseEdit({ course, onCancel, onUpdate }) {
  // Initialize state with existing course data
  const [form, setForm] = useState({
    name: course?.name || "",
    subject: course?.subject || "",
    description: course?.description || "",
    status: course?.status?.toLowerCase() || "active",
  });

  const [image, setImage] = useState(course?.image || null);
  const [drag, setDrag] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const ref = useRef(null);

  const set = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: "" }));
  };

  const onChange = (e) => set(e.target.name, e.target.value);
  const applyFile = (f) => {
    if (f?.type.startsWith("image/")) setImage(URL.createObjectURL(f));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.subject) e.subject = "Required";
    return e;
  };

  const handleUpdate = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setToast(true);
    setTimeout(() => {
      setToast(false);
      if (onUpdate) onUpdate({ ...course, ...form, image });
      onCancel?.();
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex rounded-md justify-center bg-white p-4">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white border border-blue-100 text-blue-700 text-sm px-5 py-3 rounded-2xl shadow-xl">
          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          Course updated successfully!
        </div>
      )}

      <div className="w-full max-w-2xl p-6">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-xl font-bold text-gray-900">Edit Course</h1>
                <p className="text-xs text-gray-500">Updating ID: #{course?.id}</p>
            </div>
            <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
        </div>

        <div className="space-y-4">
          {/* Course Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Course name <span className="text-red-400">*</span></label>
            <input type="text" name="name" value={form.name} onChange={onChange} className={inputCls(errors.name)} />
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          {/* Subject Selection */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Subject <span className="text-red-400">*</span></label>
            <div className="relative">
              <select name="subject" value={form.subject} onChange={onChange} className={inputCls(errors.subject) + " appearance-none pr-9 cursor-pointer"}>
                <option value="" disabled>Select a subject</option>
                {SUBJECTS.map((s) => (<option key={s} value={s}>{s}</option>))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Description</label>
            <textarea name="description" value={form.description} onChange={onChange} rows={3} className={inputCls()} />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Course Image</label>
            <div
              onClick={() => ref.current?.click()}
              onDrop={(e) => { e.preventDefault(); setDrag(false); applyFile(e.dataTransfer.files[0]); }}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              className={`relative w-full rounded-xl border-2 border-dashed cursor-pointer overflow-hidden h-32 transition-all ${drag ? "border-violet-400 bg-violet-50" : "border-gray-200 bg-gray-50"}`}
            >
              {image ? (
                <img src={image} alt="cover" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                  <svg className="w-8 h-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  <span className="text-xs">Update Image</span>
                </div>
              )}
            </div>
            <input ref={ref} type="file" accept="image/*" onChange={(e) => applyFile(e.target.files[0])} className="hidden" />
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Status</label>
            <div className="flex gap-2">
              {[
                { value: "active", label: "Active", bg: "bg-green-50 border-green-200", text: "text-green-700", dot: "bg-green-500" },
                { value: "draft", label: "Draft", bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
              ].map(({ value, label, bg, text, dot }) => (
                <button key={value} onClick={() => set("status", value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${form.status === value ? `${bg} ${text} scale-105 shadow-sm` : "bg-white text-gray-400 border-gray-200 hover:bg-gray-50"}`}>
                  <span className={`w-2 h-2 rounded-full ${form.status === value ? dot : "bg-gray-300"}`} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
            <button onClick={handleUpdate} className={BTN.save}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Update Course
            </button>
            <button onClick={onCancel} className={BTN.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}