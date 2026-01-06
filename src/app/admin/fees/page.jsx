"use client";

import { useState } from "react";
import feesData from "@/data/fees";
import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminFeesPage() {
  const [statusFilter, setStatusFilter] = useState("");
  const [courseFilter, setCourseFilter] = useState("");

  const filteredFees = feesData.filter((fee) => {
    const statusMatch =
      !statusFilter || fee.status === statusFilter;
    const courseMatch =
      !courseFilter || fee.course === courseFilter;

    return statusMatch && courseMatch;
  });

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
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="AI">AI</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="th">Name</th>
              <th className="th">Email</th>
              <th className="th">Course</th>
              <th className="th">Amount</th>
              <th className="th">Type</th>
              <th className="th">Status</th>
              <th className="th">Razorpay ID</th>
              <th className="th">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredFees.map((fee) => (
              <tr key={fee.id} className="border-t">
                <td className="td">{fee.name}</td>
                <td className="td">{fee.email}</td>
                <td className="td">{fee.course}</td>
                <td className="td">₹{fee.amount}</td>
                <td className="td">{fee.paymentType}</td>
                <td className="td">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      fee.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : fee.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {fee.status}
                  </span>
                </td>
                <td className="td">{fee.razorpayPaymentId}</td>
                <td className="td">{fee.date}</td>
              </tr>
            ))}
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
