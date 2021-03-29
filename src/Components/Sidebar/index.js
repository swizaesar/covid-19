import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
const SidebarStyle = styled(Card)`
    text-align: left;
    font-size: 14px;

    .btn {
        &-country {
            display: block;
            padding-left: 0;
            width: 100%;
            text-align: left;
        }
    }
`;
const Sidebar = () => {
    return (
        <SidebarStyle>
            <CardBody>
                <button type="button" className="btn btn-country">
                    America
                </button>
                <button type="button" className="btn btn-country">
                    Australia
                </button>
            </CardBody>
        </SidebarStyle>
    );
};
export default Sidebar;
