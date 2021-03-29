import { Card, CardBody, Col, Container, Row } from "reactstrap";
import "./App.css";
import JumbotronCustom from "./Components/Jumbotron";
import Sidebar from "./Components/Sidebar";
import Section from "./Components/Section";
import styled from "styled-components";

const Style = styled.div`
    .title {
        margin-bottom: 10px;
        padding-bottom: 5px;
        position: relative;
        width: max-content;
    }
`;
const App = () => {
    return (
        <Style className="App">
            <JumbotronCustom />
            <Container fluid>
                <Row>
                    <Col xl={4} md={4} sm={12}>
                        <h6 className="title">Country</h6>
                        <Sidebar />
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
