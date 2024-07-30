"use client";
import { useState, useEffect } from "react";
import Profile from "../components/ui/profile"
import Badge from "../components/ui/badge";

interface Person {
    name: string,
    title: string
}

interface Service {
    name: string
}


export default function Page() {


    const [attendants, setAttendants] = useState([])
    const [services, setServices] = useState([])

    const getAttendants = async (url: string) => {
        const res = await fetch(url)
        if (res.ok) {
            const data = await res.json()
            setAttendants(data)
        }
    }

    const getServices = async (url: string) => {
        const res = await fetch(url)
        if (res.ok) {
            const data = await res.json()
            setServices(data)
        }
    }

    useEffect(() => {
        const urlAttendants = process.env.BASE_URL + "attendant/establishment/" + process.env.ESTABLISHMENT
        const urlServices = process.env.BASE_URL + "job/establishment/" + process.env.ESTABLISHMENT
        getAttendants(urlAttendants)
        getServices(urlServices)
    })

    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos barbeiros</h1>
            <p className="mb-3 text-shade-300 font-medium">Veja a equipe talentosa da nossa barbearia, descubra mais sobre cada profissional e confira os serviços que oferecemos.</p>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-2 mb-5">
                {attendants && attendants.map((attendant: Person, key: number) =>
                    <div key={key} className="bg-shade-100 rounded overflow-hidden px-5 py-4 w-full md:w-1/3">
                        <Profile name={attendant.name} label={attendant.title} />
                    </div>)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos serviços</h1>
            <div className="flex justify-start flex-row gap-2">
                {services && services.map((service: Service, key: number) =>
                    <div key={key}>
                        <Badge text={service.name} />
                    </div>)}
            </div>
        </main>
    )
}
