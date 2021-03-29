import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import styled from "styled-components";
import Maps from "../Maps";
const SectionStyle = styled(Card)`
    text-align: left;
    font-size: 14px;
    .title {
        font-size: 16px;
    }
    .card {
        margin-bottom: 30px;
        border-radius: 20px;
    }
`;
const Section = () => {
    const handlerGetLocation = (locationValue, e) => {
        console.log("location", locationValue);
    };
    return (
        <SectionStyle>
            <CardBody>
                <div>
                    <Maps
                        onGetValue={(locationValue, e) =>
                            handlerGetLocation(locationValue, e)
                        }
                        label="Location Maps"
                    ></Maps>
                </div>
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
            </CardBody>
        </SectionStyle>
    );
};
export default Section;
