import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import styled from "styled-components";
import { formatNumber } from "../../Utils/NumberConverter";
import Maps from "../Maps";
import SkeletonLoading from "../Skeleton";
const SectionStyle = styled(Card)`
    text-align: left;
    font-size: 14px;
    box-shadow: 0px 6px 30px 5px rgba(0, 0, 0, 0.1);
    .title {
        font-size: 16px;
    }
    .card {
        margin-bottom: 30px;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;
        .fa-user-friends {
            margin-right: 15px;
        }
    }
`;
const Section = ({
    labelMaps = "",
    data,
    location = {},
    markerElement = () => {},
    onReCenterMaps = () => {},
    mapsElement = () => {},
}) => {
    return (
        <SectionStyle>
            <CardBody>
                <div>
                    <Maps
                        markerElement={markerElement}
                        labelMaps={labelMaps}
                        mapsElement={mapsElement}
                        onReCenterMaps={onReCenterMaps}
                        location={location}
                        label="Location Maps"
                    ></Maps>
                </div>
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
                                <SkeletonLoading width="100%" height="70px" />
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <SkeletonLoading width="100%" height="70px" />
                            </Col>
                            <Col xl={4} md={4} sm={4}>
                                <SkeletonLoading width="100%" height="70px" />
                            </Col>
                        </React.Fragment>
                    )}
                </Row>
            </CardBody>
        </SectionStyle>
    );
};
export default Section;
