import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProvider from "@/components/LenisProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project K9 Hero - Capital Campaign",
  description: "Building a Legacy for Our K-9 Heroes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ScrollProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </ScrollProvider>
      </body>
    </html>
  );
}
