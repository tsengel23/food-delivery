import AdminNavbar from "./_components/AdminNavbar";
import { AdminOrders } from "./_components/AdminOrders";

export default function AdminPage() {
  return (
    <div className="w-screen h-screen border-4 border-yellow-500  relative">
      <div className="m-6 border absolute object-cover inset-0 z-10">
        {/* <AdminNavbar /> */}
        <AdminOrders />
      </div>
    </div>
  );
}
