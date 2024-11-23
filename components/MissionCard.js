
const MissionCard = ({ status, location, droneNumber }) => {
    return (
        <div className="flex flex-col p-5 mx-5 border-2 rounded-lg border-slate-600 bg-slate-200 w-96 h-[600px]">
            <img src="https://placehold.co/400x400" className="" />
            <p className="pt-5">{status}</p>
            <p className="text-[#1D1B20]">{location}</p>
            <p className="text-gray-600">Drone #{droneNumber}</p>
            <button className="rounded-full border-2 border-darkgray px-2.5 py-2.5 w-36 text-darkpurple font-medium">View insights</button>
        </div>
    )
}

export default MissionCard;