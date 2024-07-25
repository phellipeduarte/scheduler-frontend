import Link from "next/link"
import Navlink from "./navlink"

export default function Navbar() {
    return (
        <header className="bg-second text-base py-4">
            <nav className="container w-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
                <Link href="#" className="text-xl font-bold" prefetch={false}>
                    Barbershop
                </Link>
                <div className="flex items-center gap-10 text-shade-200">
                    <Navlink to="/" text="Home" />
                    <Navlink to="/" text="Agenda" />
                </div>
            </nav>
        </header>
    )
}
