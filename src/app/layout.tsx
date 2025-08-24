import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan's Professional House Sitting Services | Europe & Worldwide",
  description: "Professional house sitting services across Europe and worldwide. Trusted, reliable, and experienced house sitter for your home, pets, and plants.",
  keywords: "house sitter, house sitting, pet sitting, Europe, professional, reliable, trusted",
  authors: [{ name: "Ryan" }],
  openGraph: {
    title: "Ryan's Professional House Sitting Services",
    description: "Professional house sitting services across Europe and worldwide",
    type: "website",
  },
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
