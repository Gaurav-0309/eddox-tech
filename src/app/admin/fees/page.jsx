"use client";
import AdminNavbar from "@/components/admin/AdminNavbar";
import { useEffect, useState } from "react";

export default function AdminFeesPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await fetch("/api/admin/fees");
        const data = await res.json();
        setPayments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const filteredPayments = payments.filter((p) => {
    const statusMatch = !statusFilter || p.status === statusFilter;
    const courseMatch = !courseFilter || p.course === courseFilter;
    return statusMatch && courseMatch;
  });

  if (loading) {
    return (
      <div className="p-10 text-center text-lg">
        Loading payments...
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <AdminNavbar />
      <h1 className="text-3xl font-bold mb-6">
        Fees & Payments (Admin)
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border px-4 py-2 rounded-md"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        <select
          className="border px-4 py-2 rounded-md"
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
        >
          <option value="">All Courses</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Development</option>
          <option value="data">Data Science</option>
          <option value="ai">AI</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="th">Name</th>
              <th className="th">Email</th>
              <th className="th">Phone</th>
              <th className="th">Course</th>
              <th className="th">Amount</th>
              <th className="th">Type</th>
              <th className="th">Status</th>
              <th className="th">Razorpay ID</th>
              <th className="th">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredPayments.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="text-center py-6 text-gray-500"
                >
                  No payments found
                </td>
              </tr>
            ) : (
              filteredPayments.map((p) => (
                <tr key={p._id} className="border-t">
                  <td className="td">{p.name}</td>
                  <td className="td">{p.email}</td>
                  <td className="td">{p.phone}</td>
                  <td className="td">{p.course}</td>
                  <td className="td">₹{p.amount}</td>
                  <td className="td">{p.paymentType}</td>
                  <td className="td">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        p.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="td">
                    {p.razorpayPaymentId}
                  </td>
                  <td className="td">
                    {new Date(p.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .th {
          text-align: left;
          padding: 12px;
          font-weight: 600;
          font-size: 14px;
          color: #374151;
        }
        .td {
          padding: 12px;
          font-size: 14px;
          color: #374151;
        }
      `}</style>
    </div>
  );
}
