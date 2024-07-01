import Link from "next/link"
import Navlink from "./navlink"

export default function Navbar() {
    return (
        <header className="bg-zinc-900 text-white py-4">
            <nav className="container w-full max-w-screen-xl mx-auto flex items-center justify-between px-4">
                <Link href="#" className="text-xl font-bold" prefetch={false}>
                    Barbershop
                </Link>
                <div className="flex items-center gap-4 text-gray-400">
                    <Navlink to="/" text="Agenda" />
                    <Navlink to="/" text="Entrar" />
                </div>
            </nav>
        </header>
    )
}
