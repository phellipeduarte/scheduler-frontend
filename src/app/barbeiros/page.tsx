import Profile from "../components/ui/profile"
import Badge from "../components/ui/badge";

interface Attendant {
    uuid: string,
    name: string,
    title: string,
    imageUrl: string
}

interface Service {
    name: string
}


export default async function Page() {
    const urlAttendants = process.env.BASE_URL + "attendant/establishment/" + process.env.ESTABLISHMENT
    const urlServices = process.env.BASE_URL + "job/establishment/" + process.env.ESTABLISHMENT

    let responseAttendants = await fetch(urlAttendants)
    let responseServices = await fetch(urlServices)

    let attendants = await responseAttendants.json()
    let services = await responseServices.json()

    return (
        <main className="container py-4 md:py-4 px-4 w-full max-w-screen-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos barbeiros</h1>
            <p className="mb-3 text-shade-300 font-medium">Veja a equipe talentosa da nossa barbearia, descubra mais sobre cada profissional e confira os serviços que oferecemos.</p>
            <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-2 mb-5">
                {attendants.map((attendant: Attendant, key: number) =>
                    <div key={key} className="bg-shade-100 rounded overflow-hidden px-5 py-4 w-full md:w-1/3">
                        <Profile index={key} name={attendant.name} title={attendant.title} imageUrl={attendant.imageUrl} />
                    </div>)}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Conheça nossos serviços</h1>
            <div className="flex justify-start flex-row flex-wrap gap-2">
                {services.map((service: Service, key: number) =>
                    <div key={key}>
                        <Badge text={service.name} />
                    </div>)}
            </div>
        </main>
    )
}
