import React from "react";
import Maps from "../Maps";
import Style from "./index.style";
import {
    FormGroup,
    Label,
    FormFeedback,
    FormText,
    Input,
    Row,
    Col,
} from "reactstrap";

const FormMap = ({
    latitude = false,
    longitude = false,
    help = false,
    errorLatitude = false,
    errorLongitude = false,
    label = "",
    onGetValue = () => {},
}) => {
    return (
        <Style>
            <Label>{label}</Label>
            <Maps
                location={{ lat: longitude, lng: latitude }}
                onGetValue={onGetValue}
            ></Maps>
            <Row form>
                <Col lg={6} sm={12} xs={12} md={6}>
                    {latitude && (
                        <FormGroup>
                            <Label for="latitude">Latitude</Label>
                            <Input
                                id="latitude"
                                type="text"
                                defaultValue={latitude}
                                className={
                                    errorLatitude
                                        ? "is-invalid form-control"
                                        : "form-control-alternative form-control"
                                }
                                readOnly={true}
                                invalid={errorLatitude ? true : false}
                                placeholder="latitude"
                                name="latitude"
                            ></Input>
                            {errorLatitude && (
                                <FormFeedback>{errorLatitude}</FormFeedback>
                            )}
                            {help && <FormText>{help}</FormText>}
                        </FormGroup>
                    )}
                </Col>
                <Col lg={6} sm={12} xs={12} md={6}>
                    {longitude && (
                        <FormGroup>
                            <Label for="longitude">longitude</Label>
                            <Input
                                id="longitude"
                                type="text"
                                defaultValue={longitude}
                                className={
                                    errorLongitude
                                        ? "is-invalid form-control"
                                        : "form-control-alternative form-control"
                                }
                                readOnly={true}
                                invalid={errorLongitude ? true : false}
                                placeholder="longitude"
                                name="longitude"
                            ></Input>
                            {errorLongitude && (
                                <FormFeedback>{errorLongitude}</FormFeedback>
                            )}
                            {help && <FormText>{help}</FormText>}
                        </FormGroup>
                    )}
                </Col>
            </Row>
        </Style>
    );
};

export default FormMap;
