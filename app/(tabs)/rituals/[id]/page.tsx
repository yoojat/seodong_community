import db from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface RitualParams {
  id: string;
}

async function getRitual(id: number) {
  const ritual = await db.ritual.findUnique({
    where: { id },
    include: {
      user: { select: { username: true } },
    },
  });
  return ritual;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function RitualDetail({ params }: { params: any }) {
  // Validate params.id
  if (!params?.id || typeof params.id !== "string") {
    return notFound();
  }

  const { id: rid } = params as RitualParams;
  const id = Number(rid);

  if (isNaN(id)) {
    return notFound();
  }

  // Fetch ritual data
  const ritual = await getRitual(id);
  if (!ritual) {
    return notFound();
  }

  return (
    <div>
      <div className="relative aspect-square">
        <Image fill src={ritual.photo} alt={ritual.title} />
      </div>
      <div className="mx-5 mt-5">
        <div className="text-orange-500 font-bold text-sm pb-3">
          {ritual.category}
        </div>
        <div className="text-2xl font-bold pb-2">{ritual.title}</div>
        <div className="text-xs font-semibold pb-2">{ritual.subtitle}</div>
        <div className="pb-2">{ritual.user.username}</div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <div className="w-20">일시</div>
            <div>{ritual.period}</div>
          </div>
          <div className="flex">
            <div className="w-20">시간대</div>
            <div>{ritual.time}</div>
          </div>
          <div className="flex">
            <div className="w-20">가격</div>
            <div>{ritual.price}</div>
          </div>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: ritual.content }}></div>
        </div>
      </div>
    </div>
  );
}
