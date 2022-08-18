import styled from 'styled-components';
import {
  ButtonMoreSocial,
  Title
} from '../../pages/editProfile/edit-personal-information/edit-personal-information.styled';

const StyledAddImport = styled.div`
  .add-input{
    display: flex;
    flex-direction: column;
    padding: 12px 16px;
    border: none;
    border-radius: 12px;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #777E91;

    &:hover {
      border-color: black;
      cursor: pointer;
    }
  }
`

export const AddTitle = (props) => {
  return  <Title>{props.title}</Title>
}

export const AddInput = (props) => {
  return(
    <StyledAddImport>
      <input className='add-input' placeholder={props.text}></input>
    </StyledAddImport>
  )
}

export const ButtonAddInput = (props) => {
  return(
    <ButtonMoreSocial onClick={props.onClick}>
      <img className='plus' src='/img/icons/plus.png' alt='plus'/>
      {props.text}
    </ButtonMoreSocial>
  )
}