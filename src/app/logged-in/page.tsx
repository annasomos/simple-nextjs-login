import LogoutButton from "./LogoutButton";
import WelcomeMessage from "./WelcomeMessage";

export default async function LoggedInPage() {
  return (
    <div className="p-6 2xl:p-12 text-center space-y-4 h-full w-full flex flex-col gap-4 2xl:gap-8">
      <WelcomeMessage />
      <LogoutButton />
    </div>
  );
}
