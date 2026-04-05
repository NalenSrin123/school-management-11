import React, { useState, useEffect } from "react";
import {
  Search,
  MoreVertical,
  ChevronDown,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import Sidebar from "../../components/design_sidebar/Sidebar";
import AddCourseForm from "../courses/AddCourseForm";
import { getCourses, deleteCourse } from "../../../services/course.service";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [showCourseCreateModal, setShowCourseCreateModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCourses = async () => {
    setLoading(true);
    setFetchError("");
    try {
      const data = await getCourses();
      setCourses(Array.isArray(data) ? data : []);
    } catch (error) {
      setFetchError(error.message || "Unable to load courses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleOpenModal = (course = null) => {
    setEditingCourse(course);
    setShowCourseCreateModal(true);
    window.requestAnimationFrame(() => setAnimateModal(true));
  };

  const handleCloseModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setShowCourseCreateModal(false);
      setEditingCourse(null);
    }, 300);
  };

  const handleCourseSaved = (result) => {
    if (editingCourse) {
      // Update existing course in state
      setCourses(
        courses.map((course) =>
          course.id === editingCourse.id ? result : course,
        ),
      );
    } else {
      // Add new course to state
      setCourses([...courses, result]);
    }
    handleCloseModal();
  };

  const handleDeleteCourse = async (courseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?",
    );
    if (!confirmDelete) return;

    try {
      await deleteCourse(courseId);
      // Remove from state instead of refetching
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (error) {
      alert(error.message || "Unable to delete course.");
    }
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-white px-3 py-2 rounded shadow w-1/3">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ml-2 outline-none w-full"
            />
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Courses</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 rounded font-medium hover:bg-gray-300 transition">
              Export
            </button>
            <button
              onClick={() => handleOpenModal(null)}
              className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded font-medium hover:bg-blue-700 transition flex items-center gap-2"
            >
              <BookOpen size={18} />+ Add Course
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-4 text-sm">
          {["Category", "Duration", "Status"].map((filter) => (
            <button
              key={filter}
              className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 shadow-sm rounded hover:bg-gray-50"
            >
              {filter} <ChevronDown size={14} />
            </button>
          ))}
        </div>

        {fetchError && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {fetchError}
          </div>
        )}

        <div className="bg-white rounded-xl shadow border border-gray-200">
          {loading ? (
            <div className="p-8 text-center text-gray-500">
              Loading courses...
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              {searchQuery
                ? "No courses match your search."
                : "No courses found."}
            </div>
          ) : (
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-600">
                <tr>
                  <th className="p-4 font-semibold">ID</th>
                  <th className="p-4 font-semibold">Course Name</th>
                  <th className="p-4 font-semibold">Description</th>
                  <th className="p-4 font-semibold">Duration</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-blue-50/40 transition"
                  >
                    <td className="p-4 text-gray-500 font-mono">
                      #{course.id}
                    </td>
                    <td className="p-4">
                      <div className="font-bold text-gray-900">
                        {course.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                        <Calendar size={12} />
                        {new Date(course.created_at).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="p-4 text-sm text-gray-600 max-w-xs truncate">
                      {course.description}
                    </td>
                    <td className="p-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock size={14} className="text-blue-500" />
                        {course.duration}
                      </div>
                    </td>
                    <td className="p-4 text-sm">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          course.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {course.status === "Active" && (
                          <CheckCircle size={12} />
                        )}
                        {course.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <div className="relative inline-block">
                        <button
                          className="p-2 hover:bg-gray-100 cursor-pointer rounded-full transition"
                          onClick={() =>
                            setOpenMenu(
                              openMenu === course.id ? null : course.id,
                            )
                          }
                        >
                          <MoreVertical className="w-4 h-4 text-gray-500" />
                        </button>
                        {openMenu === course.id && (
                          <div className="absolute right-0 top-10 w-44 bg-white shadow-xl rounded-lg border border-gray-200 z-30 py-1 animate-in fade-in zoom-in duration-150">
                            <button
                              className="block w-full cursor-pointer text-left px-4 py-2 text-sm hover:bg-gray-50"
                              onClick={() => {
                                handleOpenModal(course);
                                setOpenMenu(null);
                              }}
                            >
                              ✏️ Edit Details
                            </button>
                            <hr className="my-1 border-gray-100" />
                            <button
                              onClick={() => {
                                handleDeleteCourse(course.id);
                                setOpenMenu(null);
                              }}
                              className="block w-full cursor-pointer text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                            >
                              🗑 Delete Course
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showCourseCreateModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            animateModal
              ? "bg-black/40 backdrop-blur-sm opacity-100"
              : "bg-black/0 opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`w-full max-w-2xl mx-4 transform transition-all duration-300 ${
              animateModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <AddCourseForm
              onCancel={handleCloseModal}
              onSave={handleCourseSaved}
              initialData={editingCourse}
            />
          </div>
        </div>
      )}
    </div>
  );
}
