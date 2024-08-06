import Link from 'next/link'
import { ReactHTMLElement } from 'react'

export enum TypeEnum {
    Main = "bg-primary text-base",
    Sec = "bg-base text-shade-300",
    Whatsapp = "bg-whatsapp text-base"
}

interface ButtonProps {
    icon?: React.ReactElement,
    text: string,
    to: string,
    type: TypeEnum
}

export default function Button({ icon, text, to, type }: ButtonProps) {
    return (
        <Link className={type + " text-xl font-bold uppercase rounded-md w-full flex justify-center items-center py-1"} href={to}>{icon}&nbsp;{text}</Link>
    )
}
