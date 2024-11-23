import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import Predictions_filter from '../components/predictions_filter'



export default function Home() {
  const [collection, setCollection] = useState([])
  const [builderData, setBuilderData] = useState()
  const [selectedFilter, setSelectedFilter] = useState('')
  const builderSetting = {
    id: "COPERNICUS/S1_GRD",
  coords: {west: 16.06, south: 48.06, east: 16.65, north: 48.35},
  dates: ["2017-03-01", "2017-04-01"],
  bands: ["VV", "VH"]
  }

  useEffect(() => {
    const fetchCollections = async () => {
      let response = await fetch('/api/collection');
      // await response.collections?.forEach(collection => {
      //   console.log(`${collection.id}: ${collection.summary}`);
      // });

      const data = await response.json();
      setCollection(data.collections
      );
    };


    

    fetchCollections();
  }, []);

  useEffect(() =>{
    const fetchBuilderData = async () => {
      const response = await fetch('/api/builder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: builderSetting.id,
            coords: builderSetting.coords,
            dates: builderSetting.dates,
            bands: builderSetting.bands,
        }),
    });

    if (!response.ok) {
        console.error("Error fetching builder data:", response.statusText);
        return;
    }
      const data = await response.json()
      setBuilderData(data)

      
    }


       fetchBuilderData()
  }, [])

  
  // useEffect(() =>{
  //   setCollection(collection.filter((item) => item.description.toLowerCase().includes(selectedFilter.toLowerCase())))
  //   console.log(collection)

  // }, [selectedFilter])

  const filteredData = collection.filter((item) => item.description.toLowerCase().includes(selectedFilter.toLowerCase()))



  console.log('builder hope', builderData)

  console.log(filteredData)
  return (
   <div>
    <p className='text-5xl'>Dashboard</p>
    <Predictions_filter setSelectedFilter={setSelectedFilter}/>
   </div>
  )
}
