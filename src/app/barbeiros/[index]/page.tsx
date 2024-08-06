import Button, { TypeEnum } from '@/app/components/ui/button'
import Image from 'next/image'

export default async function page({ params }: { params: { index: number } }) {

    const urlAttendants = process.env.BASE_URL + "attendant/establishment/" + process.env.ESTABLISHMENT
    const responseAttendants = await fetch(urlAttendants)
    const attendants = await responseAttendants.json()
    const attendant = attendants[params.index - 1]

    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos barbeiros</h1>
            <div className="md:w-3/5 bg-shade-100 rounded px-3 py-5 md:p-10">
                <div className="flex flex-col md:flex-row items-center p-5 md:p-3">
                    <Image
                        alt="Imagem de perfil"
                        height={128}
                        width={128}
                        src={attendant.imageUrl}
                    />
                    <div className="ms-4 text-center md:text-left">
                        <p className="font-bold text-3xl">{attendant.name}</p>
                        <p className="font-semibold text-xl text-shade-300">{attendant.title}</p>
                    </div>
                </div>
                <p className="font-medium pb-5 text-justify">{attendant.description}</p>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="md:w-2/5">
                        <Button text="agendar" to={"/agendar/barbeiro/" + params.index} type={TypeEnum.Main} />
                    </div>
                    <div className="md:w-2/5">
                        <Button text="voltar" to="/barbeiros" type={TypeEnum.Sec} />
                    </div>
                </div>
            </div>
        </main>
    )
} 