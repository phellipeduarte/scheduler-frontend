import Profile from "./components/ui/profile"

interface Person {
    name: string,
    label: string
}


export default function page() {


    const b1: Person = { name: "Phillip", label: "Barbeiro profissional" }
    const b2: Person = { name: "Phillip", label: "Barbeiro profissional" }
    const b3: Person = { name: "Phillip", label: "Barbeiro profissional" }
    const barbers = [b1, b2, b3]

    return (
        <main className="container py-8 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Conheça nossos barbeiros</h1>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-2">
                {barbers && barbers.map((barber: Person, key: number) =>
                    <div key={key} className="bg-card rounded-lg shadow-md overflow-hidden px-8 py-6 w-full md:w-auto">
                        <Profile name={barber.name} label={barber.label} />
                    </div>)}
            </div>
        </main>
    )
}
