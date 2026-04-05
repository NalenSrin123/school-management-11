import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://school-management-11-main-oxrub0.laravel.cloud/api";

export default function ListEvent() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("create");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [form, setForm] = useState({ Name: "", Date: "", Description: "" });
  const [submitting, setSubmitting] = useState(false);

  // Delete confirmation modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // NEW: Success alert modal state (requires OK click to close)
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/event`);
      
      let data = [];
      if (response.data?.data?.data && Array.isArray(response.data.data.data)) {
        data = response.data.data.data;
      } else if (response.data?.data && Array.isArray(response.data.data)) {
        data = response.data.data;
      } else if (Array.isArray(response.data)) {
        data = response.data;
      }
      
      console.log("✅ Events loaded:", data);
      setEvents(data);
    } catch (err) {
      if (axios.isCancel(err)) return;
      console.error("❌ Fetch error:", err);
      setError("Failed to load events. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // NEW: Show success modal with OK button
  const showSuccess = (message) => {
    setSuccessMessage(message);
    setShowSuccessModal(true);
  };

  // NEW: Close success modal
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setSuccessMessage("");
  };

  const openCreate = () => {
    setModalMode("create");
    setSelectedEvent(null);
    setForm({ Name: "", Date: "", Description: "" });
    setShowModal(true);
  };

  const openUpdate = (event) => {
    setModalMode("update");
    setSelectedEvent(event);
    setForm({
      Name: event.Name ?? "",
      Date: event.Date ?? "",
      Description: event.Description ?? "",
    });
    setShowModal(true);
  };

  const openDeleteModal = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setEventToDelete(null);
    setDeleting(false);
  };

  const confirmDelete = async () => {
    if (!eventToDelete) return;
    
    setDeleting(true);
    try {
      const id = getId(eventToDelete);
      await axios.delete(`${BASE_URL}/event/${id}`);
      closeDeleteModal();
      await fetchEvents();
      // Show success modal with OK button
      showSuccess(`Event "${eventToDelete.Name}" deleted successfully!`);
    } catch (err) {
      alert("Failed to delete event.");
      console.error(err);
    } finally {
      setDeleting(false);
    }
  };

  const handleCreate = async () => {
    setSubmitting(true);
    try {
      await axios.post(`${BASE_URL}/event`, form);
      setShowModal(false);
      await fetchEvents();
      // Show success modal with OK button
      showSuccess("Event created successfully!");
    } catch (err) {
      alert("Failed to create event.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async () => {
    setSubmitting(true);
    try {
      await axios.put(`${BASE_URL}/event/${selectedEvent.EventID}`, form);
      setShowModal(false);
      await fetchEvents();
      // Show success modal with OK button
      showSuccess(`Event "${form.Name}" updated successfully!`);
    } catch (err) {
      alert("Failed to update event.");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = () => {
    if (modalMode === "create") handleCreate();
    else handleUpdate();
  };

  const getId = (event) => event.EventID ?? event.id;
  
  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return "—";
      return date.toLocaleDateString();
    } catch {
      return "—";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-1">
                Asset Manager
              </p>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-800">
                Event Table
              </h1>
              <p className="text-slate-400 text-sm mt-1.5">
                Manage and organize school events
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl text-lg font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {events.length} Events
              </span>
              <button
                onClick={openCreate}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition"
              >
                + Add Event
              </button>
            </div>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 text-lg font-bold text-slate-600">
            All Events
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-16 text-slate-400 text-sm gap-2">
              <svg className="animate-spin h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Loading events…
            </div>
          )}

          {/* Error */}
          {!loading && error && (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <p className="text-red-500 text-sm">{error}</p>
              <button
                onClick={fetchEvents}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition"
              >
                Retry
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && events.length === 0 && (
            <div className="flex items-center justify-center py-16 text-slate-400 text-sm">
              No events found. Click "+ Add Event" to create one.
            </div>
          )}

          {/* Table */}
          {!loading && !error && events.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white text-sm uppercase">
                  <tr>
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Description</th>
                    <th className="px-6 py-3 text-left">Date</th>
                    <th className="px-6 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {events.map((event, index) => (
                    <tr
                      key={getId(event) || index}
                      className="hover:bg-blue-50 transition duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-mono text-slate-600">
                        {getId(event) || "—"}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-700">
                        {event.Name ?? event.name ?? "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 max-w-xs truncate">
                        {event.Description ?? event.description ?? "—"}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {formatDate(event.Date ?? event.date)}
                      </td>
                      <td className="px-6 py-4 text-center space-x-2">
                        <button
                          onClick={() => openUpdate(event)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 border border-blue-600 transition"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => openDeleteModal(event)}
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 border border-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Create/Update Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-5">
              {modalMode === "create" ? "Create New Event" : "Update Event"}
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.Name}
                  onChange={(e) => setForm({ ...form, Name: e.target.value })}
                  placeholder="Event name"
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Date <span className="text-red-400">*</span>
                </label>
                <input
                  type="date"
                  value={form.Date}
                  onChange={(e) => setForm({ ...form, Date: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Description
                </label>
                <textarea
                  value={form.Description}
                  onChange={(e) => setForm({ ...form, Description: e.target.value })}
                  placeholder="Event description (optional)"
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting || !form.Name || !form.Date}
                className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 rounded-xl transition"
              >
                {submitting
                  ? "Saving…"
                  : modalMode === "create"
                  ? "Create"
                  : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && eventToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all">
            {/* Warning Icon */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
              <svg 
                className="h-6 w-6 text-red-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
                />
              </svg>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-center text-slate-900 mb-2">
              Delete Event
            </h3>
            
            {/* Message */}
            <p className="text-sm text-center text-slate-500 mb-6">
              Are you sure you want to delete <span className="font-semibold text-slate-700">"{eventToDelete.Name}"</span>? 
              This action cannot be undone.
            </p>
            
            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={closeDeleteModal}
                disabled={deleting}
                className="flex-1 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={deleting}
                className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Deleting…
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* NEW: Success Alert Modal with OK Button */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 transform transition-all">
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg 
                className="h-6 w-6 text-green-600" 
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
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-center text-slate-900 mb-2">
              Success
            </h3>
            
            {/* Message */}
            <p className="text-sm text-center text-slate-500 mb-6">
              {successMessage}
            </p>
            
            {/* OK Button */}
            <button
              onClick={closeSuccessModal}
              className="w-full px-4 py-2 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}