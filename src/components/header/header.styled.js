import styled from "styled-components";
import { Container } from "../../globalStyled/styled.global";

export const StyledHeader = styled.header`
    .nav-link {
        text-decoration: none;
        font-weight: 700;
        font-size: 14px;
        color: #777E91;
        cursor: pointer;

        :first-child {
            margin-right: 32px;
        }

        :hover {
            color: #23262F;
        }
    }

    .header-search {
        width: 254px;
        height: 40px;
        border: none;
        padding-left: 10px;
        font-weight: 400;
        font-size: 12px;
        color: #777E91;
        outline: none;
        -webkit-appearance: none;
    }

    .header-input {
        display: flex;
        border: 2px solid #E6E8EC;
        border-radius: 12px;

        & img {
            cursor: pointer;
        }
    }

    .search-button {
        background-color: inherit;
        height: 40px;
        border: none;
        padding-right: 14px;
    }

    .header-upload-btn {
        cursor: pointer;
        width: 80px;
        height: 40px;
        border: 0;
        border-radius: 90px;
        background: #3772FF;
        font-weight: 600;
        font-size: 14px;
        color: #FCFCFD;
    }

    .img {
        border: none;
        background-color: white;
        cursor: pointer;
        position: relative;
    }
`

export const HeaderFlexContainer = styled(Container)` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #E6E8EC;
    padding-top: 32px;
    padding-bottom: 32px;
`