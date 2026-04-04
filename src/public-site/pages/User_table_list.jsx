import React, { useState } from "react";
import { MoreHorizontal, Phone, Mail } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function Table() {
  const [openMenu, setOpenMenu] = useState(null);

  const students = [
    {
      id: 1,
      name: "Robert Fox",
      gender: "Male",
      age: 17,
      class: "1A",
      grade: 9.3,
      missing: 0,
    },
    {
      id: 2,
      name: "Marvin McKinney",
      gender: "Male",
      age: 6,
      class: "1B",
      grade: "5",
      missing: 0,
    },
    {
      id: 3,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 4,
      name: "Darrell Ste",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 5,
      name: "Darrell ward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 6,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 7,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 8,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 9,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 10,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 11,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 12,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
    {
      id: 13,
      name: "Darrell Steward",
      gender: "Female",
      age: 10,
      class: "4C",
      grade: 8.6,
      missing: 6,
    },
  ];

  // Calculate totals for summary row
  const totalStudents = students.length;
  const totalMissing = students.reduce((sum, s) => sum + s.missing, 0);
  const averageGrade =
    students.reduce(
      (sum, s) => sum + (typeof s.grade === "number" ? s.grade : 0),
      0,
    ) / students.filter((s) => typeof s.grade === "number").length;

  return (
    <div className="p-6 w-full bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl border border-indigo-100">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-indigo-700">User Name</h1>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              Total {totalStudents}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="border border-indigo-400 text-indigo-600 px-4 py-2 rounded-xl text-sm hover:bg-indigo-100 transition">
              Export data
            </button>

            <Link
              to="/dashboard/add_new_users"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-indigo-700 shadow-md transition"
            >
              + Add User
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-[800px] w-full text-sm">
            <thead className="bg-gradient-to-r from-indigo-100 to-indigo-200 text-gray-700">
              <tr>
                <th className="p-3"></th>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">Age</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Avg grade</th>
                <th className="p-3 text-left">Missing days</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s, i) => (
                <tr
                  key={s.id}
                  className={`transition-transform duration-200 hover:bg-gray-700/20 ${
                    i % 2 === 0 ? "bg-white" : "bg-white"
                  }`}
                >
                  <td className="p-3">
                    <input type="checkbox" className="accent-indigo-500" />
                  </td>

                  <td className="p-3 font-semibold text-indigo-700">{s.id}</td>

                  <td className="p-3 flex items-center gap-3 whitespace-nowrap">
                    <span className="font-medium text-gray-700 dark:text-gray-200">
                      {s.name}
                    </span>
                  </td>

                  <td className="p-3">{s.gender}</td>
                  <td className="p-3">{s.age}</td>
                  <td className="p-3">{s.class}</td>
                  <td className="p-3 font-semibold text-green-600">
                    {s.grade}
                  </td>
                  <td className="p-3 font-semibold text-red-500">
                    {s.missing}
                  </td>

                  <td className="p-3 relative">
                    <div className="flex gap-3 items-center">
                      <Phone
                        className="text-indigo-500 cursor-pointer hover:scale-125 transition-transform"
                        size={18}
                      />
                      <Mail
                        className="text-indigo-500 cursor-pointer hover:scale-125 transition-transform"
                        size={18}
                      />

                      <button
                        onClick={() => setOpenMenu(openMenu === i ? null : i)}
                        className="p-1 rounded hover:bg-indigo-100 transition"
                      >
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    {openMenu === i && (
                      <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-indigo-200 rounded-xl shadow-lg w-44 z-10 animate-slide-down">
                        <button className="block w-full text-left px-4 py-2 hover:bg-indigo-50 transition">
                          Edit
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-indigo-50 transition">
                          Enroll training
                        </button>
                        <button className="block w-full text-left px-4 py-2 hover:bg-indigo-50 transition">
                          Add to group
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 transition">
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}

              {/* Summary Row */}
              <tr className="bg-indigo-100 font-semibold text-gray-800">
                <td className="p-3"></td>
                <td className="p-3">Total</td>
                <td className="p-3">{totalStudents} Students</td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Slide Down Animation */}
        <style>
          {`
            @keyframes slide-down {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-slide-down {
              animation: slide-down 0.2s ease-out forwards;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Table;
