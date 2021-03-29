import React from "react";
import { Input } from "reactstrap";
import styled from "styled-components";

const InputStyle = styled.div`
    display: flex;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-size: 14px;
    .form-control {
        border: unset;
        border-radius: 0 0.25rem 0.25rem 0;
        &:focus {
            outline: unset;
            box-shadow: unset;
        }
    }
    .btn {
        &-search {
            padding-right: 0;
            color: #495057;
            background: #fff;
            border-radius: 0.25rem 0 0 0.25rem;
            &:focus {
                outline: unset;
                box-shadow: unset;
            }
        }
    }
`;

const InputSearch = ({
    placeholder = "",
    type = "text",
    id = "",
    name = "",
}) => {
    return (
        <InputStyle>
            <button type="button" className="btn btn-search">
                <i className="fa fa-search"></i>
            </button>
            <Input
                placeholder={placeholder}
                name={name}
                id={id}
                type={type}
            ></Input>
        </InputStyle>
    );
};
export default InputSearch;
