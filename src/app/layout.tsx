import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const NotoSans = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "feeds",
  description: "social app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={NotoSans.className}>
      <body className='w-full max-w-screen-xl overflow-auto mx-auto'>
        <AuthContext>
          {/* // auth context data 사용할 수 있다. */}
          <header className='sticky top-0 bg-white border-b'>
            <Navbar />
          </header>
        </AuthContext>
        <main>
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
      </body>
    </html>
  );
}
