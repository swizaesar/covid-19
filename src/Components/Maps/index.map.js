import React, { useState, useRef } from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker,
} from "react-google-maps";

const ReactGoogleMaps = withScriptjs(
    withGoogleMap((props) => {
        const { onGetValue = () => {} } = props;
        const mapsElement = useRef(null);
        const markerElement = useRef(null);
        const [defaultLocation, setLocation] = useState({
            lat: -0.789275,
            lng: 113.921327,
        });
        const [labelMaps, setLabel] = useState("Your location");
        const [isLabel, setShowLabel] = useState(true);

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
        const onToggleShowLabel = () => {
            setShowLabel(!isLabel);
        };

        return (
            <GoogleMap
                ref={mapsElement}
                defaultZoom={props.zoom}
                defaultCenter={defaultLocation}
                options={{
                    fullscreenControl: false,
                    mapTypeControl: false,
                    styles: [
                        {
                            stylers: [
                                { saturation: -100 },
                                { gamma: 0.8 },
                                { lightness: 4 },
                                { visibility: "on" },
                            ],
                        },
                    ],
                }}
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
            </GoogleMap>
        );
    })
);

export default ReactGoogleMaps;
