import Link from 'next/link';
import Day from './day';
import AttendantList from './attendant-list';

interface ScheduleProps {
    index: number,
}

export default async function Schedule({ index }: ScheduleProps) {

    const urlAttendants = process.env.BASE_URL + "attendant/establishment/" + process.env.ESTABLISHMENT
    let responseAttendants = await fetch(urlAttendants)
    let attendants = await responseAttendants.json()

    return (
        <>
            <div className="flex">
                <AttendantList attendants={attendants} index={index} />
            </div >
            <div className="bg-shade-100 w-full">
                <div className="font-bold text-xl flex items-center">
                    <Day />
                </div>
            </div>
        </>
    )
}