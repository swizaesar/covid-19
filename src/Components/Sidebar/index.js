import React from "react";
import { Card, CardBody, Input } from "reactstrap";
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
const Sidebar = ({
    data = false,
    handleViewCountry = () => {},
    handleSearchCountry = () => {},
}) => {
    return (
        <SidebarStyle>
            <CardBody>
                <div style={{ maxHeight: 500, overflow: "auto" }}>
                    {data && (
                        <React.Fragment>
                            <Input
                                type="text"
                                placeholder="Search..."
                                onChange={({ target: { value } }) =>
                                    handleSearchCountry(value)
                                }
                            />
                            {data.map((item, key) => {
                                return (
                                    <button
                                        onClick={() => handleViewCountry(item)}
                                        key={key}
                                        type="button"
                                        className="btn btn-country"
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
