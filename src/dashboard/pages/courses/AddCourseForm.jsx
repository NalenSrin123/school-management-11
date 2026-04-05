import { useState, useRef, useEffect } from "react";
import { createCourse, updateCourse } from "../../../services/course.service";

const DURATIONS = ["One Month", "Two Months", "Three Months", "Six Months"];

const BTN = {
  save: "flex cursor-pointer items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-full shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:scale-105 active:scale-95 transition-all",
  another:
    "flex cursor-pointer items-center gap-2 px-6 py-2.5 text-sm font-semibold text-violet-700 bg-violet-50 border border-violet-200 hover:bg-violet-100 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-100 hover:scale-105 rounded-full shadow-md shadow-violet-100 active:scale-95 transition-all",
  cancel:
    "px-6 cursor-pointer py-2.5 text-sm font-semibold text-red-500 border border-red-300 hover:bg-red-50 hover:border-red-400 hover:shadow-lg hover:shadow-red-100 hover:scale-105 rounded-full shadow-md shadow-red-100 active:scale-95 transition-all",
};

const inputCls = (err) =>
  `w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-violet-100 focus:border-violet-400 transition-all ${
    err
      ? "border-red-300 bg-red-50"
      : "border-gray-200 bg-white hover:border-violet-300"
  }`;

