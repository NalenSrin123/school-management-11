import { useState, useRef } from "react";

const SUBJECTS =
 ["Web Development",
  "Software Engineering",
  "Mobile Development",
  "Database Administrator",
  "Graphics Design"];
const BTN = {
  save:    "flex cursor-pointer  items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105 active:scale-95 transition-all",
  another: "flex cursor-pointer items-center gap-2 px-6 py-2.5 text-sm font-semibold text-violet-700 bg-violet-50 border border-violet-200 hover:bg-violet-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 hover:scale-105 rounded-full shadow-md shadow-violet-100 active:scale-95 transition-all",
  cancel:  "px-6 cursor-pointer  py-2.5 text-sm  font-semibold text-red-500 border border-red-300 hover:bg-red-50 hover:border-red-400 hover:shadow-lg hover:shadow-red-100 hover:scale-105 rounded-full shadow-md shadow-red-100 active:scale-95 transition-all",
};
const inputCls = (err) =>
  `w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-violet-400 transition-all ${err ? "border-red-300 bg-red-50" : "border-gray-200 bg-white hover:border-violet-300"}`;

export default function AddCourseForm({ onCancel }) {
  const [form, setForm] = useState({ name: "", subject: "", description: "", status: "active" });
  const [image, setImage] = useState(null);
  const [drag, setDrag] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const ref = useRef(null);
  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); if (errors[k]) setErrors(p => ({ ...p, [k]: "" })); };
  const onChange = (e) => set(e.target.name, e.target.value);
  const applyFile = (f) => { if (f?.type.startsWith("image/")) setImage(URL.createObjectURL(f)); };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.subject) e.subject = "Required";
    return e;
  };
  const handleSave = () => {
    const e = validate(); if (Object.keys(e).length) { setErrors(e); return; }
    setToast(true); setTimeout(() => { setToast(false); onCancel?.(); }, 2000);
  };
  const handleAnother = () => {
    const e = validate(); if (Object.keys(e).length) { setErrors(e); return; }
    setForm({ name: "", subject: "", description: "", status: "active" });
    setImage(null); setErrors({});
  };

  return (
    <div className="min-h-screen flex   justify-center bg-linear-to-br from-slate-50 via-white to-violet-50 p-4">
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white border border-green-100 text-green-700 text-sm px-5 py-3 rounded-2xl shadow-xl">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
          </div>
          Course published!
        </div>
      )}

      <div className="w-full max-w-2xl p-6 ">
        <p className="text-xs text-gray-400 mb-1">
          <span className="hover:text-violet-500 cursor-pointer transition-colors" onClick={onCancel}>Courses</span>
          {" › "}
          <span className="text-gray-600">New course</span>
        </p>
        <h1 className="text-lg font-bold text-gray-900 mb-4">Add course</h1>

        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Course name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Enter course name. . ." className={inputCls(errors.name)} />
              {form.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                </div>
              )}
            </div>
            {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Subject <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select name="subject" value={form.subject} onChange={onChange} className={inputCls(errors.subject) + " appearance-none pr-9 cursor-pointer"}>
                <option value="" disabled>Select a subject. . .</option>
                {SUBJECTS.map(s => <option key={s}>{s}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
            {errors.subject && <p className="text-xs text-red-400 mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Description</label>
            <div className="rounded-xl border border-gray-200 bg-white hover:border-violet-300 focus-within:border-violet-400 focus-within:shadow-lg focus-within:shadow-violet-100 transition-all duration-200">
              <textarea name="description" value={form.description} onChange={onChange} rows={2} placeholder="What will students learn in this course?" className="w-full px-4 py-2.5 text-sm text-gray-800 bg-transparent rounded-xl focus:outline-none resize-none placeholder-gray-300" />
              <div className="flex items-center justify-between px-4 py-1.5 border-t border-gray-100">
                <span className="text-xs text-gray-300">Optional but recommended</span>
                <span className="text-xs text-gray-400">{form.description.length} chars</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">Subject image</label>
            <div
              onClick={() => ref.current?.click()}
              onDrop={(e) => { e.preventDefault(); setDrag(false); applyFile(e.dataTransfer.files[0]); }}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              className={`relative w-full rounded-xl border-2 border-dashed cursor-pointer overflow-hidden transition-all ${drag ? "border-violet-400 bg-violet-50" : image ? "border-violet-200" : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50/30"}`}
              style={{ height: "110px" }}
            >
              {image ? (
                <>
                  <img src={image} alt="cover" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                    <span className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">Uploaded</span>
                    <div className="flex gap-1.5">
                      <button onClick={(e) => { e.stopPropagation(); ref.current?.click(); }} className="text-white text-xs bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition">Change</button>
                      <button onClick={(e) => { e.stopPropagation(); setImage(null); if (ref.current) ref.current.value = ""; }} className="text-white text-xs bg-red-500/70 hover:bg-red-500/90 px-2.5 py-1 rounded-lg transition">Remove</button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-500">{drag ? "Drop here" : "Click to upload"}</p>
                  <span className="text-[10px] text-violet-500 font-medium bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full">Browse files</span>
                </div>
              )}
            </div>
            <input ref={ref} type="file" accept="image/*" onChange={(e) => applyFile(e.target.files[0])} className="hidden" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Status</label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: "active",   label: "Active",   bg: "bg-green-50 border-green-200", text: "text-green-700", dot: "bg-green-500" },
                { value: "draft",    label: "Draft",    bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
                { value: "archived", label: "Archived", bg: "bg-gray-50 border-gray-200",   text: "text-gray-500",  dot: "bg-gray-400" },
              ].map(({ value, label, bg, text, dot }) => (
                <button key={value} onClick={() => set("status", value)}
                  className={` cursor-pointerflex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${form.status === value ? `${bg} ${text} shadow-sm scale-105` : "bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-500"}`}>
                  <span className={`w-2 h-2 rounded-full ${form.status === value ? dot : "bg-gray-300"}`} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100">
            <button onClick={handleSave} className={BTN.save}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
              Save course
            </button>
            <button onClick={handleAnother} className={BTN.another}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
              Save &amp; Add Another
            </button>
            <button onClick={onCancel} className={BTN.cancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
