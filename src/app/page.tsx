"use client";

import { useActionState, useState } from "react";
import { loginAction } from "./actions/auth";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import Image from "next/image";

export default function Home() {
  const [state, formAction, pending] = useActionState(loginAction, {
    message: "",
  });
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col p-12 xl:p-18 2xl:p-24 justify-center">
        <form action={formAction} className="flex flex-col gap-8 2xl:gap-12">
          <h1 className="text-5xl 2xl:text-8xl font-bold text-center text-white">
            Login
          </h1>

          {state.message && (
            <p className="text-red-500 text-sm text-center">{state.message}</p>
          )}
          <div className="flex flex-col w-full md:flex-row justify-between gap-6 mt-4">
            <InputField
              name="username"
              label="Username"
              value={userName}
              setValue={setUserName}
              isRequired={true}
              placeholderText="Enter your username"
              type="text"
            />

            <InputField
              name="password"
              label="Password"
              value={userPassword}
              setValue={setUserPassword}
              isRequired={true}
              placeholderText="Enter your password"
              type="password"
            />
          </div>
          <SubmitButton
            disabled={pending || !userName.length || !userPassword.length}
            label="Login"
          />
        </form>
      </div>
      <div className="relative w-screen h-[40vh] md:hidden">
        <Image
          src="/girls-with-mask.png"
          alt="Girls with masks in a retreat"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
