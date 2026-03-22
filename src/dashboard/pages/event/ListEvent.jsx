const data = [
  { id: "LG-001", image: "", label: "Etec Logo", date: "2024-01-12" },
  { id: "LG-002", image: "", label: "Etec Logo", date: "2024-02-08" },
  { id: "LG-003", image: "", label: "Etec Logo", date: "2024-03-15" },
  { id: "LG-004", image: "", label: "Etec Logo", date: "2024-04-22" },
  { id: "LG-005", image: "", label: "Etec Logo", date: "2024-05-30" },
  { id: "LG-006", image: "", label: "Etec Logo", date: "2024-06-18" },
];

export default function ListEvent() {
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
                Event Table
              </h1>
              <p className="text-slate-400 text-sm mt-1.5">
                Manage and organize Etec brand logo assets
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl text-lg font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {data.length} Assets
              </span>

              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition">
                + Add Logo
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">

          {/* Title */}
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 text-lg font-bold text-slate-600">
            All Logos
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-640px">

              {/* Head */}
              <thead className="bg-blue-600 text-white text-sm uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Image</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-slate-100">
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-blue-50 transition duration-200"
                  >
                    {/* ID */}
                    <td className="px-6 py-4 text-sm font-mono text-slate-600">
                      {row.id}
                    </td>

                    {/* Image */}
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

                    {/* Date */}
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(row.date).toLocaleDateString()}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-center space-x-2">
                      <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 border border-blue-600 transition">
                        Update
                      </button>

                      <button className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 border border-red-600 transition">
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