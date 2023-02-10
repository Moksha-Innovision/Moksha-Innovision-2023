import { Koulen } from "@next/font/google";
import EventCards from "./EventCards";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

interface Props {
    events?: { name: string; img: string; ticket: string }[];
    day: string;
}

const EventGrid = ({ events, day }: Props) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-14 lg:gap-16  w-[100vw] p-10 ">
            {events?.map((e, i) => {
                return (
                    <EventCards event={e} key={i} />
                );
            })}
        </div>
    )
}

export default EventGrid