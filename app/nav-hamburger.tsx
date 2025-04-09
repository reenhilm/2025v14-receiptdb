import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"
import NavLinks from "./nav-links"

export default function NavHamburger() {
    return (
        <>
            <nav className="flex md:flex hidden justify-end items-center h-5 min-h-10">
                <NavLinks />
            </nav>
            
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                        <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="md:hidden">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="grid gap-4 p-4">
                        <NavLinks />
                    </div>
                </SheetContent>                              
            </Sheet >
        </>
    )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}