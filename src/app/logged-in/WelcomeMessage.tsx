import { getAuthUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function WelcomeMessage() {
  const user = await getAuthUser();
  if (!user) return redirect("/");

  return (
    <h1 className="text-brand-blue text-3xl 2xl:text-6xl">
      Welcome, <strong>{user.username}</strong>!
    </h1>
  );
}
