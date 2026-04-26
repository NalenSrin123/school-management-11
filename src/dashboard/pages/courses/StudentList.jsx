import React, { useState } from "react";
import { Search, Bell, Settings, MoreVertical, Phone, Mail, ChevronDown } from "lucide-react";


const studentsData = [
    { id: 447, name: "Robert Fox", gender: "Male", age: 17, class: "1A", grade: 9.3 },
    { id: 877, name: "Marvin McKinney", gender: "Male", age: 16, class: "1B", grade: 8.8 },
    { id: 556, name: "Darrell Steward", gender: "Female", age: 10, class: "4C", grade: 8.6 },
    { id: 432, name: "Savannah Nguyen", gender: "Male", age: 11, class: "4C", grade: 7.2 },
    { id: 536, name: "Dianne Russell", gender: "Female", age: 16, class: "11B", grade: 8.2 },
];

export default function Dashboard() {
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center bg-white px-3 py-2 rounded shadow w-1/3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="ml-2 outline-none w-full"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Bell />
                        <Settings />
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="avatar"
                            className="rounded-full"
                        />
                    </div>
                </div>

                {/* Top Actions */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Students</h2>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-gray-200 rounded">Export</button>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">+ Add Student</button>
                    </div>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-4">
                    <button className="flex items-center gap-1 px-3 py-1 bg-white shadow rounded">
                        Classes <ChevronDown size={14} />
                    </button>

                    <button className="flex items-center gap-1 px-3 py-1 bg-white shadow rounded">
                        Age <ChevronDown size={14} />
                    </button>

                    <button className="flex items-center gap-1 px-3 py-1 bg-white shadow rounded">
                        Avg grade <ChevronDown size={14} />
                    </button>

                    <button className="flex items-center gap-1 px-3 py-1 bg-white shadow rounded">
                        All filters <ChevronDown size={14} />
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white rounded shadow overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-3">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-3">ID</th>
                                <th className="p-3">Student</th>
                                <th className="p-3">Gender</th>
                                <th className="p-3">Age</th>
                                <th className="p-3">Class</th>
                                <th className="p-3">Avg Grade</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {studentsData.map((s) => (
                                <tr key={s.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="p-3">{s.id}</td>
                                    <td className="p-3 flex items-center gap-2">
                                        <img
                                            src={`https://i.pravatar.cc/30?u=${s.id}`}
                                            className="rounded-full"
                                            alt={s.name}
                                        />
                                        {s.name}
                                    </td>
                                    <td className="p-3">{s.gender}</td>
                                    <td className="p-3">{s.age}</td>
                                    <td className="p-3">{s.class}</td>
                                    <td className="p-3">{s.grade}</td>

                                    <td className="p-3 text-center">
                                        <div className="flex items-center justify-center gap-3 relative">
                                            <Phone className="w-4 h-4 text-gray-500 hover:text-blue-500 cursor-pointer" />
                                            <Mail className="w-4 h-4 text-gray-500 hover:text-green-500 cursor-pointer" />

                                            <button onClick={() => setOpenMenu(openMenu === s.id ? null : s.id)}>
                                                <MoreVertical className="w-4 h-4 text-gray-500" />
                                            </button>

                                            {openMenu === s.id && (
                                                <div className="absolute right-0 top-8 w-44 bg-white shadow-lg rounded-lg border z-20">
                                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                        ✏️ Edit
                                                    </button>
                                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                        📚 Enroll training
                                                    </button>
                                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                                        👥 Add to group
                                                    </button>
                                                    <button className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
                                                        🗑 Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
