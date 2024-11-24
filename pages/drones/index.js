import MissionCard from '../../components/MissionCard'
import PlusIcon from '../../icons/PlusIcon'
import CheckIcon from '../../icons/CheckIcon'
import { useState } from 'react'
import OngoingIcon from '../../icons/OngoingIcon'
import PastIcon from '../../icons/PastIcon'

const Drones = () => {
  const [missions, setMissions] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newMissionData, setNewMissionData] = useState({
    status: 'Ongoing',
    location: '',
    droneNumber: '',
  });
  const [filter, setFilter] = useState('Ongoing');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMissionData({ ...newMissionData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMission = {
      id: missions.length + 1,
      title: `Mission ${missions.length + 1}`,
      ...newMissionData,
    };
  
    setMissions([...missions, newMission]); // Add the new mission to state

    // Automatically update the filter to match the new mission's status
    // setFilter(newMissionData.status.toLowerCase());
  
    setIsPopupOpen(false); // Close the popup
    setNewMissionData({ status: 'Ongoing', location: '', droneNumber: '' }); // Reset form
  };
  

  const handleStartMissionClick = () => {
    setIsPopupOpen(true);
  };

  const handleCancel = () => {
    setIsPopupOpen(false);
    setNewMissionData({ status: 'ongoing', location: '', droneNumber: '' });
  };

  const filteredMissions = missions.filter((mission) => mission.status === filter);

  
  return (
    <div className='overflow-auto'>
      <div className='flex justify-between'>
        <h1 className='justify-start mt-5 mx-5 text-3xl'>Drones Overview</h1>
        <button className='flex items-center gap-3 px-4 flex-row py-2  h-10 bg-superdarkpurple text-white rounded-full mt-16 mr-10 text-center'
          onClick={handleStartMissionClick}
        >
          <PlusIcon />Start mission
        </button>
      </div>

      <div className='mx-5 mb-5 mt-2 flex'>
        <button className={`flex items-center  gap-2 flex-row py-2.5 px-6  rounded-lg ${filter === 'Ongoing' ? 'bg-clickedpurple' : 'bg-lightpurple'}`}
          onClick={() => setFilter(old => 'Ongoing')}>
          <div className={`${filter === 'Ongoing' ? 'block' :'hidden'} `}><CheckIcon/></div>
          Ongoing
        </button>
        <button className={`px-4 py-2.5 ml-5 items-center gap-2 bg-lightpurple flex rounded-lg ${filter === 'Past' ? 'bg-clickedpurple' : 'bg-lightpurple'}`}
          onClick={() => setFilter(old => 'Past')}>
          <div className={`${filter === 'Past' ? 'block' :'hidden'}`}><CheckIcon/></div>
          Past
        </button>
      </div>

      {/* Popup for creating a new mission */}

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[400]">
          <div className="bg-white w-11/12 h-[90] rounded-lg p-6  shadow-lg">
            <h2 className="text-lg font-bold mb-4">Start New Mission</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Status</label>
                <select
                  name="status"
                  value={'Ongoing'}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2"
                >
                  <option value="Ongoing">Ongoing</option>
                  <option value="Past">Past</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newMissionData.location}
                  onChange={handleInputChange}
                  placeholder="Enter location"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Drone Number</label>
                <input
                  type="number"
                  name="droneNumber"
                  value={newMissionData.droneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter drone number"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-darkpurple text-white px-4 py-2 rounded"
                >
                  Save Mission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {console.log(filteredMissions)}

      <div className="mt-8 flex flex-wrap gap-4 overflow-y-scroll overflow-hidden">
        {filteredMissions.map((mission) => (
          <MissionCard
            key={mission.id}
            title={mission.title}
            location={mission.location}
            status={mission.status}
            droneNumber={mission.droneNumber}
          />
        ))}
      </div>
    </div>
  )
}

export default Drones;