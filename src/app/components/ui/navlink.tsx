import Link from "next/link"

interface NavlinkProps {
    to: string,
    text: string
}

export default function Navlink({ to, text }: NavlinkProps) {
    return (
        <Link href={to} className="hover:text-white transition-colors px-6 py-3" prefetch={false}>
            {text}
        </Link>
    )
}
