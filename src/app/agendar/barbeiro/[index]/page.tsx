import Button, { TypeEnum } from '@/app/components/ui/button';
import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import Schedule from '@/app/components/ui/schedule';

function page({ params }: { params: { index: number } }) {
    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Agendar</h1>
            <p className="mb-3 text-shade-300 font-medium">Marque seu horário rapidamente através do <span className="italic">Whatsapp.</span></p>
            <div className="md:w-80 mb-3">
                <Button text="Agendar" to="/" type={TypeEnum.Whatsapp} icon={<FaWhatsapp />} />
            </div>
            <p className="mb-3 text-shade-300 font-medium">Ou então preencha o formulário.</p>
            <Schedule index={params.index - 1} />
        </main>
    )
}

export default page