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
        <div className="bg-orange-500 py-4 text-center text-xs font-semibold">
          🔔 11월 11추얼 신청중! ~ 11.1(금)까지!
        </div>
        <div className="bg-white lg:bg-orange-100  py-5 top-1 border-y-2 border-black">
          <div className="w-full max-w-screen-xl flex justify-between mx-auto">
            <div className="flex">
              <Link className="px-5" href={"/"}>
                <svg
                  width="104"
                  height="18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="css-0"
                >
                  <path
                    d="M16.528 16.24V9.236c0-.348-.026-.695-.078-1.04a2.384 2.384 0 0 0-.284-.862 1.598 1.598 0 0 0-.558-.58 1.742 1.742 0 0 0-.92-.221c-.332-.01-.66.07-.949.232-.27.153-.503.365-.68.62-.185.27-.32.572-.402.89-.085.339-.129.688-.128 1.038v6.927H8.267V8.926a3.03 3.03 0 0 0-.44-1.746 1.564 1.564 0 0 0-1.4-.647 1.827 1.827 0 0 0-1.574.801 3.295 3.295 0 0 0-.558 1.957v6.949H.011V3.42H4.14v1.775h.05c.158-.284.345-.55.558-.796.245-.27.53-.499.848-.68.348-.209.723-.37 1.116-.475a5.185 5.185 0 0 1 3.715.381c.655.385 1.184.95 1.523 1.625a4.85 4.85 0 0 1 1.673-1.597 4.844 4.844 0 0 1 2.471-.592 4.722 4.722 0 0 1 2.232.476c.57.294 1.063.716 1.439 1.232a5.02 5.02 0 0 1 .792 1.703c.164.6.248 1.219.25 1.84v7.928h-4.278ZM35.321 8.513l.112.503c.037.158.065.319.083.48l-9.142 2.046c.105.33.286.631.53.879.245.247.535.447.853.591.333.146.687.24 1.049.282.373.039.75.017 1.115-.066a3.562 3.562 0 0 0 1.59-.74c.387-.325.696-.731.904-1.19l3.297 1.162a5.942 5.942 0 0 1-1.891 2.498 8.08 8.08 0 0 1-3.23 1.443 8.348 8.348 0 0 1-2.79.16 6.766 6.766 0 0 1-2.51-.785 6.083 6.083 0 0 1-1.963-1.736 7.054 7.054 0 0 1-1.188-2.692 7.177 7.177 0 0 1-.095-2.89c.15-.868.478-1.696.965-2.433a6.565 6.565 0 0 1 1.846-1.824 7.556 7.556 0 0 1 2.577-1.106A7.052 7.052 0 0 1 30.1 2.99c.826.125 1.613.431 2.304.896a6.31 6.31 0 0 1 1.79 1.84c.54.856.922 1.799 1.127 2.787Zm-4.183-.73a2.54 2.54 0 0 0-1.005-1.542 2.435 2.435 0 0 0-2.024-.288c-.38.083-.743.23-1.072.437a3.163 3.163 0 0 0-.77.713c-.2.27-.348.576-.434.901-.085.32-.1.653-.045.979l5.35-1.2ZM49.852 8.512l.117.503c.038.158.066.319.084.48l-9.148 2.046c.113.332.304.634.558.879.243.25.533.45.853.591.333.146.687.241 1.049.282.373.039.75.016 1.116-.066a3.59 3.59 0 0 0 1.59-.74c.385-.325.692-.732.898-1.19l3.302 1.161a5.959 5.959 0 0 1-1.897 2.499A8.016 8.016 0 0 1 45.15 16.4a8.38 8.38 0 0 1-2.79.16 6.702 6.702 0 0 1-2.504-.785 6.117 6.117 0 0 1-1.969-1.736 7.739 7.739 0 0 1-1.277-5.6c.152-.866.48-1.694.965-2.432a6.663 6.663 0 0 1 1.846-1.824 7.65 7.65 0 0 1 2.577-1.105 7.057 7.057 0 0 1 2.667-.105c.827.124 1.616.43 2.309.895a6.31 6.31 0 0 1 1.79 1.841c.531.861.9 1.811 1.088 2.803Zm-4.183-.73a2.54 2.54 0 0 0-1.004-1.542 2.418 2.418 0 0 0-2.02-.288 3.32 3.32 0 0 0-1.07.437 3.09 3.09 0 0 0-.776.713c-.2.27-.345.576-.43.901a2.235 2.235 0 0 0-.044.978l5.344-1.2ZM103.61 8.513l.112.503c.037.158.065.319.083.48l-9.142 2.046c.104.33.286.63.53.879.245.247.534.447.853.591.334.145.687.24 1.049.282.373.038.75.016 1.115-.066a3.54 3.54 0 0 0 1.585-.74 3.36 3.36 0 0 0 .903-1.19l3.297 1.161a5.943 5.943 0 0 1-1.891 2.499 8.077 8.077 0 0 1-3.23 1.443 8.349 8.349 0 0 1-2.789.16 6.765 6.765 0 0 1-2.51-.785 6.116 6.116 0 0 1-1.964-1.736 7.739 7.739 0 0 1-1.283-5.583c.15-.868.478-1.696.965-2.432a6.564 6.564 0 0 1 1.847-1.824 7.65 7.65 0 0 1 2.577-1.106 7.057 7.057 0 0 1 2.666-.105c.826.124 1.613.43 2.304.896a6.319 6.319 0 0 1 1.791 1.84 8.448 8.448 0 0 1 1.132 2.787Zm-4.184-.73a2.54 2.54 0 0 0-1.004-1.542 2.435 2.435 0 0 0-2.025-.288c-.38.083-.742.23-1.07.437a3.163 3.163 0 0 0-.77.713c-.2.272-.347.577-.436.901-.09.322-.108.66-.055.99l5.36-1.211ZM57.126 6.56v4.91c-.035.478.088.956.352 1.36a1.502 1.502 0 0 0 1.255.447c.222-.001.444-.018.663-.05.192-.028.38-.08.558-.155l.084 3.107c-.364.119-.737.21-1.116.27a7.953 7.953 0 0 1-1.35.117 6.37 6.37 0 0 1-2.18-.326 3.4 3.4 0 0 1-1.418-.929 3.598 3.598 0 0 1-.764-1.443 6.954 6.954 0 0 1-.234-1.874V6.577H50.89v-3.14h2.052V.927l4.184-.911v3.421h3.035v3.14l-3.035-.016ZM84.656 16.24V9.236c0-.348-.026-.695-.078-1.04a2.62 2.62 0 0 0-.284-.862 1.597 1.597 0 0 0-.558-.58 1.764 1.764 0 0 0-.926-.221 1.866 1.866 0 0 0-.948.232 2.112 2.112 0 0 0-.675.62c-.185.27-.32.572-.402.89a4.24 4.24 0 0 0-.128 1.038v6.927h-4.262V8.926a3.03 3.03 0 0 0-.44-1.746 1.564 1.564 0 0 0-1.4-.647 1.827 1.827 0 0 0-1.574.801 3.294 3.294 0 0 0-.558 1.957v6.949H68.14V3.42h4.128v1.775h.045c.166-.285.362-.552.585-.796.244-.268.528-.498.843-.68a4.523 4.523 0 0 1 1.115-.475 5.185 5.185 0 0 1 3.715.381 3.884 3.884 0 0 1 1.518 1.625 4.917 4.917 0 0 1 1.673-1.597 4.844 4.844 0 0 1 2.471-.592 4.722 4.722 0 0 1 2.232.476c.57.294 1.063.716 1.439 1.232a5.13 5.13 0 0 1 .792 1.703c.162.6.245 1.22.245 1.84v7.928h-4.284Z"
                    fill="#0D0806"
                  ></path>
                </svg>
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
                  src="https://www.nicetomeetme.kr/meetme-illust/default_profile.png?w=100&q=75"
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
