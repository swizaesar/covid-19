import React from "react";
import { Input } from "reactstrap";
import styled from "styled-components";

const InputStyle = styled.div`
    position: relative;
`;

const InputSearch = ({
    placeholder = "",
    type = "text",
    id = "",
    name = "",
}) => {
    return (
        <InputStyle>
            <Input
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
            ></Input>
            <button type="button">
                <i className="fa fa-search"></i>
            </button>
        </InputStyle>
    );
};
export default InputSearch;
