import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import {
  BellIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

// const scDream = localFont({
//   src: "./fonts/SCDream1.otf",
//   variable: "--font-sc-dream",
//   weight: "100 900",
// });

const scDream = localFont({
  src: [
    {
      path: "./fonts/SCDream1.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/SCDream2.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/SCDream3.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SCDream4.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SCDream5.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SCDream6.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SCDream7.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/SCDream8.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/SCDream9.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sc-dream",
});

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
  title: {
    template: "%s | 서동 커뮤니티",
    default: "고개서동",
  },
  description: "리츄얼 하세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${scDream.variable} antialiased`}
      >
        <div className="bg-blue-500 py-4 text-center text-xs font-semibold">
          🔔 11월 11추얼 신청중! ~ 11.1(금)까지!
        </div>
        <div className="bg-white lg:bg-blue-100  py-5 top-1 border-y-2 border-black">
          <div className="w-full max-w-screen-xl flex justify-between mx-auto">
            <div className="flex">
              <Link className="px-5 font-bold" href={"/"}>
                서동밋
              </Link>
              <div className="hidden lg:flex">
                <div className="flex gap-5 pr-5">
                  <Link href="#">가이드</Link>
                  <Link href="/rituals">프로그램</Link>
                  <Link href="#">커뮤니티</Link>
                  <Link href="#">마이리츄얼</Link>
                </div>
                <div className="flex border-l-2 border-black pl-5">
                  <Link href="#">비지니스 문의</Link>
                </div>
              </div>
            </div>
            <div className="flex gap-4 text-black [&>a>*]:fill-black [&>*]:size-6 [&>a:nth-child(odd)>*]:fill-transparent  [&>a>*]:stroke-2 [&>a>*]:stroke-black mr-5">
              <Link href="#">
                <BookmarkIcon />
              </Link>
              <Link href="#">
                <BellIcon />
              </Link>
              <Link href="#">
                <MagnifyingGlassIcon />
              </Link>
              <Link href="#">
                <ShoppingBagIcon />
              </Link>
              <Link
                className="text-xs !w-20 hidden md:flex justify-center "
                href="/login"
              >
                <Image
                  alt="로그인"
                  width={25}
                  height={10}
                  src="/seodong/1.jpg"
                />
                <span className="pl-2 ">로그인</span>
              </Link>
            </div>
          </div>
        </div>
        {children}
        <footer className="px-7 mb-24">
          <div>
            <div className="flex flex-col pt-5 *:text-lg font-medium *:py-2 mb-10">
              <Link href="#">서비스 소개</Link>
              <Link href="#">공지사항</Link>
              <Link href="#">자주 묻는 질문</Link>
              <Link href="#">문의하기</Link>
              <Link href="#">밑미레터 구독하기</Link>
              <Link href="#">이용약관 | 개인정보처리방침</Link>
            </div>
            <div className="flex *:text-2xl gap-3 mb-5">
              <FaInstagram />
              <FaFacebook />
              <FaYoutube />
            </div>
            <div className="*:text-xs *:py-1">
              <div>(주)서동 | 대표이사 송병근</div>
              <div>사업자번호 162-88-01794</div>
              <div>대표 번호 010-3548-4572</div>
              <div>*전화 문의가 어렵습니다. 채널톡으로 문의 부탁드려요</div>
              <div>통신판매신고번호 제 1111-부산서동-22222호</div>
              <div>부산시 서동 999, 1층</div>
              <div>Ⓒs eodong all rights reserved</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
