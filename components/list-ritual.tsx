import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ListRitualProps {
  title: string;
  subtitle: string;
  start: Date;
  photo: string;
  period: string;
  id: number;
}

export default function ListRitual({
  title,
  subtitle,
  start,
  photo,
  period,
  id,
}: ListRitualProps) {
  return (
    // <Link href={`/rituals/${id}`} className="flex gap-5">
    //   <div className="relative size-28 rounded-md overflow-hidden">
    //     <Image fill src={photo} alt={title} />
    //   </div>
    //   <div className="flex flex-col gap-1 *:text-white">
    //     <span className="text-lg">{title}</span>
    //     <span className="text-sm text-neutral-500">
    //       {created_at.toString()}
    //     </span>
    //     <span className="text-lg font-semibold">{price}</span>
    //   </div>
    // </Link>
    <Link
      href={`/rituals/${id}`}
      className="max-w-sm flex flex-col border-black border-2"
    >
      <div className="border-b-2 border-black">
        <div className="relative w-full h-52 rounded-md overflow-hidden">
          <Image fill src={photo} alt={title} />
        </div>
      </div>
      <div className="p-4 bg-orange-100">
        <div className="text-sm pb-10">{title}</div>
        <div className="font-bold pb-1 flex justify-between">
          <div>{subtitle}</div>
          <div>
            <ChevronRight />
          </div>
        </div>
        <div>
          {start.toDateString()} {period}
        </div>
      </div>
    </Link>
  );
}
