import styled from 'styled-components';
import {ButtonBlue} from '../../globalStyled/styled.global'


export const BtnModal = styled(ButtonBlue)`
    margin-left: 69px;
`

export const StyledNotificationModal = styled.div`
    .block {
        position: relative;
        color: #fff;
    }

    .block::after {
        content: '';
        position: absolute;
        color: green;
        display: block;
        height: 20px;
        width: 20px;
        background-color: inherit;
        border: inherit;
        top: -9px;
        left: calc(50% - 10px);
        clip-path: polygon(0% 0%,100% 100%,0% 100%);
        -ms-transform: rotate(-45deg);
        transform: rotate(135deg);
        border-radius: 0 0 0 0.35em;
    }

    .modal {
      position: relative;
    }
  
    .modal-wrapper {
        background-color: #777E91;
    }

    .modal-popup-active {
        width: 396px;
        height: 550px;
        opacity: 1;
        display: block;
        background-color: white;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.4);
        border-radius: 24px;
        padding: 32px 20px;
        z-index: 2;
        position: absolute;
        right: -186px;
        top: 59px;
        transition: 0.8s ease;
    }

    .modal-popup{
        display: none;
        opacity: 0;
        transition: 0.5s ease;
    }
    
    .modal-popup-wrapper {
      overflow: auto;
      height: 87%;
    }

    .header-modal {
      padding-bottom: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

        & span {
            font-weight: 700;
            font-size: 32px;
            line-height: 40px;
            color: #23262F;
            letter-spacing: -0.01em;
        }
    }

    .info-card {
        display: flex;
        width: 200px;
        justify-content: space-between;
        & img {
          border-radius: 16px;
          width: 64px;
          height: 64px;
        }
    }

    .products-card {
        width: 93%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        :first-child {
          margin-top: 15px;
        }
    }


    .modal-title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #141416;
    }

    .modal-subtitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #353945;
    }

    span {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #777E91;
    }
`