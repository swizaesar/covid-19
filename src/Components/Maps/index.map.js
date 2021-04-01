/*eslint-disable*/

import React, { useEffect, useState, useCallback } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const ReactGoogleMaps = withScriptjs(
    withGoogleMap((props) => {
        const { onReCenterMaps = () => {}, mapsElement = () => {} } = props;

        // const searchBox = useRef(null);
        const [defaultLocation, setLocation] = useState({
            lat: -0.789275,
            lng: 113.921327,
        });
        const onGetCurrentLocation = (isButton) => {
            const { lat = "", lng = "" } = props.location;

            if ((!lat && !lng) || isButton) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        onReCenterMaps({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                        setLocation({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    });
                }
            } else {
                onReCenterMaps({
                    lat: lat,
                    lng: lng,
                });
                setLocation({
                    lat: lat,
                    lng: lng,
                });
            }
        };

        const stableHandler = useCallback(onGetCurrentLocation, []);

        useEffect(() => {
            stableHandler();
            return () => {};
        }, [stableHandler]);
        return (
            <GoogleMap
                ref={mapsElement}
                zoom={props.zoom}
                defaultCenter={defaultLocation}
                yesIWantToUseGoogleMapApiInternals
            ></GoogleMap>
        );
    })
);

export default ReactGoogleMaps;
