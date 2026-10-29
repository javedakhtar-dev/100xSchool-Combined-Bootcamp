import EventsCalender from "./EventsCalender";
import FunctionCard from "./FunctionsCard";
import ProfileCard from "./ProfileCard";

export default function SubContent () {
    return (
        <div className="p-5 flex gap-5">
            <ProfileCard />
            <div className="w-full">
            Thursday, 29 October
            <div className="font-black text-xl">Good Evening, Javed!</div>
            <div className="flex gap-5 w-full">
                <EventsCalender />
                <FunctionCard />
            </div>
        </div>
        </div>
    )
}