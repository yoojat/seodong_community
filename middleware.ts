// import { NextRequest, NextResponse } from "next/server";
// import getSession from "./lib/session";

import { NextRequest, NextResponse } from "next/server";
import getSession from "./lib/session";

interface Routes {
  [key: string]: boolean;
}
const publicOnlyUrls: Routes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
  "/rituals": true,
};

// 이름은 꼭 middleware로 (middlewares는 안됨)
export async function middleware(request: NextRequest) {
  //   const session = await getSession();
  //   console.log(session);
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }

  //   아래와 같은 방법으로 새로운 쿠키를 만들 수도 있음
  //   const response = NextResponse.next();
  //   response.cookies.set("middleware-cookie", "hello!");
  //   return response;

  //   edge runtime
  //   미들웨어는 현재 Edge 런타임과 호환되는 API만 지원합니다.
  // Node.js 전용 API는 지원되지 않습니다.
  // middle ware는 빨라야되기 때문에
  // 제한된 경량의 노드라 생각하면 됨
  //   쿠키 확인, 리다이렉트 등의 기능은 사용 가능
  // https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes

  const session = await getSession();
  const exists = publicOnlyUrls[request.nextUrl.pathname];
  if (!session.id) {
    // 로그인 하지 않았다면
    if (!exists) {
      // 접속가능한 url이 없다면
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    // 로그인핸다면
    // if (exists) {
    //   // 존재하지 않는다면
    //   return NextResponse.redirect(new URL(request.nextUrl.pathname, request.url));
    // }
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
