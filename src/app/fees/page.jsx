"use client";

import { useState } from "react";

export default function FeesPage() {
  const [form, setForm] = useState({
    firstName: "",
    mobile: "",
    address: "",
    pincode: "",
    country: "India",
    state: "",
    currency: "INR",
    amount: "",
    paymentType: "",
    email: "",
    counsellor: "",
    referral: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-10">PAYMENT DETAILS</h1>

      <div className="bg-white rounded-xl shadow p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="input"
          />

          {/* Mobile */}
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="input"
          />

          {/* Address */}
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="input"
          />

          {/* Pincode */}
          <input
            type="text"
            name="pincode"
            placeholder="Pin Code"
            value={form.pincode}
            onChange={handleChange}
            className="input"
          />

          {/* Country */}
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="input"
          >
            <option>India</option>
          </select>

          {/* State */}
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select State</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
          </select>

          {/* Currency */}
          <select
            name="currency"
            value={form.currency}
            onChange={handleChange}
            className="input"
          >
            <option>INR</option>
          </select>

          {/* Amount */}
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            className="input"
          />

          {/* Payment Type */}
          <select
            name="paymentType"
            value={form.paymentType}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Payment Type</option>
            <option>Course Fees</option>
            <option>Internship Fees</option>
          </select>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          {/* Counsellor */}
          <input
            type="text"
            name="counsellor"
            placeholder="Counsellor"
            value={form.counsellor}
            onChange={handleChange}
            className="input"
          />

          {/* Referral */}
          <input
            type="text"
            name="referral"
            placeholder="Referral Name (Optional)"
            value={form.referral}
            onChange={handleChange}
            className="input"
          />

          {/* Course */}
          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="input md:col-span-1"
          >
            <option value="">Select Course</option>
            <option>SAP FI</option>
            <option>Digital Marketing</option>
            <option>Data Science</option>
            <option>Workday HCM</option>
          </select>
        </div>

        {/* Button */}
        <div className="flex justify-end mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium">
            Proceed to Pay
          </button>
        </div>
      </div>

      {/* Tailwind reusable input style */}
      <style jsx>{`
        .input {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
        }

        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 1px #2563eb;
        }
      `}</style>
    </div>
  );
}
