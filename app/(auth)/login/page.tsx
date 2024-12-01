"use client";

import FormButton from "@/components/button";
import FormInput from "@/components/input";
// import SocialLogin from "@/components/social-login";
import { logIn } from "./actions";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { useActionState } from "react";
import Link from "next/link";

export default function LogIn() {
  const [state, dispatch] = useActionState(logIn, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormButton text="Log in" />
      </form>
      <Link href="/create-account">회원 가입하기</Link>
      {/* <SocialLogin /> */}
    </div>
  );
}
