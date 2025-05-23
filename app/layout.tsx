import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavHamburger from "./nav-hamburger";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ClerkProvider, SignedIn, UserButton } from '@clerk/nextjs';
import NavLinks from "./nav-links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>       
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="grid md:grid-cols-(--layout-grid-cols) grid-cols-(--layout-grid-cols-smallscreen)">
              <header className="col-start-2 -col-end-2 grid grid-cols-subgrid bg-accent min-h-[var(--header-height)] items-center">
                <Link href="/" className="col-start-2 py-1"><h1 className="text-3xl hover:underline">ReceiptDB</h1></Link>
                <nav className="col-start-5 -col-end-5 justify-self-center sm:flex hidden justify-end items-center h-5 min-h-10">
                  <NavLinks />
                </nav>
                <div className="-col-end-2 flex justify-end items-center">
                  <SignedIn>
                    <div className="mx-1 py-1 px-3 flex">
                      <UserButton />
                    </div>
                  </SignedIn>
                  <ModeToggle />

                  <NavHamburger />
                </div>
              </header>
              <div className="col-start-2 -col-end-2 min-h-[calc(100vh-var(--header-height))] grid grid-cols-subgrid bg-accent">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
