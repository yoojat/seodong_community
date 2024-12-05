import Image from "next/image";
import React from "react";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">서동밋 가이드</h1>
          <p className="mt-2 text-lg">
            서동밋의 모든 기능과 사용 방법을 안내합니다.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-10 px-6">
        {/* Section 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600">
            1. 회원 가입 및 로그인
          </h2>
          <p className="mt-4 text-gray-700">
            서동밋에 가입하려면, 상단 메뉴의 &quot회원가입&quot 버튼을
            클릭하세요. 이미 계정이 있다면 &quot로그인&quot을 통해 접속할 수
            있습니다.
          </p>
          <div className="mt-6">
            <Image
              width={300}
              height={300}
              src="/guide/1.webp"
              alt="회원가입 화면"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600">2. 게시판 사용</h2>
          <p className="mt-4 text-gray-700">
            관심 있는 주제에 대해 자유롭게 글을 쓰고, 다른 사람들과 소통하세요.
            게시글 작성, 수정, 댓글 기능이 지원됩니다.
          </p>
          <div className="mt-6">
            <Image
              width={300}
              height={300}
              src="/guide/2.webp"
              alt="게시판 사용 화면"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-600">
            3. 모임 생성 및 참여
          </h2>
          <p className="mt-4 text-gray-700">
            새로운 모임을 만들거나 기존 모임에 참여할 수 있습니다. 모임
            페이지에서 상세한 일정과 소통 기능을 확인하세요.
          </p>
          <div className="mt-6">
            <Image
              width={300}
              height={300}
              src="/guide/3.webp"
              alt="모임 페이지 화면"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-bold text-blue-600">
            4. 업사이클링 프로젝트
          </h2>
          <p className="mt-4 text-gray-700">
            환경 보호를 위한 업사이클링 프로젝트에 참여해 보세요. 지역 자원을
            활용한 창의적인 활동이 가능합니다.
          </p>
          <div className="mt-6">
            <Image
              width={300}
              height={300}
              src="/guide/4.webp"
              alt="업사이클링 프로젝트 화면"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 서동밋. 모든 권리 보유.</p>
          <p className="mt-2">문의: support@seodongmit.com</p>
        </div>
      </footer>
    </div>
  );
}
