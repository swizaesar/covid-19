import React from "react";
import { Card, CardBody } from "reactstrap";
import styled from "styled-components";
const SidebarStyle = styled(Card)`
    text-align: left;
    font-size: 14px;
    box-shadow: 0px 6px 30px 5px rgba(0, 0, 0, 0.1);
    .btn {
        &-country {
            display: block;
            padding-left: 0;
            width: 100%;
            text-align: left;
            transition: all 0.25s ease;
        }
        &.active {
            padding-left: 10px;
            background: #2947a2;
            color: #fff;
            transition: all 0.25s ease;
        }
        &:focus {
            outline: unset;
            box-shadow: unset;
        }
    }
`;
const Sidebar = ({
    data = false,
    handleViewCountry = () => {},
    isActive = "Indonesia",
}) => {
    return (
        <SidebarStyle>
            <CardBody>
                <div style={{ maxHeight: 500, overflow: "auto" }}>
                    {data && (
                        <React.Fragment>
                            {data.map((item, key) => {
                                return (
                                    <button
                                        onClick={() => handleViewCountry(item)}
                                        key={key}
                                        type="button"
                                        className={`btn btn-country ${
                                            isActive === item.name
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {item.name}
                                    </button>
                                );
                            })}
                        </React.Fragment>
                    )}
                </div>
            </CardBody>
        </SidebarStyle>
    );
};
export default Sidebar;
