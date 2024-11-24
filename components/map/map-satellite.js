'use client';
import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from './map.module.css';
import { renderToString } from "react-dom/server";
import { MarkerClusterGroup } from "leaflet.markercluster";
import SelectedPost from "../selectedPost";
import DateCalendar from "../DateCalendar";

const DEFAULT_CENTER = [39.35, -0.3790];

const Map = ({}) => {
  const [activeLayer, setActiveLayer] = useState('sentinel');
  const [selectedData, setSelectedData] = useState({})
  const [isOpen, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("2024-10-31"); // Default date

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the date
  };


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
        time: selectedDate + '/' + selectedDate
      });
    }

    // Create Sentinel layers
    const ndvi = createWmsLayer("NDVI",selectedDate);

    // Define base and overlay maps
    const baseMaps = {
      'Map': osm,
      'Satellite': satellite 
    };

    const overlayMaps = {
      'Flood layer': ndvi,
    };

    // Add default layers
    satellite.addTo(map);
    ndvi.addTo(map);

    // Add layer control
    L.control.layers(baseMaps, overlayMaps).addTo(map);

    return () => {
      if (map) map.remove();
    };
  }, [selectedDate]);

  return (
    <div className="flex flex-1 w-full h-full flex-row relative">
      <div id="map" className={`${styles.map} h-[100vh] flex flex-1 w-full`} />
      {/* <SelectedPost open={isOpen} selectedData={selectedData}></SelectedPost> */}
      <DateCalendar onDateChange={handleDateChange}/>

    </div>
  );
};

export default Map

