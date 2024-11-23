import OngoingIcon from "../icons/OngoingIcon";
import PastIcon from "../icons/PastIcon";


const MissionCard = ({ status, location, droneNumber }) => {
    return (
        <div className={` flex flex-col p-5 mx-5 border-2 rounded-lg border-slate-600 bg-slate-200 w-96 h-[600px]`}>
            <img src="https://placehold.co/400x400" className="" />
            <p className="pt-5 flex flex-row text-[#444659]">{status === 'Ongoing' ? <OngoingIcon /> : <PastIcon />} {status}</p>
            <p className="text-[#1D1B20] mt-4">{location}</p>
            <p className="text-gray-600">Drone #{droneNumber}</p>
            <button className="rounded-full border-2 border-darkgray px-2.5 py-2.5 w-36 text-superdarkpurple font-medium ml-auto">View insights</button>
        </div>
    )
}

export default MissionCard;