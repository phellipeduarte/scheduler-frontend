import Button, { TypeEnum } from "./button"

interface Attendant {
    index: number,
    name: string,
    title: string
}

export default async function Profile(attendant: Attendant) {
    return (
        <>
            <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-500">
                </div>
                <div className="text-left ms-3">
                    <div className="font-bold text-xl mb-0">{attendant.name}</div>
                    <div className="text-shade-300 font-semibold">{attendant.title}</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 ">
                <Button text="Agendar" type={TypeEnum.Main} to={"/barbeiros/" + (attendant.index + 1)} />
                <Button text="Conhecer" type={TypeEnum.Sec} to={"/barbeiros/" + (attendant.index + 1)} />
            </div>
        </>
    )
}
