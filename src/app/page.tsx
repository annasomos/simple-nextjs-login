"use client";

import { useActionState, useState } from "react";
import { loginAction } from "./actions/auth";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

export default function Home() {
  const [state, formAction, pending] = useActionState(loginAction, {
    message: "",
  });
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <form
      action={formAction}
      className="w-full h-full flex flex-col gap-8 2xl:gap-12"
    >
      <h1 className="text-5xl 2xl:text-8xl font-bold text-center text-white">
        Login
      </h1>

      {state.message && (
        <p className="text-red-500 text-sm text-center">{state.message}</p>
      )}
      <div className="flex flex-col w-full md:flex-row justify-between gap-6 mt-6">
        <InputField
          name="username"
          label="Username"
          value={userName}
          setValue={setUserName}
          isRequired={true}
          type="text"
        />

        <InputField
          name="password"
          label="Password"
          value={userPassword}
          setValue={setUserPassword}
          isRequired={true}
          type="password"
        />
      </div>

      <SubmitButton
        disabled={pending || !userName.length || !userPassword.length}
      />
    </form>
  );
}
