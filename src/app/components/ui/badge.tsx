import React from 'react'

interface BadgeProps {
    text: string
}

export default function Badge({ text }: BadgeProps) {
    return (
        <div className="rounded bg-shade-100 text-second text-xl font-bold py-2 px-3">
            {text}
        </div>
    )
}
