import Button, { TypeEnum } from "./button"

interface ProfileProps {
    name: string,
    label: string
}

export default function Profile({ name, label }: ProfileProps) {
    return (
        <>
            <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-gray-500">
                </div>
                <div className="text-left ms-3">
                    <div className="font-bold text-xl mb-0">{name}</div>
                    <div className="text-shade-300 font-semibold">{label}</div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 ">
                <Button text="Agendar" type={TypeEnum.Main} to="/" />
                <Button text="Conhecer" type={TypeEnum.Sec} to="/" />
            </div>
        </>
    )
}
