"use client"

import { useState } from "react"


interface Attendant {
    uuid: string,
    name: string
}

interface AttendantListProps {
    attendants: Array<Attendant>,
    index: number
}

interface AttendantNameProps {
    attendant: Attendant,
    index: number
}

export default function AttendantList({ attendants, index }: AttendantListProps) {

    const [currentIndex, setCurrentIndex] = useState(index)


    function handleClick(index: number) {
        setCurrentIndex(index)
    }

    function SelectedAttendant({ attendant, index }: AttendantNameProps) {
        return (
            <button onClick={() => handleClick(index)} className="bg-shade-100 rounded-t-lg overflow-hidden px-5 pt-4 pb-3 font-bold">
                {attendant.name}
            </button>)
    }

    function OtherAttendant({ attendant, index }: AttendantNameProps) {
        return (
            <button onClick={() => handleClick(index)} className="bg-white text-shade-100 rounded-t-lg overflow-hidden px-5 pt-4 pb-3 font-bold">
                {attendant.name}
            </button>
        )
    }

    return (
        <>
            {attendants.map((currentAttendant: Attendant, key: number) =>
                currentIndex == key ?
                    <SelectedAttendant attendant={currentAttendant} index={key} key={key} />
                    :
                    <OtherAttendant attendant={currentAttendant} index={key} key={key} />
            )}
        </>
    )
}
