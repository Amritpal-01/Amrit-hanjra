import { Inter, Julius_Sans_One } from "next/font/google";
import "./globals.css";
import { NotificationProvider } from "@/functions/Notifications/NotificationContext";
import { NavigationProvider } from "@/contexts/NavigationContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Julius = Julius_Sans_One({
  variable: "--font-julius",
  subsets: ["latin"],
  weight: "400",
});


export const metadata = {
  title: "Amrit's protfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#777777] h-screen overflow-auto`}
      >
        <NotificationProvider>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </NotificationProvider>
      </body>
    </html>
  );
}
