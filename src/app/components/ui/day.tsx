"use client"

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Day() {

    const today = new Date(Date.now())
    const [currentDate, setCurrentDate] = useState(today)

    const upgradeDate = () => {
        let date = new Date()
        date.setMonth(currentDate.getMonth())
        date.setDate(currentDate.getDate() + 1)
        setCurrentDate(date)
    }

    const downgradeDate = () => {
        let date = new Date()
        date.setMonth(currentDate.getMonth())
        date.setDate(currentDate.getDate() - 1)
        setCurrentDate(date)
    }

    return (
        <div className="flex items-center">
            <button onClick={() => downgradeDate()} className="p-3">
                <IoIosArrowBack />
            </button>
            <p>
                {currentDate.toLocaleDateString("pt-BR", { month: '2-digit', day: '2-digit' })}
            </p>
            <button onClick={() => upgradeDate()} className="p-3">
                <IoIosArrowForward />
            </button>
        </div>
    )
}
