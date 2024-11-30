import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ListProduct from "@/components/list-ritual";
import db from "@/lib/db";
import ListRitual from "@/components/list-ritual";

{
  /* <div className="flex gap-5 pl-3 overflow-scroll w-full max-w-full *:min-w-96 "> */
}

async function getRituals() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const rituals = await db.ritual.findMany({
    select: {
      title: true,
      subtitle: true,
      start: true,
      photo: true,
      period: true,
      id: true,
    },
  });

  return rituals;
}

export default async function Ritual() {
  const rituals = await getRituals();
  return (
    <div className="mx-auto">
      <div className="mx-auto px-7 mt-5  flex flex-col gap-2 ritual-category-1">
        <div className="ritual-category-2">
          <div className="category-title">
            <div>카테고리별</div>
          </div>
          <div className="category  overflow-scroll w-full">
            <div className="bg-orange-500 font-bold">전체보기</div>
            <div>마음기록</div>
            <div>일상기록</div>
            <div>책·글쓰기</div>
            <div>움직임·음식</div>
            <div>나만의 일·공부</div>
            <div>마음방해꾼 타파</div>
            <div>연말 회고</div>
          </div>
        </div>
        <div className="ritual-category-2">
          <div className="category-title">
            <div>기간별</div>
          </div>
          <div className="category overflow-scroll w-full">
            <div className="bg-orange-500 font-bold">전체보기</div>
            <div>3주</div>
            <div>3개월</div>
          </div>
        </div>
      </div>
      <div className="px-5 pt-5 mb-5  max-w-screen-3xl">
        <div className="flex justify-center gap-5 pl-3 overflow-scroll w-full max-w-full *:min-w-96 flex-wrap">
          {rituals.map((ritual) => (
            <ListRitual key={ritual.id} {...ritual} />
          ))}
        </div>
      </div>
    </div>
  );
}
