import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechGear Pro - E-commerce Analytics Dashboard",
  description: "Real-time analytics and insights for electronics retailers. Track revenue, inventory, and customer metrics across all channels.",
  keywords: "e-commerce dashboard, analytics, real-time data, inventory management, revenue tracking, electronics retail",
  authors: [{ name: "TechGear Pro Team" }],
  openGraph: {
    title: "TechGear Pro - E-commerce Analytics Dashboard",
    description: "Real-time analytics and insights for electronics retailers",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechGear Pro Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechGear Pro - E-commerce Analytics Dashboard",
    description: "Real-time analytics and insights for electronics retailers",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
