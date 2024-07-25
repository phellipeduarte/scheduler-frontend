import Link from "next/link"

interface NavlinkProps {
    to: string,
    text: string
}

export default function Navlink({ to, text }: NavlinkProps) {
    return (
        <Link href={to} className="hover:text-white transition-colors" prefetch={false}>
            {text}
        </Link>
    )
}
