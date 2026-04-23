import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "JNB Consulting | ISO & Business Consulting",
    template: "%s | JNB Consulting",
  },
  description:
    "Professional ISO certification, Lean consulting, and business consulting services in Kerala.",
  keywords: [
    "ISO certification Kerala",
    "Lean consulting Kochi",
    "Business consulting India",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}