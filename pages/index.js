import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch('/api/collection');
      const data = await response.json();
      setCollection(data.collections || []);
    };

    fetchCollections();
  }, []);

  console.log(collection)
  return (
   <div>
    <p className='text-5xl'>Dashboard</p>
   </div>
  )
}
