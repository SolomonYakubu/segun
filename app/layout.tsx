import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const inter = Ubuntu({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Segun the gangstar",
  description: "Enjoy chat with street guy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
