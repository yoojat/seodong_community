"use client";

import Link from "next/link";
import "@/lib/db";
import ImageSlider from "@/components/ImageSlider";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div className="">
      <div>
        <ImageSlider />
      </div>
      <div className="flex justify-between px-4 border-b-2 border-t-2 border-gray-950 pt-10">
        <div className="flex flex-col justify-between pb-5">
          <div>
            <div className="text-2xl font-bold pb-10">
              나를 만나러 오셨군요!
            </div>
            <div className="flex flex-col">
              <div>
                서동밋가 나를 만나는 순간을
                <br />
                많이 만들어줄게요
              </div>
            </div>
          </div>
          <div>
            <Link className="text-xs" href="#">
              더보기 &gt;
            </Link>
          </div>
        </div>
        <div className="pb-10">
          <Image width={100} height={100} alt="start" src="/seodng/2.jpg" />
        </div>
      </div>

      <div className="flex justify-between px-4 border-b-2 border-t-2 border-gray-950 pt-10">
        <div className="flex flex-col justify-between pb-5">
          <div>
            <div className="text-2xl font-bold pb-10">
              서동밋레터로 시작하세요!
            </div>
            <div className="flex flex-col">
              <div>
                매주 월요일 오전 6시에
                <br />
                나를 보살피는 이야기가 도착합니다.
              </div>
            </div>
          </div>
          <div>
            <Link className="text-xs" href="#">
              더보기 &gt;
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            // fill
            width={400}
            height={400}
            alt="main_intro"
            src="/seodong/3.jpg"
          />
        </div>
      </div>

      <div className="px-5 pt-10">
        <div className="text-xl font-bold pb-5">
          매주 달라지는 서동밋 콘텐츠
        </div>
        <div className="flex px-2 border-2 border-t-2 border-gray-950 pt-10 bg-blue-50 justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between pb-5">
              <div>
                <div className="text-2xl font-bold pb-10">
                  주는 것과 받는 것 뭘 더 좋아하나요?
                </div>
                <div className="flex flex-col">
                  <div>조건과 기대 없이 줄 때 경험할 수 있는 세상에 대하여</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-96">
            <Image
              // width={300}
              // height={300}
              fill
              alt="5min ritual time"
              src="/seodong/4.jpg"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="flex gap-2 p-4 border-2 border-black w-full overflow-hidden">
          <div>
            <div className="font-bold text-blue-400 pb-3">5분 리추얼 타임</div>
            <div className="text-lg font-bold pb-5">
              일상에서 할 수 있는 작은 놀이 발견해보기
            </div>
            <div className=" w-full flex-wrap overflow-hidden line-clamp-2">
              일상에서 할 수 있는 작은 놀이 발견해 보기 우리에게는 모두 놀이
              본능 이 있어요. 다만 수많은 해야 할 일 들에 밀려 억압되어 있을
              뿐이죠. 이번 주에는 우리 안에 숨어있는 놀이 본능을 깨워봐요. 가장
              좋은 방법은? 일단 해보는 거예요. 일상에서 쉽게 할 수 있는 작은
              놀이를 발견하고 실행해 보세요. 새로운 레시피로 요리를 실험해도
              좋고, 낙엽을 모아 나만의 그림을 그려도 좋고, 음악을 틀어놓고 내
              맘대로 안무를 만들어 봐도 좋아요. 그게 무엇이든 결과가 아닌 과정
              그 자체를 즐기며 시도해 보세요. 상상력만 발휘할 수 있다면 놀이는
              어디에서든 시작될 수 있으니까요. 실천하는 모습을 모두가 볼 수
              있도록 SNS에 해시태그 #서동밋타임과 함께 올려주세요. 오늘
              #서동밋타임에 대한 생각과 경험을 이 글의 댓글로 함께 나눠주셔도
              좋아요!
            </div>
          </div>
          <div>
            <Image
              alt="sample"
              width={300}
              height={300}
              className="min-w-32 h-full object-contain align-top"
              src="/seodong/5.jpg"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="flex gap-2 p-4 border-2 border-black w-full overflow-hidden">
          <div>
            <div className="font-bold text-blue-400 pb-3">5분 리추얼 타임</div>
            <div className="text-lg font-bold pb-5">
              일상에서 할 수 있는 작은 놀이 발견해보기
            </div>
            <div className=" w-full flex-wrap overflow-hidden line-clamp-2">
              일상에서 할 수 있는 작은 놀이 발견해 보기 우리에게는 모두 놀이
              본능 이 있어요. 다만 수많은 해야 할 일 들에 밀려 억압되어 있을
              뿐이죠. 이번 주에는 우리 안에 숨어있는 놀이 본능을 깨워봐요. 가장
              좋은 방법은? 일단 해보는 거예요. 일상에서 쉽게 할 수 있는 작은
              놀이를 발견하고 실행해 보세요. 새로운 레시피로 요리를 실험해도
              좋고, 낙엽을 모아 나만의 그림을 그려도 좋고, 음악을 틀어놓고 내
              맘대로 안무를 만들어 봐도 좋아요. 그게 무엇이든 결과가 아닌 과정
              그 자체를 즐기며 시도해 보세요. 상상력만 발휘할 수 있다면 놀이는
              어디에서든 시작될 수 있으니까요. 실천하는 모습을 모두가 볼 수
              있도록 SNS에 해시태그 #서동밋타임과 함께 올려주세요. 오늘
              #서동밋타임에 대한 생각과 경험을 이 글의 댓글로 함께 나눠주셔도
              좋아요!
            </div>
          </div>
          <div>
            <Image
              alt="sample"
              width={300}
              height={300}
              className="min-w-32 h-full object-contain align-top"
              src="/seodong/14.jpg"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          서동밋에서 무엇을 찾으시나요?
        </div>
        <div className="flex flex-col border-2 border-black w-full">
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
          <Link
            className="last:border-none border-b-2 border-black py-4 hover:bg-blue-400 hover:text-white"
            href="#"
          >
            <div className="w-full flex justify-between  p-4 ">
              <div>요즘 고민이 많아요 </div>
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          3개월을 함께 하는 리추얼 마을이 열렸어요!
        </div>
        <div className="flex flex-col border-2 border-black w-full">
          <div className="relative">
            <Image
              alt="sample"
              width={300}
              height={300}
              src="/seodong/15.jpg"
            />
            <Link
              className="p-4 bg-blue-500 flex w-52 border-2 border-black font-bold  absolute left-1/2 -translate-x-1/2 bottom-3"
              href="#"
            >
              리츄얼 마을 둘러보기 <ChevronRight />
            </Link>
          </div>
          <Link className="last:border-none border-b-2 border-black " href="#">
            <div className="w-full flex justify-between items-center p-4 bg-blue-100 ">
              <div>
                <div className="pb-3 text-lg font-bold">
                  별게 다 글쓰기 마을
                </div>
                <div className="text-orange-500 font-bold text-sm">
                  마을의 멘토:북스톤
                </div>
              </div>
              <ChevronRight />
            </div>
          </Link>
          <Link className="last:border-none border-b-2 border-black " href="#">
            <div className="w-full flex justify-between items-center p-4 bg-blue-100 ">
              <div>
                <div className="pb-3 text-lg font-bold">
                  별게 다 글쓰기 마을
                </div>
                <div className="text-orange-500 font-bold text-sm">
                  마을의 멘토:북스톤
                </div>
              </div>
              <ChevronRight />
            </div>
          </Link>
          <Link className="last:border-none border-b-2 border-black " href="#">
            <div className="w-full flex justify-between items-center p-4 bg-blue-100 ">
              <div>
                <div className="pb-3 text-lg font-bold">
                  별게 다 글쓰기 마을
                </div>
                <div className="text-orange-500 font-bold text-sm">
                  마을의 멘토:북스톤
                </div>
              </div>
              <ChevronRight />
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          골든블랑과 함께하는 3주 리추얼!(11월)
        </div>
        <div className="flex border-2 border-black pl-3 overflow-scroll w-full max-w-full *:min-w-96 ">
          <Link
            href="#"
            className="px-3 py-5 flex flex-col gap-4 relative max-w-lg"
          >
            <div>
              <div className="bg-yellow-400 p-1  w-28 text-center border-2 border-black  ">
                서동밋 맛보기
              </div>
            </div>
            <div className="font-bold text-lg">
              매일의 승리를 응원하는 스파클링 브랜드, 골든블랑과 함께!
            </div>
            <div className="text-sm">
              두 리추얼을 신청하는 모든 사람에게 매일을 응원하는 마음으로 프렌치
              스파클링 (3스타) 1병, 샴페인 (5스타) 1병을 선물로 드려요.
              골든블랑이 치어리더가 되어, 리추얼의 시작과 끝을 함께 할 거예요.
            </div>
            <div className="absolute right-2 bottom-5">
              <ChevronRight />
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/16.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                className="min-w-lg"
                src="/seodong/6.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          골든블랑과 함께하는 3주 리추얼!(11월)
        </div>
        <div className="flex border-2 border-black pl-3 overflow-scroll w-full max-w-full *:min-w-96 ">
          <Link
            href="#"
            className="px-3 py-5 flex flex-col gap-4 relative max-w-lg"
          >
            <div>
              <div className="bg-yellow-400 p-1  w-28 text-center border-2 border-black  ">
                서동밋 맛보기
              </div>
            </div>
            <div className="font-bold text-lg">
              매일의 승리를 응원하는 스파클링 브랜드, 골든블랑과 함께!
            </div>
            <div className="text-sm">
              두 리추얼을 신청하는 모든 사람에게 매일을 응원하는 마음으로 프렌치
              스파클링 (3스타) 1병, 샴페인 (5스타) 1병을 선물로 드려요.
              골든블랑이 치어리더가 되어, 리추얼의 시작과 끝을 함께 할 거예요.
            </div>
            <div className="absolute right-2 bottom-5">
              <ChevronRight />
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/7.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                className="min-w-lg"
                src="/seodong/8.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          골든블랑과 함께하는 3주 리추얼!(11월)
        </div>
        <div className="flex border-2 border-black pl-3 overflow-scroll w-full max-w-full *:min-w-96 ">
          <Link
            href="#"
            className="px-3 py-5 flex flex-col gap-4 relative max-w-lg"
          >
            <div>
              <div className="bg-yellow-400 p-1  w-28 text-center border-2 border-black  ">
                서동밋 맛보기
              </div>
            </div>
            <div className="font-bold text-lg">
              매일의 승리를 응원하는 스파클링 브랜드, 골든블랑과 함께!
            </div>
            <div className="text-sm">
              두 리추얼을 신청하는 모든 사람에게 매일을 응원하는 마음으로 프렌치
              스파클링 (3스타) 1병, 샴페인 (5스타) 1병을 선물로 드려요.
              골든블랑이 치어리더가 되어, 리추얼의 시작과 끝을 함께 할 거예요.
            </div>
            <div className="absolute right-2 bottom-5">
              <ChevronRight />
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/9.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                className="min-w-lg"
                src="/seodong/10.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          골든블랑과 함께하는 3주 리추얼!(11월)
        </div>
        <div className="flex border-2 border-black pl-3 overflow-scroll max-w-screen-lg *:min-w-96 ">
          <Link
            href="#"
            className="px-3 py-5 flex flex-col gap-4 relative max-w-lg"
          >
            <div>
              <div className="bg-yellow-400 p-1  w-28 text-center border-2 border-black  ">
                서동밋 맛보기
              </div>
            </div>
            <div className="font-bold text-lg">
              매일의 승리를 응원하는 스파클링 브랜드, 골든블랑과 함께!
            </div>
            <div className="text-sm">
              두 리추얼을 신청하는 모든 사람에게 매일을 응원하는 마음으로 프렌치
              스파클링 (3스타) 1병, 샴페인 (5스타) 1병을 선물로 드려요.
              골든블랑이 치어리더가 되어, 리추얼의 시작과 끝을 함께 할 거예요.
            </div>
            <div className="absolute right-2 bottom-5">
              <ChevronRight />
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-l-2">
            <div>
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/11.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="font-bold pb-1">
                내 시간의 주인이 되는 시긴 관찰 리추얼
              </div>
              <div className="text-sm">
                나만의 방식으로 시간을 주도하는 힘 기르기
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          서동밋가 애정담아 만든 키트
        </div>
        <div className="flex gap-5 pl-3 overflow-scroll w-full max-w-full *:min-w-96 ">
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/12.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/1.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/2.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          서동밋가 애정담아 만든 키트
        </div>
        <div className="flex gap-5 pl-3 overflow-scroll w-full max-w-full *:min-w-96 ">
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/3.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/4.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/5.jpg"
              />
            </div>
            <div className="p-4 bg-blue-100">
              <div className="text-sm pb-10">
                리추얼을 통해 내가 모르던 나를 발견하는 즐거움이 있어요.
              </div>
              <div className="font-bold pb-1 flex justify-between">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5">
        <div className="text-2xl font-bold pb-5 mt-14">
          서동밋는 브랜드, 그리고 조직과도 협업해요!
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 md: overflow-scroll w-full max-w-full *:min-w-96 second-and-later">
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/6.jpg"
              />
            </div>
            <div className="p-4 bg-blue-500">
              <div className="font-bold pb-1 flex justify-center">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
          <Link href="#" className="flex flex-col border-black border-2">
            <div className="border-b-2 border-black">
              <Image
                alt="sample"
                width={300}
                height={300}
                src="/seodong/7.jpg"
              />
            </div>
            <div className="p-4 bg-blue-500">
              <div className="font-bold pb-1 flex justify-center">
                <div>내 시간의 주인이 되는 시긴 관찰 리추얼</div>
                <div>
                  <ChevronRight />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
