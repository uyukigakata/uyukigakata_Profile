import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
//import NavFooter from "@/components/SideMenu/NavFooter/NavFooter";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "uyukigakata Profile",
  description: "Yuu's profile",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
       
      </body>
    </html>
  );
}
