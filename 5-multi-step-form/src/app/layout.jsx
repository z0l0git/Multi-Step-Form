import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Multi-Step Form",
  description: "A user-friendly multi-step form for streamlined data collection.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`flex min-h-screen items-center justify-center bg-gray-100 ${inter.className}`}>{children}</body>
    </html>
  );
};

export default RootLayout;
