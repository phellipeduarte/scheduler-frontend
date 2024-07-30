'use client'

import { useRouter } from 'next/navigation'

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
    const router = useRouter()

    return (
        <button className={type + " text-xl font-bold uppercase rounded-md w-full py-1"} onClick={() => router.push(to)}>{text}</button>
    )
}
