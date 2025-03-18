import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "uyukigakata Profile",
  description: "Yuu's profile",
  icons:{
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",

  }
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
