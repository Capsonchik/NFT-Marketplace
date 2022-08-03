import styled from 'styled-components'
import { FlexBox, Button } from '../../../globalStyled/styled.global'


export const StyledSectionEditBtn = styled.div`
    .button-img {
        padding-left: 12px;
        color: white;

        &__shape {
        margin-left: -12px;
        margin-bottom: -2px;
        }

        &__pencil {
            position: absolute;
            right: 15px;
        } 
    }

    .button-text {
        color: white;
        text-decoration: none;
    }
`

export const FlexBtn = styled(FlexBox)`
    justify-content: end;
    align-items: end;
    padding-bottom: 23px;
    height: 320px;
`

export const EditProfile = styled(Button)`
    position: relative;
    padding-right: 43px;
    display: flex;
    align-items: center;
    cursor: pointer;

    transition: 0.5s linear;

    :hover {
        color: #fff;
        background: #3059c7;
        border: 2px solid transparent;
    
    }
`

export const EditPhoto = styled(EditProfile)`
    margin-right: 20px;
    padding-right: 15px;
`