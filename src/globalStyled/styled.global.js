import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`

export const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FlexBoxColumn = styled.div`
    display: flex;
    flex-direction: column;
`

export const Header = styled.h2`
    font-weight: 700;
    font-size: 40px;
    color: #23262F;
    margin-bottom: 64px;
`

export const Button = styled.button`
    padding: 12px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    border: 2px solid #777E91;
    border-radius: 90px;
    background: transparent;
    color: white;
`

export const ButtonBlue = styled(Button)`
    background: #3772FF;
    border-radius: 90px;
    padding: 12px 16px;
    border: none;
    margin: 0;
    cursor: pointer;
`