import "./globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
