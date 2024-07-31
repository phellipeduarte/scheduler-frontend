import Link from 'next/link'

export enum TypeEnum {
    Main = "bg-primary text-base",
    Sec = "bg-base text-shade-300"
}

interface ButtonProps {
    text: string,
    to: string,
    type: TypeEnum
}

export default function Button({ text, to, type }: ButtonProps) {
    return (
        <Link className={type + " text-xl font-bold uppercase rounded-md w-full flex justify-center py-1"} href={to}>{text}</Link>
    )
}
