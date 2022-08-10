import styled from 'styled-components';
import {Button, ButtonBlue} from '../../../globalStyled/styled.global';

export const StyledPersonalInformation = styled.div`
  display: flex;
  
.profile-photo {
  display: flex;
  padding-right: 32px;
  width: 100%;
  
  &__img {
    padding-right: 32px;
  }
  
  &__avatar {
    width: 160px;
    height: 160px;
    background: #45B36B;
    border-radius: 128px;
  }
}

.information-user {
  display: flex;
  flex-direction: column;
  
  &__subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #23262F;
  }
  
  &__title {
    max-width: 155px;
    padding: 8px 0 0 0;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #777E91;
    display: flex;
    align-items: center;
  }
  
  &__title-br {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #777E91;
    display: flex;
    align-items: center;
    padding-bottom: 25px;
  }
  
  &__btn {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #23262F;
  }
}

.account {
  display: flex;
  flex-direction: column;
  width: 48%;
}

.account-info {
  display: flex;
  flex-direction: column;
}

.text-yourself {
  padding: 12px 16px;
  border: 2px solid #E6E8EC;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #777E91;
  margin-bottom: 40px;
  
  &:hover {
    border-color: black;
    cursor: pointer;
  }
}
  
  .social-input {
    display: flex;
    border: 2px solid #E6E8EC;
    border-radius: 12px;
    align-items: center;
    
    &:hover {
      border-color: black;
    }
  }
  
  .plus {
    padding-right: 12px;
  }
  
  .social-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #777E91;
    border-bottom: 1px solid #E6E8EC;
    padding-bottom: 40px;
  }

  .social-update__btn {
    padding: 40px 0;
    display: flex;
    align-items: center;
    margin-bottom: 136px;
  }
  
  .social-img__cross {
    padding-right: 8px;
  }
`

export const Subtitle = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #23262F;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #B1B5C4;
  padding: 32px 0 15px 0;
`

export const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #E6E8EC;
  border-radius: 12px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #777E91;

  &:hover {
    border-color: black;
    cursor: pointer;
  }
`

export const InputBorder = styled(Input)`
  border: none;
  outline: none;
  -webkit-appearance: none;
`

export const ButtonUpload = styled(Button)`
  display: flex;
  align-items: center;
  border: 2px solid #E6E8EC;
  width: 80px;
  cursor: pointer;
  
  &:hover {
    border: 2px solid black;
  }
`

export const ButtonAccount = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #23262F;
  width: 63%;
  height: 33px;
  margin-right: 5px;
  border: 2px solid #E6E8EC;
  cursor: pointer;
  
  &:hover {
    border-color: black;
  }
`

export const ButtonMoreSocial = styled(ButtonAccount)`
  width: 67%;
  padding: 20px 0;
  margin: 30px 0;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #777E91;
`

export const ButtonUpdate = styled(ButtonBlue)`
  padding: 16px 24px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  margin-right: 34px;
  
  &:hover {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px #777E91;
}
`
export const ButtonClear = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  color: #777E91;
  border: 2px solid transparent;
  padding-right: 22px;
  cursor: pointer;
  
  &:hover {
    border: 2px solid black;
    transform: scale(1.01);
    box-shadow: 4px 4px 4px #777E91;
  }
`

