import React from "react";
import { Card, CardBody, Col, Container, Jumbotron, Row } from "reactstrap";
import styled from "styled-components";
import SkeletonLoading from "../Skeleton";
import { formatNumber } from "../../Utils/NumberConverter";

const JumbotronStyle = styled(Jumbotron)`
    background: #2947a1;
    min-height: 450px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: unset;
    margin-bottom: 30px;
    .card {
        border-radius: 20px;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        box-shadow: 0px 6px 30px 5px rgba(0, 0, 0, 0.1);

        .fa-user-friends {
            margin-right: 15px;
        }
    }
`;

const JumbotronCustom = ({ data = false }) => {
    return (
        <JumbotronStyle>
            <Container>
                <Row>
                    {data ? (
                        <React.Fragment>
                            <Col xl={4} md={4} sm={4}>
                                <Card>
                                    <CardBody>
                                        Confirmed <br />
                                        <i className="fas fa-user-friends"></i>{" "}
                                        {formatNumber(data.confirmed)}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <Card>
                                    <CardBody className="text-warning">
                                        Critical <br />
                                        <i className="fas fa-user-friends"></i>{" "}
                                        {formatNumber(data.critical)}
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <Card>
                                    <CardBody className="text-danger">
                                        Deaths <br />
                                        <i className="fas fa-user-friends"></i>{" "}
                                        {formatNumber(data.deaths)}
                                    </CardBody>
                                </Card>
                            </Col>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Col xl={4} md={4} sm={4}>
                                <SkeletonLoading width="100%" height="100px" />
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <SkeletonLoading width="100%" height="100px" />
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <SkeletonLoading width="100%" height="100px" />
                            </Col>
                        </React.Fragment>
                    )}
                </Row>
            </Container>
        </JumbotronStyle>
    );
};
export default JumbotronCustom;
