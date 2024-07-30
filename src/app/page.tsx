"use client"

import Button, { TypeEnum } from "./components/ui/button"

export default function Page() {

    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Conheça nossos barbeiros</h1>
            <div className="w-1/5">
                <Button text="Conhecer" type={TypeEnum.Main} to="/barbeiros" />
            </div>
        </main>
    )
}
