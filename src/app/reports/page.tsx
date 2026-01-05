"use client";

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reports & Analytics</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ReportCard title="Total Orders" value="128" />
        <ReportCard title="Delivered" value="96" />
        <ReportCard title="Pending" value="32" />
        <ReportCard title="Revenue" value="₹2,45,000" />
      </div>

      {/* Charts Placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4 text-gray-500">
          Orders Status Chart (Coming Soon)
        </div>
        <div className="border rounded-lg p-4 text-gray-500">
          Revenue Trend Chart (Coming Soon)
        </div>
      </div>

      {/* Driver Performance */}
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Driver Performance</h2>
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Driver</th>
              <th className="p-2 border">Trips</th>
              <th className="p-2 border">Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Ramesh</td>
              <td className="p-2 border">24</td>
              <td className="p-2 border">20</td>
            </tr>
            <tr>
              <td className="p-2 border">Suresh</td>
              <td className="p-2 border">18</td>
              <td className="p-2 border">15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Reusable Card */
function ReportCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold">{value}</h3>
    </div>
  );
}