const STATUS_OPTIONS = [
  {
    value: "Active",
    label: "Active",
    bg: "bg-green-50 border-green-200",
    text: "text-green-700",
    dot: "bg-green-500",
  },
  {
    value: "Draft",
    label: "Draft",
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
  {
    value: "Archived",
    label: "Archived",
    bg: "bg-gray-50 border-gray-200",
    text: "text-gray-500",
    dot: "bg-gray-400",
  },
];

const EMPTY_FORM = {
  name: "",
  duration: "",
  description: "",
  status: "Active",
};

export default function AddCourseForm({ onCancel, onSave, initialData }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [image, setImage] = useState(null);
  const [drag, setDrag] = useState(false);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);
  const [apiError, setApiError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef(null);

  const isEditMode = Boolean(initialData?.id);

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        duration: initialData.duration || "",
        description: initialData.description || "",
        status: initialData.status || "Active",
      });
      setImage(initialData.image || null);
    } else {
      setForm(EMPTY_FORM);
      setImage(null);
    }
    setErrors({});
    setApiError("");
  }, [initialData]);

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleChange = (e) => setField(e.target.name, e.target.value);

  const applyFile = (file) => {
    if (file?.type.startsWith("image/")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Course name is required";
    if (!form.duration) e.duration = "Duration is required";
    return e;
  };

  const buildPayload = () => ({
    name: form.name.trim(),
    duration: form.duration,
    description: form.description.trim(),
    status: form.status,
    // created_by: 1,
  });

  const parseApiValidationError = (error) => {
    if (!error.validationErrors) return null;
    const fieldErrors = Object.entries(error.validationErrors).reduce(
      (acc, [field, messages]) => ({
        ...acc,
        [field]: Array.isArray(messages) ? messages[0] : messages,
      }),
      {},
    );
    const message =
      Object.values(fieldErrors).filter(Boolean).join(" ") ||
      error.message ||
      "Validation failed. Please fix the highlighted fields.";
    return { fieldErrors, message };
  };

  const handleApiError = (error) => {
    const parsed = parseApiValidationError(error);
    if (parsed) {
      setErrors(parsed.fieldErrors);
      setApiError(parsed.message);
    } else {
      setApiError(error.message || "Unable to save course. Please try again.");
    }
  };

  const showSuccessToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 1500);
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setImage(null);
    setErrors({});
    setApiError("");
  };

  const handleSave = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setApiError("");

    try {
      const result = isEditMode
        ? await updateCourse(initialData.id, buildPayload())
        : await createCourse(buildPayload());

      showSuccessToast();
      onSave?.(result);

      if (!isEditMode) {
        setTimeout(resetForm, 1500);
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSaveAndAnother = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setApiError("");

    try {
      const result = await createCourse(buildPayload());
      showSuccessToast();
      onSave?.(result);
      setTimeout(resetForm, 1500);
    } catch (error) {
      handleApiError(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex rounded-md justify-center bg-gradient-to-br from-slate-50 via-white to-violet-50 p-4">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-white border border-green-100 text-green-700 text-sm px-5 py-3 rounded-2xl shadow-xl">
          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          Course {isEditMode ? "updated" : "published"}!
        </div>
      )}

      <div className="w-full max-w-2xl p-6">
        <h1 className="text-lg font-bold text-gray-900 mb-4">
          {isEditMode ? "Edit course" : "Add course"}
        </h1>

        <div className="space-y-3">
          {/* Course name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Course name <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter course name..."
                className={inputCls(errors.name)}
              />
              {form.name && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-100 flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </div>
            {errors.name && (
              <p className="text-xs text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Duration <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                name="duration"
                value={form.duration}
                onChange={handleChange}
                className={
                  inputCls(errors.duration) +
                  " appearance-none pr-9 cursor-pointer"
                }
              >
                <option value="" disabled>
                  Select duration...
                </option>
                {DURATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.duration && (
              <p className="text-xs text-red-400 mt-1">{errors.duration}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Description
            </label>
            <div className="rounded-xl border border-gray-200 bg-white hover:border-violet-300 focus-within:border-violet-400 focus-within:shadow-lg focus-within:shadow-violet-100 transition-all duration-200">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={2}
                placeholder="What will students learn in this course?"
                className="w-full px-4 py-2.5 text-sm text-gray-800 bg-transparent rounded-xl focus:outline-none resize-none placeholder-gray-300"
              />
              <div className="flex items-center justify-between px-4 py-1.5 border-t border-gray-100">
                <span className="text-xs text-gray-300">
                  Optional but recommended
                </span>
                <span className="text-xs text-gray-400">
                  {form.description.length} chars
                </span>
              </div>
            </div>
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
              Subject image
            </label>
            <div
              onClick={() => fileRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                setDrag(false);
                applyFile(e.dataTransfer.files[0]);
              }}
              onDragOver={(e) => {
                e.preventDefault();
                setDrag(true);
              }}
              onDragLeave={() => setDrag(false)}
              className={`relative w-full rounded-xl border-2 border-dashed cursor-pointer overflow-hidden transition-all ${
                drag
                  ? "border-violet-400 bg-violet-50"
                  : image
                    ? "border-violet-200"
                    : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50/30"
              }`}
              style={{ height: "110px" }}
            >
              {image ? (
                <>
                  <img
                    src={image}
                    alt="cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                    <span className="text-white text-xs bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                      Uploaded
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          fileRef.current?.click();
                        }}
                        className="text-white text-xs bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition"
                      >
                        Change
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setImage(null);
                          if (fileRef.current) fileRef.current.value = "";
                        }}
                        className="text-white text-xs bg-red-500/70 hover:bg-red-500/90 px-2.5 py-1 rounded-lg transition"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-500">
                    {drag ? "Drop here" : "Click to upload"}
                  </p>
                  <span className="text-[10px] text-violet-500 font-medium bg-violet-50 border border-violet-100 px-2.5 py-0.5 rounded-full">
                    Browse files
                  </span>
                </div>
              )}
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => applyFile(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map(({ value, label, bg, text, dot }) => (
                <button
                  key={value}
                  onClick={() => setField("status", value)}
                  className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${
                    form.status === value
                      ? `${bg} ${text} shadow-sm scale-105`
                      : "bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${form.status === value ? dot : "bg-gray-300"}`}
                  />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* API error */}
          {apiError && (
            <div className="rounded-xl bg-red-50 border border-red-100 text-red-700 px-4 py-2 text-sm">
              {apiError}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-gray-100">
            <button
              onClick={handleSave}
              disabled={submitting}
              className={BTN.save}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {submitting
                ? "Saving..."
                : isEditMode
                  ? "Update course"
                  : "Save course"}
            </button>

            {!isEditMode && (
              <button
                onClick={handleSaveAndAnother}
                disabled={submitting}
                className={BTN.another}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Save &amp; Add Another
              </button>
            )}

            <button onClick={onCancel} className={BTN.cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
