import Image from "next/image";

interface ListPostProps {
  title: string;
  content: string;
  photo: string;
}

export default function Post({ title, content, photo }: ListPostProps) {
  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-md shadow-sm w-full">
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">5분 미니 타임</p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-700 line-clamp-2">{content}</p>
        <div className="flex items-center mt-3 text-gray-500 text-sm">
          <span>서동밋</span>
          <span className="mx-2">•</span>
          <span>16</span>
        </div>
      </div>

      <div className="w-20 h-20 flex-shrink-0 ml-4 relative">
        <Image
          src={photo}
          alt="책 이미지"
          fill
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
}
