import LogoutButton from "./LogoutButton";
import WelcomeMessage from "./WelcomeMessage";
import Image from "next/image";

export default async function LoggedInPage() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-12 xl:p-18 2xl:p-24 text-center space-y-6 w-full h-full flex flex-col gap-4 2xl:gap-8 items-center justify-center">
        <WelcomeMessage />
        <LogoutButton />
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
