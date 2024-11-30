"use client";
// 인터렉티브하게 이뤄질 경우 적어야 됨
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  // useFormStatus는 마지막 form submit의 상태 정보를 제공하는 Hook입니다.
  // ford의 자식 요소에서만 사용 가능
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400  disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
