import styled, {css} from 'styled-components'

export const StyledUploadPage = styled.div`
  
  .upload-btn__back {
    
  }
  .upload-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .upload-subtitle {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #23262F;
  }
  
  .upload-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #777E91;
    width: 58%;
    margin: 16px 0 80px 0;
  }
  
  .upload-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .btn-border {
    border: 1px solid #E6E8EC;
    border-radius: 16px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .margin {
    margin-right: 32px;
  }
  
  .upload-footer {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #777E91;
    padding: 32px 0 136px 0;
  }
  
`

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  margin-top: 15px;
  border: 2px solid #E6E8EC;
  border-radius: 90px;
  background-color: transparent;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #23262F;
  cursor: pointer;

  ${props => props.primary && css`
    background: #3772FF;
    color: white;
    border: 2px solid #3772FF;
  `}
  
  
  &:hover {
    border: 2px solid black;

    ${props => props.primary && css`
      border: 2px solid #151966;
  `}
  }
  
`