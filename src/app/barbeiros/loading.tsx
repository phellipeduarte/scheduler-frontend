import React from 'react'
import ProfileLoading from "../components/ui/profile-loading"

export default function Loading() {
    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos barbeiros</h1>
            <p className="mb-3 text-shade-300 font-medium">Veja a equipe talentosa da nossa barbearia, descubra mais sobre cada profissional e confira os serviços que oferecemos.</p>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-2 mb-5">
                {[...Array(6)].map((i) => (
                    <div key={i} className="bg-shade-100 rounded overflow-hidden px-5 py-4 w-full md:w-1/3">
                        <ProfileLoading />
                    </div>
                ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos serviços</h1>
            <div className="flex justify-start flex-row flex-wrap gap-2">
                <div className="rounded bg-shade-100 text-second text-xl font-bold py-2 px-3">
                    <div className="w-40 h-7 bg-shade-200 rounded-full animate-pulse"></div>
                </div>
                <div className="rounded bg-shade-100 text-second text-xl font-bold py-2 px-3">
                    <div className="w-14 h-7 bg-shade-200 rounded-full animate-pulse"></div>
                </div>
                <div className="rounded bg-shade-100 text-second text-xl font-bold py-2 px-3">
                    <div className="w-28 h-7 bg-shade-200 rounded-full animate-pulse"></div>
                </div>
            </div>
        </main>
    )
} 