import { Toaster } from "sonner";
import { AuthProvider } from "../context/AuthProvider";
import { CartProvider } from "../context/Cart-Context";
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
      <CartProvider>{children}</CartProvider>
      <Footer />
    </div>
  );
}
