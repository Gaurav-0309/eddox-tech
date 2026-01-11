"use client";
// export const metadata = {
//   title: "Online Course Registration | Enroll Now at EDDOX Technology India",
//   description:
//     "Register online for IT courses at EDDOX Technology in India. Enroll now for Full Stack, SAP, Data Science and other professional training programs with easy online admission.",
//   keywords: [
//     "online course registration India",
//     "IT course admission online",
//     "software training registration India",
//     "enroll IT course India",
//     "EDDOX Technology admission",
//   ],
// };


import { useState } from "react";

export default function OnlineRegistration() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    branch: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
const [successMsg, setSuccessMsg] = useState("");
const [errorMsg, setErrorMsg] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  try {
    const res = await fetch("/api/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setSuccessMsg("Registration successful! We will contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        branch: "",
        address: "",
        city: "",
        country: "",
        zipcode: "",
        amount: "",
      });
    } else {
      setErrorMsg(data.message || "Something went wrong.");
    }
  } catch (error) {
    setErrorMsg("Server error. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* MAIN CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8fafc] rounded-xl shadow-lg overflow-hidden">

          {/* LEFT BRAND PANEL */}
          <div className="hidden lg:flex items-center justify-center bg-gradient-to-b from-[#e9f3fb] to-[#bcdcf5] p-10">
            <div className="text-center">
              <img
                src="/images/eddox-logo.jpg"  // put logo in public folder
                alt="Eddox Technology"
                className="mx-auto w-72"
              />
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="p-8 md:p-12">
            
            {/* Heading */}
            <h2 className="text-2xl font-semibold text-blue-700">
              Online Registration Form
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Register online today and take the first step towards success!
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">


              {/* Name */}
              <input
                type="text"
                name = "name"
                value={formData.name}
                onChange = {handleChange}
                placeholder="Enter Your Name"
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name = "email"
                  value={formData.email}
                   onChange={handleChange}
                  placeholder="Enter Email Address"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="tel"
                  name = "phone"
                  value={formData.phone}
                   onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Course & Branch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option>Select Course</option>
                  <option>Full Stack</option>
                  <option>Data Science</option>
                  <option>SAP</option>
                </select>

                <select className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                >
                  <option>Select Branch</option>
                  <option>Noida</option>
                  <option>Hyderabad</option>
                  <option>Bangalore</option>
                </select>
              </div>

              {/* Address */}
              <textarea
                rows="2"
                placeholder="Enter Address"
                name = "address"
                value={formData.address}
                 onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />

              {/* City & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name = "city"
                value={formData.city}
                 onChange={handleChange}
                  placeholder="Enter City Name"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  name = "country"
                value={formData.country}
                 onChange={handleChange}
                  placeholder="Enter Country Name"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Zipcode & Amount */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name = "zipcode"
                value={formData.zipcode}
                 onChange={handleChange}
                  placeholder="Enter ZIP Code"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
                <input
                  type="text"
                  name = "amount"
                value={formData.amount}
                 onChange={handleChange}
                  placeholder="Enter Amount"
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {successMsg && (
  <p className="rounded-md bg-green-100 p-2 text-sm text-green-700">
    {successMsg}
  </p>
)}

{errorMsg && (
  <p className="rounded-md bg-red-100 p-2 text-sm text-red-700">
    {errorMsg}
  </p>
)}


              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                  className={`w-full rounded-md py-2 text-white transition
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
              >
  {loading ? "Submitting..." : "Submit Registration"}
</button>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
