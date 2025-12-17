import { Footer } from "./_components/Footer";
import { Navigation } from "./_components/navigation/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
