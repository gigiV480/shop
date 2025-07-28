import classes from "./ShopFiller.module.css"

import type { ShopFillerType } from "../../types/types";
import type React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const ShopFiller: React.FC<ShopFillerType> = ({title, location, mapLocation}) =>{
    return <div className={classes.container}>
        <h1>{title}</h1>
        <div className={classes.hours}>
            <h1>Working hours</h1>
            <h2>Monday 09:00 - 18:00</h2>
            <h2>Tuesday 09:00 - 18:00</h2>
            <h2>Wednesday 09:00 - 18:00</h2>
            <h2>Thursday 09:00 - 18:00</h2>
            <h2>Friday 09:00 - 18:00</h2>
            <h2>Saturday 09:00 - 14:00</h2>
        </div>
        <div className={classes.map}>
        <h2>{location}</h2>
            <MapContainer center={mapLocation} zoom={17} style={{ height: '100%', width: '100' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={mapLocation}>
                    <Popup>Giza</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
}

export default ShopFiller