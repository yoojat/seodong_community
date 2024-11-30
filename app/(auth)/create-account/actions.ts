"use server";
import bcrypt from "bcrypt";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";

// import { getIronSession } from "iron-session";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

// const usernameSchema = z.string().min(5).max(10);
// const formSchema = z.object({
//   // username: z.string().min(3).max(10),
//   email: z.string().email(),
//   password: z.string().min(10),
//   confirm_password: z.string().min(10),
// });

const checkUsername = (username: string) => !username.includes("potato");

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

// const checkUniqueEmail = async (email: string) => {
//   const user = await db.user.findUnique({
//     where: {
//       email,
//     },
//     select: {
//       id: true,
//     },
//   });
//   return Boolean(user) === false;
// };

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      // .min(3, "Way too short!!!")
      // .max(10, "That is too looooong!")
      .toLowerCase()
      .trim()
      .refine(checkUsername, "No potatoes allowed!"),

    // .transform((username) => `🔥 ${username}`)
    // .refine(checkUsername, "No potatoes allowed!")
    // .refine(checkUniqueUsername, "This username is already taken"),

    email: z.string().email().toLowerCase(),
    // .refine(checkUniqueEmail, "이미 등록된 이메일입니다."),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
    nickname: z.string(),
    phone: z.string(),
  })
  // .superRefine(({ password, confirm_password }, ctx) => {
  //   if (password !== confirm_password) {
  //     ctx.addIssue({
  //       code: "custom",
  //       message: "Two passwords should be equal",
  //       path: ["confirm_password"],
  //     });
  //   }
  // })
  .superRefine(async ({ username }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This username is already taken",
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
    // fatal을 true로 설정하고, z.NEVER를 리턴한다면 뒤에 이어지는 로직은 실행되지 않음
  })
  .superRefine(async ({ email }, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This email is already taken",
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
      // fatal을 true로 설정하고, z.NEVER를 리턴한다면 뒤에 이어지는 로직은 실행되지 않음
      //       fatal: true 설정 시, 그 다음 refine이 실행되는 것을 방지
      // z.NEVER 설정 시, 반환 값 자체를 사용하기 위해서가 아닌, 타입 시스템을 맞추기 위함
      // (함수가 특정한 타입 검사를 통과시키면서도, 그 결과 값을 반환할 필요가 없을 때 사용)
      //       fatal: true -> 오류 발생 시 검증을 즉시 종료하도록 설정
      // z.NEVER -> 오류 상태를 명확히 하여, 검증이 실패했음을 Zod에 알리는 역할
    }
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
    nickname: formData.get("nickname"),
    phone: formData.get("phone"),
  };
  // usernameSchema.parse(data.username);
  const result = await formSchema.spa(data);
  // const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
        nickname: result.data.nickname,
        phone: result.data.phone,
      },
      select: {
        id: true,
      },
    });
    const session = await getSession();
    session.id = user.id;
    await session.save();
    redirect("/profile");
  }
  // parse는 에러를 throw하지만 safeParse는 error를 throw 하지 않음
  // parse를 사용할때는 try catch를 사용해야됨
}
