
interface ProfileProps {
    name: string,
    label: string
}

export default function Profile({ name, label }: ProfileProps) {
    return (
        <>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-500">
                </div>
                <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
                    <div>{name}</div>
                    <div className="text-sm text-gray-500">{label}</div>
                </div>
            </div>
        </>
    )
}
