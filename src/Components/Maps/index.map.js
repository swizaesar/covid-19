import React, { useEffect, useState, useRef, useCallback } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";

import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";

const ReactGoogleMaps = withScriptjs(
    withGoogleMap((props) => {
        const { onGetValue = () => {} } = props;
        const searchBox = useRef(null);
        const mapsElement = useRef(null);
        const markerElement = useRef(null);
        const [defaultLocation, setLocation] = useState({
            lat: -0.789275,
            lng: 113.921327,
        });
        const [labelMaps, setLabel] = useState("Your location");
        const [isLabel, setShowLabel] = useState(true);

        const onPlacesChanged = () => {
            const resultLocaltion = searchBox.current.getPlaces();
            if (resultLocaltion && resultLocaltion.length > 0) {
                const { location } = resultLocaltion[0]?.geometry;

                onReCenterMaps({
                    lat: location.lat(),
                    lng: location.lng(),
                });
            }
        };

        const onGetCurrentLocation = (isButton) => {
            const { lat = "", lng = "" } = props.location;

            if ((!lat && !lng) || isButton) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        onReCenterMaps({
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
            }
        };

        const onMarkerDragEnd = (data) => {
            const positionMarker = markerElement.current.getPosition();

            if (positionMarker) {
                onReCenterMaps({
                    lat: positionMarker.lat(),
                    lng: positionMarker.lng(),
                });
            }
        };

        const onReCenterMaps = ({ lat, lng }) => {
            setLocation({
                lat: lat,
                lng: lng,
            });
            onGetValue({
                lat: lat,
                lng: lng,
            });
            mapsElement.current.panTo(new window.google.maps.LatLng(lat, lng));
            let geocoder = new window.google.maps.Geocoder();
            let latlng = new window.google.maps.LatLng(lat, lng);
            geocoder.geocode({ latLng: latlng }, function (results, status) {
                if (status === "OK" && results?.length > 0) {
                    setLabel(results[0].formatted_address);
                }
            });
        };

        const stableHandler = useCallback(onGetCurrentLocation, []);

        useEffect(() => {
            stableHandler();
            return () => {};
        }, [stableHandler]);

        const onToggleShowLabel = () => {
            setShowLabel(!isLabel);
        };

        return (
            <GoogleMap
                ref={mapsElement}
                defaultZoom={props.zoom}
                defaultCenter={defaultLocation}
                yesIWantToUseGoogleMapApiInternals
            >
                <Marker
                    ref={markerElement}
                    draggable={true}
                    onDragEnd={onMarkerDragEnd}
                    position={defaultLocation}
                    onClick={onToggleShowLabel}
                >
                    {isLabel && (
                        <InfoWindow onCloseClick={onToggleShowLabel}>
                            <div>{labelMaps}</div>
                        </InfoWindow>
                    )}
                </Marker>
                <div className="search-box-google">
                    <StandaloneSearchBox
                        ref={searchBox}
                        onPlacesChanged={onPlacesChanged}
                    >
                        <div className="google-maps--search-box">
                            <input
                                type="text"
                                placeholder="Search place in here"
                            />
                        </div>
                    </StandaloneSearchBox>
                </div>
            </GoogleMap>
        );
    })
);

export default ReactGoogleMaps;
