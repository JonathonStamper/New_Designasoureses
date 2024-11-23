'use client';

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.module.css"

const DEFAULT_CENTER = [39.466667, -0.375000]; // Updated to match the example

const Map = () => {
  useEffect(() => {
    let map;
    var container = L.DomUtil.get("map");
  
    if (container != null) {
      container._leaflet_id = null;
    }
  
    map = L.map("map", {
      zoomControl: true,
      dragging: true,
    }).setView(DEFAULT_CENTER, 12);
  
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
  
    return () => {
      if (map) map.remove();
    };
  }, []);

  return <div id="map" className="map h-full w-full"></div>;
};

export default Map; 