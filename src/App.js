import React, { useEffect, useRef } from "react";
import {
  LayersControl,
  Map,
  LayerGroup,
  TileLayer,
  SVGOverlay
} from "react-leaflet";
import Grid from "./Grid";
import Svg from "./SVGComp";

const center = [51.505, -0.09];

export default function App() {
  return (
    <Map center={center} zoom={13} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url=""
      />
      <Grid />
    </Map>
  );
}
