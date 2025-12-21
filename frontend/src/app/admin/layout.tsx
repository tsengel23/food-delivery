import AdminNavbar from "./_components/AdminNavbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex">
      <AdminNavbar />

      {children}
    </div>
  );
}
