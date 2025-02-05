'use client';
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from './map.module.css';
import { renderToString } from "react-dom/server";
import { MarkerClusterGroup } from "leaflet.markercluster";
import SelectedPost from "../selectedPost";
import LocationIcon from '../../icons/LocationIcon'
import { useMapEvents } from "react-leaflet";


const DEFAULT_CENTER = [39.35, -0.3790];

const MapDrone = ({}) => {
  const date = new Date()
  const StringDate = date.toISOString().split('T')[0]
  const [activeLayer, setActiveLayer] = useState('sentinel');
  const [selectedData, setSelectedData] = useState({})
  const [isOpen, setOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState([    { latitude: 39.35, longitude: -0.3790, name: 'Valencia', address: 'City of Arts and Sciences, Valencia', imageUrl: './disaster.png'},
  ]) 
  let selectedLocations;


  const MapEvents = () => {
    useMapEvents({
      click(e) {
        // setState your coords here
        // coords exist in "e.latlng.lat" and "e.latlng.lng"
        console.log(e.latlng.lat);
        console.log(e.latlng.lng);
      },
    });
    return false;
}


  const markers = [
    { latitude: 39.35, longitude: -0.3790, name: 'Valencia', address: 'City of Arts and Sciences, Valencia', imageUrl: './disaster.png'},
  ];

  function Clicked(data){
    setOpen(!isOpen)
    setSelectedData(data)
  }

  useEffect(() => {
    let map;
    
    const container = L.DomUtil.get("map");
    if (container != null) {
      container._leaflet_id = null;
    }

    map = L.map("map", {
      zoomControl: true,
      dragging: true,
      center: DEFAULT_CENTER,
      zoom: 12,
    });

    // OpenStreetMap base layer
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Satellite layer
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 19
    });


    // Sentinel Hub WMS service configuration
    const baseUrl = "https://sh.dataspace.copernicus.eu/ogc/wms/52e185d8-d796-436d-b666-61840c4ab12e";
    
    function createWmsLayer(layerId) {
      return L.tileLayer.wms(baseUrl, {
        tileSize: 512,
        attribution: '&copy; <a href="https://dataspace.copernicus.eu/" target="_blank">Copernicus Data Space Ecosystem</a>',
        maxcc: 20,
        minZoom: 6,
        maxZoom: 16,
        layers: layerId,
        time: StringDate + '/' + StringDate
      });
    }

    // Create Sentinel layers
    const ndvi = createWmsLayer("NDVI");

    // Add markers
    markers?.forEach(marker => {
      const customIcon = L.divIcon({
        className: 'custom-icon',
        html: renderToString(<LocationIcon />)
      });
      
      L.marker([marker.latitude, marker.longitude], { icon: customIcon })
        .addTo(map)
        .bindPopup(`<b>${marker.name}</b><br>${marker.address}`)
        .on('click', () => Clicked(marker));
    });

    // Define base and overlay maps
    const baseMaps = {
      'Map': osm,
      'Satellite': satellite 
    };

    map.on('click', function(e){
      setSelectedLocation({ latitude: e.latlng.lat, longitude:  e.latlng.lng, name: 'Valencia', address: 'City of Arts and Sciences, Valencia', imageUrl: './disaster.png'})
      var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
    })

    const overlayMaps = {
      'Flood layer': ndvi,
    };

    // Add default layers
    osm.addTo(map);

    // Add layer control
    L.control.layers(baseMaps, overlayMaps).addTo(map);

    return () => {
      if (map) map.remove();
    };
  }, [selectedLocation]);

  console.log(selectedLocation)

  return (
    <div className="flex w-[96%] h-[75%] flex-row absolute">
      <div id="map" style={{ height: '  '  }} className={`${styles.mapdrone}  h-[100x] flex w- z-0`} />
      {/* <SelectedPost open={isOpen} selectedData={selectedData}></SelectedPost> */}

    </div>
  );
};

const Marker = ({ name = "Title generated by AI", setSelectedData, setOpen}) => {

  return (
    <button className="w-36 overflow-hidden rounded-2xl bg-white" onClick={() =>{setSelectedData({Name: name, Image: 'url(./disaster.png)'}), setOpen(true)}}>
      <div className="w-36 h-36 overflow-hidden" style={{ backgroundImage: 'url(./disaster.png)', backgroundSize: "cover" }} />
      <div className="w-full h-fit p-2">
        <p className="text-sm">{name}</p>
        <p className="text-xs">Approx. location</p>
      </div>
    </button>
  )
}

export default MapDrone

