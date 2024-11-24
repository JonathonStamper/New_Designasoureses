import React from 'react'
import WebIntegrationWithCopernicus from './testmap'
import { MapSatelliteComponent } from '../components/map/indexMapSatellite'

const Home = () => {

  return (
    <div className="bg-white flex-1 w-full h-full">
      <MapSatelliteComponent />
      
    </div>
  )
}
export default Home
