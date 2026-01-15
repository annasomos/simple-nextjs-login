"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_prevState: unknown, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  if (
    typeof username !== "string" ||
    typeof password !== "string" ||
    !username ||
    !password
  ) {
    return {
      message: "Something went wrong",
    };
  }

  const encoded = btoa(`${username}:${password}`);

  const cookieStore = await cookies();

  cookieStore.set("auth", encoded, {
    path: "/",
    maxAge: 60 * 60,
    sameSite: "lax",
    httpOnly: true,
  });

  redirect("/logged-in");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth");
  redirect("/");
}
