import React from "react";
import { Card, CardBody, Col, Container, Jumbotron, Row } from "reactstrap";
import styled from "styled-components";
import Background from "../Assets/Images/background.jpeg";

const JumbotronStyle = styled(Jumbotron)`
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: unset;
    margin-bottom: 30px;
    .card {
        margin-bottom: 30px;
        border-radius: 20px;
    }
`;

const JumbotronCustom = () => {
    return (
        <JumbotronStyle>
            <Container>
                <Row>
                    <Col xl={4} md={4} sm={4}>
                        <Card>
                            <CardBody></CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} md={4} sm={4}>
                        <Card>
                            <CardBody></CardBody>
                        </Card>
                    </Col>
                    <Col xl={4} md={4} sm={4}>
                        <Card>
                            <CardBody></CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </JumbotronStyle>
    );
};
export default JumbotronCustom;
