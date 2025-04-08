import Link from "next/link"

export default function NavLinks() {
    return (
        <>
            <Link href="/find" className="mx-1 py-1 px-3 font-semibold uppercase hover:underline visually-hidden">FIND</Link>
            <Link href="/add" className="mx-1 py-1 px-3 font-semibold uppercase hover:underline visually-hidden">ADD</Link>
            <div className="mx-1 py-1 px-3 whitespace-nowrap *:uppercase *:font-semibold *:cursor-pointer *:hover:underline">
                <a href="#">SIGN IN</a>
            </div>
            <div className="mx-1 py-1 px-3 whitespace-nowrap *:uppercase *:font-semibold *:cursor-pointer *:hover:underline">
                <a href="#">SIGN UP</a>
            </div>
            <div className="ms-1 py-1 ps-3 flex">
                [AVATAR]
            </div>        
        </>
    )
}