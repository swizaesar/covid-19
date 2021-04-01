import React from "react";

import ReactGoogleMaps from "./index.map";
import Style from "./index.style";

const Maps = ({
    labelMaps = "",
    location = false,
    onReCenterMaps = () => {},
    mapsElement = () => {},
    markerElement = () => {},
}) => {
    return (
        <ReactGoogleMaps
            markerElement={markerElement}
            labelMaps={labelMaps}
            mapsElement={mapsElement}
            onReCenterMaps={onReCenterMaps}
            zoom={6}
            location={location}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7kC4xDnxLc35ydrmkjnzhH4zi3kG9IkI&v=3.exp&libraries=geometry,drawing,places"
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
