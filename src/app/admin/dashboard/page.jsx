import AdminNavbar from "@/components/admin/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <AdminNavbar />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

        <form action="/api/admin/logout" method="POST">
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </form>
      </div>

      <p className="mt-4 text-gray-600">
        You are successfully logged in.
      </p>
    </div>
  );
}
