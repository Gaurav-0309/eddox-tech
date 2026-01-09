export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md w-full">
        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-2xl font-bold text-green-700 mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>

        <a
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
