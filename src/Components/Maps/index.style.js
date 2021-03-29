import styled from "styled-components";

export const Style = styled.div`
    width: 100%;
    display: block;
    position: relative;
    height: 450px;
    margin-bottom: 15px;
    .google-maps {
        &--search-box {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            input {
                width: 50%;
                box-sizing: border-box;
                border: 1px solid transparent;
                padding: 8px 16px;
                border-radius: 4px;
                box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px;
                font-size: 16px;
                outline: none;
            }
        }
    }
    button.btn-current-location {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        font-size: 20px;
        padding: 0;
        position: absolute;
        top: 14px;
        right: 2px;
        cursor: pointer;
        z-index: 3;
    }
    .gm-style .gm-style-iw-c {
        max-width: 250px !important;
        font-size: 13px !important;
        font-weight: 400 !important;
        font-family: "Muli", sans-serif !important;
        color: #4a4a4a !important;
        padding-bottom: 12px !important;
    }
`;

export const FormStyle = styled.div`
    width: 100%;
    display: block;
    position: relative;
    height: 350px;
    .google-maps {
        &--search-box {
            position: absolute;
            top: 10px;
            left: 10px;
            right: 10px;
            input {
                width: 50%;
                box-sizing: border-box;
                border: 1px solid transparent;
                padding: 8px 16px;
                border-radius: 4px;
                box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px;
                font-size: 16px;
                outline: none;
            }
        }
    }
    button.btn-current-location {
        height: 45px;
        width: 45px;
        border-radius: 50%;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        font-size: 20px;
        padding: 0;
        position: absolute;
        top: 14px;
        right: 2px;
        cursor: pointer;
        z-index: 3;
    }
    .gm-style .gm-style-iw-c {
        max-width: 250px !important;
        font-size: 13px !important;
        font-weight: 400 !important;
        font-family: "Muli", sans-serif !important;
        color: #4a4a4a !important;
        padding-bottom: 12px !important;
    }
`;
