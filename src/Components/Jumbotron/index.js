import React from "react";

import { Col, Container, Jumbotron, Row } from "reactstrap";
import InputSearch from "../Input";

const JumbotronCustom = () => {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <InputSearch
                    placeholder="Search..."
                    name="country"
                    id="country"
                    type="text"
                />
            </Container>
        </Jumbotron>
    );
};
export default JumbotronCustom;
