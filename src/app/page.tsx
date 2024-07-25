"use client";
import { useState, useEffect } from "react";
import Profile from "./components/ui/profile"

interface Person {
    name: string,
    title: string
}


export default function Page() {


    const [attendants, setAttendants] = useState([])

    const getAttendants = async (url: string) => {
        const res = await fetch(url)
        if (res.ok) {
            const data = await res.json()
            setAttendants(data)
        }
    }

    useEffect(() => {
        const url = process.env.BASE_URL + "/attendant/establishment/" + process.env.ESTABLISHMENT
        getAttendants(url)
    })

    return (
        <main className="container py-4 md:py-8 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Conheça nossos barbeiros</h1>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-2">
                {attendants && attendants.map((attendant: Person, key: number) =>
                    <div key={key} className="bg-shade-100 rounded overflow-hidden px-8 py-6 w-full md:w-1/3">
                        <Profile name={attendant.name} label={attendant.title} />
                    </div>)}
            </div>
        </main>
    )
}
