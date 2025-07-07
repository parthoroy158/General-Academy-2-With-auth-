import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"
import { Noto_Sans_Bengali } from 'next/font/google';
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/AuthProvider/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: ' Home || General Academy',
    keywords: ['General Academy', 'GeneralBD', 'BD General Academy'],
    description: 'General Academy is a premier online coaching center dedicated to empowering aspiring legal professionals with the knowledge and skills they need to excel in competitive examinations. Specializing in law-focused education, General Academy offers expertly designed courses for a wide range of legal exams, with a special emphasis on BJS',
    template: '%s || General Academy',
  },
}

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '700'], // Choose available weights
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} antialiased max-w-full mx-auto `}
      >
        <AuthProvider>
          <Navbar></Navbar>
          <Toaster />
          {children}
          <Analytics />
        </AuthProvider>

      </body>
      <Footer></Footer>

    </html>
  );
}
