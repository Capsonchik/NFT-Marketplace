import styled from "styled-components";
import { ButtonBlue } from '../../globalStyled/styled.global'

export const StyledCardInfo = styled.div`
  padding: 35px 48px 5px;
  width: 256px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FCFCFD;
  border: 1px solid #E6E8EC;
  box-shadow: 0 40px 32px -24px rgba(15, 15, 15, 0.12);
  margin: -115px 0 100px 0;


  & h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    padding: 20px 0 5px 0;
  }

  & span {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    padding-right: 6px;

  }

  & p {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    padding: 20px 0 20px;
    color: #777E91;
    text-align: center;
  }
  
  .img-avatar {
    width: 160px;
    height: 160px;
    background: #45B36B;
    border-radius: 128px;
  }

  .btn-wrapper {
    display: flex;
    text-align: center;
    align-items: center;
    margin: 48px 0 50px 0;
  }

  .btnText {
    text-align: center;
    color: #FCFCFD;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }

  .btn-social {
    border-bottom: 1px solid #E6E8EC;
    min-width: 190px;
    padding: 0 34px 48px 36px;
    background: #FCFCFD;

  }

  .history {
    padding: 28px 0 0 0;
  }

`
export const BtnCard = styled(ButtonBlue)``

export const BtnDownload = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 50%;
    padding: 7px;
    border: 2px solid gainsboro;
    margin: 0 9px;
    cursor: pointer;
`
export const BtnMore = styled(BtnDownload)`
   margin: 0;
`

export const BtnSocial = styled.button`
    border: none;
    margin: 0 10px;
    background-color: #fff;
    cursor: pointer;

    :hover {
        transform: scale(1.2);
    }
    
`