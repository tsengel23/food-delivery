import { AdminAvatar } from "./_components/AdminAvatar";
import AdminNavbar from "./_components/AdminNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <AdminNavbar />
      <div className="w-full bg-secondary p-6 ">
        <AdminAvatar />
        {children}
      </div>
    </div>
  );
}
