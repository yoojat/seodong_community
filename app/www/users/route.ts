// route는 특별한 파일
//API 라우트라는 것을 명시
// 넥스트 js가 인식
// 컴포넌트를 렌더링하는 것이 아님

import { NextRequest } from "next/server";

// 리다이렉트 혹은 데이터를 보내줌
export async function GET(request: NextRequest) {
  console.log(request);
  return Response.json({
    ok: true,
  });
}

export async function POST(request: NextRequest) {
  // NextRequest에는 쿠키, 위치, 아이피와 같은 정보를 볼 수도 있음
  const data = await request.json();
  console.log("user log in");
  return Response.json(data);
}
