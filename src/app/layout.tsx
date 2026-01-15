import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";

const barlowSans = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-sans",
});

export const metadata: Metadata = {
  title: "Next.js Login",
  description: "This is a simple Next.js application with a login form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSans.variable} antialiased`}>
        <main className="bg-[url(/girls-with-mask.png)] bg-cover bg-right md:bg-position-[right_-25vw_bottom_0] lg:bg-right  bg-no-repeat">
          <div className="w-full flex items-center md:w-[40vw] p-12 xl:p-18 2xl:p-24 space-y-8 h-screen bg-background">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
