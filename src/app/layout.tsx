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
  title: {
    default: "photodairy",
    template: "photodairy | %s",
  },
  description: "photos",
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
          <header className='sticky top-0 bg-white border-b border-gray-300'>
            <Navbar />
          </header>
          <main>
            {/* // 위치가 중요함 -> 팔로잉 목록, 포스트 리스트 부분만 데이터 불러올것임 */}
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id='portal' />
      </body>
    </html>
  );
}
