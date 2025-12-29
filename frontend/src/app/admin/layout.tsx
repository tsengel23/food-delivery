import { AdminAvatar } from "./_components/AdminAvatar";
import AdminNavbar from "./_components/AdminNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AdminNavbar />
      <AdminAvatar />
      {children}
    </div>
  );
}
