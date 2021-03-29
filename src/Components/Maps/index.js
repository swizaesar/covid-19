import React from "react";

import ReactGoogleMaps from "./index.map";
import { Style } from "./index.style";

const Maps = ({ onGetValue = () => {}, location = false }) => {
    return (
        <ReactGoogleMaps
            zoom={8}
            onGetValue={onGetValue}
            location={location}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7kC4xDnxLc35ydrmkjnzhH4zi3kG9IkI&callback=initMap"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
                <Style
                    className="google-maps"
                    style={{ positon: "relative" }}
                />
            }
            mapElement={<div style={{ height: `100%` }} />}
        ></ReactGoogleMaps>
    );
};

export default Maps;
