'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";


export default function PaymentDetailsPage() {
  // Course pricing mapping
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const coursePrices = {
    web: 25000,
    mobile: 30000,
    data: 35000,
    ai: 40000
  };

  const [formData, setFormData] = useState({
    firstName: '',
    mobileNumber: '',
    address: '',
    pinCode: '',
    country: 'India',
    state: '',
    currency: 'INR',
    amount: '',
    paymentType: '',
    email: '',
    counsellor: 'counsellor',
    referralName: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const loadRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};


  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    const courseAmount = coursePrices[selectedCourse] || '';
    
    setFormData(prev => ({
      ...prev,
      course: selectedCourse,
      amount: courseAmount
    }));
  };

  const handlePayment = async (e) => {
  e.preventDefault();

  if (isLoading) return; // prevent double click
  setIsLoading(true);


  if (!formData.amount || !formData.email || !formData.firstName) {
    alert("Please fill all required fields");
    return;
  }

  const sdkLoaded = await loadRazorpay();
  if (!sdkLoaded) {
    alert("Razorpay SDK failed to load");
    setIsLoading(false);
    return;
  }

  // 1️⃣ Create order
  const res = await fetch("/api/razorpay/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: formData.amount }),
  });

  const order = await res.json();

  // 2️⃣ Open Razorpay
  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: order.amount,
    currency: order.currency,
    name: "EDDOX TECHNOLOGY",
    description: "Course Payment",
    order_id: order.id,
    prefill: {
      name: formData.firstName,
      email: formData.email,
      contact: formData.mobileNumber,
    },

    
    handler: async function (response) {
  const verify = await fetch("/api/razorpay/verify-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...response,
      userData: formData,
    }),
  });


      const result = await verify.json();

      if (result.success) {
  router.push("/fees/success");
} else {
  alert("Payment verification failed");
  setIsLoading(false);
}

    },
    theme: {
      color: "#2563eb",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-5">
      <div className="flex max-w-7xl w-full bg-white rounded-xl shadow-2xl overflow-hidden max-lg:flex-col">
        {/* Logo Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-16 flex items-center justify-center min-w-[400px] max-lg:min-w-full max-lg:p-12">
          <div className="text-center text-white">
            <div className="w-48 h-48 mx-auto mb-5 bg-blue-500 rounded-2xl flex items-center justify-center text-7xl font-bold">
              💳
            </div>
            <h2 className="text-3xl font-semibold mt-3">Secure Payment</h2>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-1 p-16 max-lg:p-10 max-sm:p-8">
          <div className="mb-10">
            <h1 className="text-blue-600 text-4xl font-semibold mb-3 max-sm:text-3xl">Payment Details</h1>
            <p className="text-gray-600 text-base">Complete your payment information to proceed</p>
          </div>

          <div className="space-y-5">
            {/* First Name & Mobile Number */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <input
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Address & Pin Code */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={formData.pinCode}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Country & State */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center'
                }}
              >
                <option value="India">India</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center'
                }}
              >
                <option value="">Select State</option>
                <option value="rj">Rajasthan</option>
                <option value="mh">Maharashtra</option>
                <option value="dl">Delhi</option>
                <option value="ka">Karnataka</option>
              </select>
            </div>

            {/* Currency & Amount */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center'
                }}
              >
                <option value="INR">INR</option>
                <option value="inr">INR - Indian Rupee</option>
                <option value="usd">USD - US Dollar</option>
                <option value="eur">EUR - Euro</option>
              </select>
              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Payment Type & Email */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              {/* <select
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-white cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 16px center'
                }}
              >
                <option value="">Select Payment Type</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
                <option value="wallet">Wallet</option>
              </select> */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Counsellor & Referral */}
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <input
                type="text"
                name="counsellor"
                placeholder="counsellor"
                value={formData.counsellor}
                onChange={handleChange}
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <input
                type="text"
                name="referralName"
                placeholder="Referal Name (Optional)"
                value={formData.referralName}
                onChange={handleChange}
                className="px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Course Selection */}
            <select
              name="course"
              value={formData.course}
              onChange={handleCourseChange}
              required
              className="w-full px-4 py-3.5 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all appearance-none bg-white cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 16px center'
              }}
            >
              <option value="">Select Course</option>
              <option value="web">Web Development - ₹25,000</option>
              <option value="mobile">Mobile Development - ₹30,000</option>
              <option value="data">Data Science - ₹35,000</option>
              <option value="ai">Artificial Intelligence - ₹40,000</option>
            </select>

            {/* Submit Button */}
            <button
  onClick={handlePayment}
  disabled={isLoading}
  className={`w-full px-4 py-4 rounded-md text-lg font-semibold transition-all duration-300 mt-3 ${
    isLoading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
  }`}
>
  {isLoading ? "Processing..." : "Proceed to Pay"}
</button>


          </div>
        </div>
      </div>
    </div>
  );
}