import Image from "next/image";

export default function Posts() {
  return (
    <div className="mx-auto px-10 w-full max-w-screen-lg mt-10 mb-20">
      <div className="text-3xl font-bold mb-10"> 서동밋 광장</div>
      <div className="flex gap-2 flex-col mb-10">
        <div>
          서동의 다양한 사람들과 함께 소통하며 이야기를 나눌 수 있는 열린
          공간입니다.
        </div>
        <div>
          관심 있는 주제의 모임에서 편하게 생각을 나누고 소중한 인연을 만들어
          보세요!
        </div>
        마치 동네 공원처럼 누구나 편안하게 머물며 즐길 수 있는 서동밋 광장이
        되길 바랍니다.
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm w-full">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">5분 미니 타임</p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              나의 하루를 솔직하게 적어봐요!
            </h2>
            <p className="text-sm text-gray-700 line-clamp-2">
              오늘 하루 동안 내가 느꼈던 감정들을 솔직하게 적어보세요. 기쁨,
              슬픔, 분노, 설렘 등 어떤 감정이든 괜찮아요. 우리는 자주 감정을
              회피하거나 억누르는 습관이 있죠. 감정을 적어보며 스스로에게
              솔직해지는 시간을 가져보세요.
            </p>
            <div className="flex items-center mt-3 text-gray-500 text-sm">
              <span>서동밋</span>
              <span className="mx-2">•</span>
              <span>16</span>
            </div>
          </div>

          <div className="w-20 h-20 flex-shrink-0 ml-4 relative">
            <Image
              src="https://via.placeholder.com/80"
              alt="책 이미지"
              fill
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm w-full">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1"> 서동 심리 이야기</p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              있는 그대로의 나를 받아들일 준비가 되셨나요?
            </h2>
            <p className="text-sm text-gray-700 line-clamp-2">
              나의 단점을 숨기고, 항상 좋은 모습만 보이려 애쓰고 있지는 않나요?
              하지만 우리 모두는 완벽하지 않다는 사실을 잊지 말아야 해요. 나의
              있는 그대로의 모습을 받아들이는 작은 용기를 가져보세요.
            </p>
            <div className="flex items-center mt-3 text-gray-500 text-sm">
              <span>서동밋</span>
              <span className="mx-2">•</span>
              <span>16</span>
            </div>
          </div>

          <div className="w-20 h-20 flex-shrink-0 ml-4 relative">
            <Image
              src="https://via.placeholder.com/80"
              alt="책 이미지"
              fill
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm w-full">
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1"> 나만의 서동 타임</p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              나의 취약한 모습을 적어보세요.
            </h2>
            <p className="text-sm text-gray-700 line-clamp-2">
              이번 주에는 내가 숨기고 싶어 했던 나의 불완전한 모습을 적어보는
              시간을 가져보세요. 완벽함 뒤에 숨겨진 나의 진짜 모습과 마주하며,
              스스로를 조금 더 이해할 수 있을 거예요.
            </p>
            <div className="flex items-center mt-3 text-gray-500 text-sm">
              <span>서동밋</span>
              <span className="mx-2">•</span>
              <span>16</span>
            </div>
          </div>

          <div className="w-20 h-20 flex-shrink-0 ml-4 relative">
            <Image
              src="https://via.placeholder.com/80"
              alt="책 이미지"
              fill
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
