/** @format */

import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "@/functions/Notifications/NotificationContext";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amrit's Portfolio",
  description: "Welcome to Amrit's Portfolio - A showcase of projects, skills, and experiences in web development and design.",
  icon: './favicon.ico'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[#202021]`}
      >
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  );
}
