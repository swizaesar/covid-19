/*eslint-disable*/
import React from "react";
import JumbotronCustom from "./Components/Jumbotron";
import Sidebar from "./Components/Sidebar";
import Section from "./Components/Section";
import styled from "styled-components";
import { Col, Container, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import service from "./index.service";
const Style = styled.div`
    .title {
        margin-bottom: 10px;
        padding-bottom: 5px;
        position: relative;
        width: max-content;
    }
`;
const App = () => {
    const [dataCountry, setDataCountry] = React.useState(false);
    const [isFirstGet, setFirstGet] = React.useState(true);
    const [country, setCountry] = React.useState(false);
    const [total, setTotal] = React.useState(false);
    const [location, setLocation] = React.useState({
        latitude: false,
        longitude: false,
    });
    const state = useSelector((state) => state);
    const mapsElement = React.useRef(null);
    const [isActive, setActive] = React.useState("Indonesia");
    const markerElement = React.useRef(null);
    const [labelMaps, setLabel] = React.useState("Your location");
    const dispatch = useDispatch();

    const handleViewCountry = (data) => {
        setActive(data.name);
        let params = {
            name: data.name,
        };
        service.getCountryByName({ dispatch, params });
    };
    const onReCenterMaps = ({ lat, lng }) => {
        setLocation({
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
    React.useEffect(() => {
        if (isFirstGet) {
            service.getCountry({ dispatch });
            setTimeout(() => {
                service.getLatestTotal({ dispatch });
            }, 2000);
            setFirstGet(false);
        }
    }, [isFirstGet]);
    React.useEffect(() => {
        if (state?.country?.countries?.isSuccess) {
            setDataCountry(
                state.country.countries.data.filter(
                    (item) => item.alpha2code === "ID"
                )[0]
            );
            setCountry(state.country.countries.data);
            service.getCountryClear({ dispatch });
        }
        if (state?.country?.getLatestTotal?.isSuccess) {
            setTotal(state.country.getLatestTotal.data[0]);
            let params = {
                name: dataCountry.name,
            };
            service.getLatestTotalClear({ dispatch });
            setTimeout(() => {
                service.getCountryByName({ dispatch, params });
            }, 2000);
        }
        if (state?.country?.countryName?.isSuccess) {
            setDataCountry(state.country.countryName.data[0]);
            service.getCountryByNameClear({ dispatch });
            onReCenterMaps({
                lat: state.country.countryName.data[0].latitude,
                lng: state.country.countryName.data[0].longitude,
            });
            setLocation({
                latitude: state.country.countryName.data[0].latitude,
                longitude: state.country.countryName.data[0].longitude,
            });
        }
    }, [state]);
    return (
        <Style className="App">
            <JumbotronCustom data={total} />
            <Container fluid>
                <Row>
                    <Col xl={4} md={4} sm={12}>
                        <h6 className="title">Country</h6>
                        <Sidebar
                            isActive={isActive}
                            handleViewCountry={handleViewCountry}
                            data={country}
                        />
                    </Col>
                    <Col xl={8} md={8} sm={12}>
                        <h6 className="title">Map</h6>
                        <Section
                            markerElement={markerElement}
                            labelMaps={labelMaps}
                            mapsElement={mapsElement}
                            onReCenterMaps={onReCenterMaps}
                            location={location}
                            data={dataCountry}
                        />
                    </Col>
                </Row>
            </Container>
        </Style>
    );
};

export default App;
