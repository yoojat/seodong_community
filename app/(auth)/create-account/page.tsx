"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { createAccount } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { useActionState } from "react";
export default function CreateAccount() {
  const [state, dispatch] = useActionState(createAccount, null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 동작 막기
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form); // 폼 데이터를 수집

    // 서버 액션 실행
    dispatch(formData);
  };

  return (
    <div className="flex flex-col gap-2 py-8 px-6 ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-lg *:text-lg">
              <span className="font-bold">사용자 이름</span>을 지정해주세요
            </h1>
            <Input
              name="username"
              type="text"
              placeholder="사용자이름"
              required
              errors={state?.fieldErrors.username}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-lg *:text-lg">
              <span className="font-bold">이메일 주소</span>와
              <span className="font-bold"> 비밀번호</span>를 입력해주세요
            </h1>
          </div>
          <Input
            name="email"
            type="text"
            placeholder="이메일 주소를 입력해주세요"
            required
            errors={state?.fieldErrors.email}
            minLength={PASSWORD_MIN_LENGTH}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            minLength={PASSWORD_MIN_LENGTH}
            required
            errors={state?.fieldErrors.password}
          />
          <Input
            name="confirm_password"
            type="password"
            placeholder="비밀번호 재입력"
            minLength={4}
            required
            errors={state?.fieldErrors.confirm_password}
          />
        </div>
        <div>
          <div className=" flex flex-col gap-2 *:font-medium">
            <h1 className="text-lg *:text-lg">
              <span className="font-bold">휴대폰 번호</span>를 입력해주세요
            </h1>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              name="phone"
              type="text"
              placeholder="휴대폰 번호를 입력해주세요"
              required
            />
            <Input
              name="confirm_number"
              type="text"
              placeholder="인증번호"
              required
            />
            <div className="bg-blue-500 text-white py-2 rounded-md font-bold text-center hover:cursor-pointer">
              인증하기
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-lg *:text-lg">
              서동밋 커뮤니티에서
              <br /> 나는
              <span className="font-bold"> 어떤 닉네임</span>
              으로 불리고 싶은가요?
            </h1>
            <Input name="nickname" type="text" placeholder="닉네임" required />
          </div>
        </div>
        <Button text="회원가입" />

        {/* <div className="w-full h-px bg-neutral-500" /> */}
      </form>

      {/* <SocialLogin /> */}
    </div>
  );
}
