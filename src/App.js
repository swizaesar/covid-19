import React from "react";
import JumbotronCustom from "./Components/Jumbotron";
import Sidebar from "./Components/Sidebar";
import Section from "./Components/Section";
import styled from "styled-components";
import { Col, Container, Row } from "reactstrap";
// import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import debounce from "./Utils/Debounce";
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
    const [isFirstGet, setFirstGet] = React.useState(true);
    const [country, setCountry] = React.useState(false);
    const [total, setTotal] = React.useState(false);
    const state = useSelector((state) => state);
    console.log("state", state);
    const dispatch = useDispatch();
    const handleSearchCountry = debounce((value) => {
        console.log(value);
        service.getCountryByName({ dispatch, params: { name: value } });
    }, 750);
    const handleViewCountry = (data) => {
        console.log(data);
    };
    React.useEffect(() => {
        if (isFirstGet) {
            service.getCountry({ dispatch });
        }
    }, [isFirstGet]);
    React.useEffect(() => {
        if (state?.country?.countries?.isSuccess) {
            setCountry(state.country.countries.data);
            console.log("state", state);
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
                            handleSearchCountry={handleSearchCountry}
                            handleViewCountry={handleViewCountry}
                            data={country}
                        />
                    </Col>
                    <Col xl={8} md={8} sm={12}>
                        <h6 className="title">Map</h6>
                        <Section />
                    </Col>
                </Row>
            </Container>
        </Style>
    );
};

export default App;
