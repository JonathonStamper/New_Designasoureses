'use client';

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.module.css"

const DEFAULT_CENTER = [45.436913, 12.333416]; // Updated to match the example

const Map = () => {
  useEffect(() => {
    var container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }
    var map = L.map("map", {
      dragging: true, // Enabled dragging on the map
      zoomControl: true,
    }).setView(DEFAULT_CENTER, 12); // Updated to match the example
    let osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }, []);

  return <div id="map" className="map h-full w-full"></div>;
};

export default Map; 