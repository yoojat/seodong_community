import db from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

interface RitualParams {
  id: string;
}

async function getPost(id: number) {
  const post = await db.post.findUnique({
    where: { id },
  });
  return post;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function PostDetail({ params }: { params: any }) {
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
  const post = await getPost(id);
  if (!post) {
    return notFound();
  }

  return (
    <div>
      <div className="relative aspect-square">
        <Image fill src={post.photo} alt={post.title} />
      </div>
      <div className="mx-5 mt-5">
        <div className="text-2xl font-bold pb-2">{post.title}</div>
        <div className="flex flex-col gap-2"></div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      </div>
    </div>
  );
}
