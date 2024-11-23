import React, { useState } from 'react'
import WorldIcon from '../icons/WorldIcon'
import SocialmediaIcon from '../icons/SocialmediaIcon'
import LocationIcon from '../icons/LocationIcon'
import Link from 'next/link'
import BroadcastIcon from '../icons/BroadcastIcon'
import { useRouter } from 'next/router'

const NavBar = () => {
  const [selected, setSelected] = useState('0') 
  const router = useRouter()

  const links = [
    {text:"Satelite data", subtext:"Predictive insights", url:"/", icon:<WorldIcon />},
    {text:"Drones", subtext:"Get live video", url:"/drones", icon:<LocationIcon />},
    {text:" Social Media", subtext:"Group footage", url:"/socialmedia", icon:<SocialmediaIcon />},
    {text:"Broadcasting", subtext:"Communicate insights", url:"/broadcast", icon:<WorldIcon />},
  ]
  return (
    <div className='h-full bg-lightpurple'>
      {/* <p className='text-3xl p-6'>The New Disasters</p> */}
      <div className='flex flex-col w-full gap-2 py-2'>
        {links.map((item, index) => (
          <>
                  <NavButton key={index} text={item.text} subtext={item.subtext} url={item.url} icon={item.icon} />

          </>
        ))}
       
      </div>
    </div>
  )
}

export default NavBar


const NavButton = ({ text, subtext, icon, url }) => {
  const [clicked, setClicked]= useState(false);
  const router = useRouter()

  return <Link href={url} className={`w-full h-16 flex items-center justify-start gap-4 px-6 ${router.asPath === url ? 'bg-clickedpurple rounded-full':''}`} onClick={()=>{setClicked(true)}}>
    <span>{icon}</span>
    <div className='flex flex-col'>
      <span className='text-lg'>{text}</span>
      <span className='text-base text-[#49454F]'>{subtext}</span>
    </div>
  </Link>
}