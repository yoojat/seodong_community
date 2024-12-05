import Post from "@/components/post";
import db from "@/lib/db";
import Link from "next/link";

async function getPosts() {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const rituals = await db.post.findMany({
    select: {
      title: true,
      content: true,
      photo: true,
      id: true,
    },
  });

  return rituals;
}

export default async function Posts() {
  const posts = await getPosts();
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
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <Post
              title={post.title}
              content={post.content}
              photo={post.photo}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
