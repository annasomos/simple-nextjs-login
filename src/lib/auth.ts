import { cookies } from "next/headers";

export async function getAuthUser() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");

  if (!authCookie) return null;

  try {
    const decoded = atob(authCookie.value);

    const [username] = decoded.split(":");

    return { username };
  } catch {
    return null;
  }
}
