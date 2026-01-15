"use client";

import { logoutAction } from "../actions/auth";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button
        type="submit"
        className="bg-[linear-gradient(90deg,#6793AE_0%,#52A5B8_97.99%)] text-white px-4 py-2 2xl:px-8 2xl:py-6 font-semibold text-xl 2xl:text-4xl"
      >
        Logout
      </button>
    </form>
  );
}
