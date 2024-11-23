import React from 'react'
import WorldIcon from '../icons/WorldIcon'
import CameraIcon from '../icons/CameraIcon'
import PlaneIcon from '../icons/PlaneIcon'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='h-full w-42 bg-purple-200'>
      <p className='text-3xl p-6'>The New Disasters</p>
      <div className='flex flex-col w-full gap-2'>
        <NavButton text="Satelite Data" url="/map" icon={<WorldIcon />} />
        <NavButton text="Social Media" url="/socialmedia" icon={<CameraIcon />} />
        <NavButton text="Send a Drone" url="/drones" icon={<PlaneIcon />} />
      </div>
    </div>
  )
}

export default NavBar


const NavButton = ({ text, icon, url }) => {
  return <Link href={url} className='w-full bg-purple-300 h-16 flex items-center justify-start gap-4 px-6'>
    <span>{icon}</span>
    <span className='text-2xl'>{text}</span>
  </Link>
}