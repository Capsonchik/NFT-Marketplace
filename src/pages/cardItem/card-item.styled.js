import styled from 'styled-components'

export const StyledCardItem = styled.div`
  .main {
    display: flex;
    width: 100%;
  }
  
  .card-item {

    &__block {
      display: flex;
      gap: 96px;
      margin-top: 96px;
      margin-bottom: 97px;
    }

    &__img {
      height: 768px;
      width: 57.15%;
      border-radius: 20px;
    }
  }

  .card-block {
    width: 384px;
  }

  .card-info {

    &__title {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.01em;
    }

    &__price {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    &__price-crypto {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #45B36B;
      border: 2px solid #45B36B;
      border-radius: 4px;
      padding: 8px 8px 6px;
    }

    &__price-dollar {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #777E91;
      border: 2px solid #E6E8EC;
      border-radius: 4px;
      padding: 8px 8px 6px;
    }

    &__price-availability {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #777E91;
      padding: 8px 8px 6px;
    }

    &__text {
      margin-top: 40px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #777E91;
    }

    &__text-link {
      color: black;
    }
  }

  .card-nav {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 2px;
    border: 2px solid #E6E8EC;
    border-radius: 36px;
    margin-top: 40px;
    margin-bottom: 18px;

    &__link {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: #777E91;
      padding: 6px 12px;
      margin-left: 6px;
      cursor: pointer;
    }

    &__link_active {
      background: #353945;
      border-radius: 100px;
      color: #FCFCFD;
    }
  }

  .card-people {
    display: flex;
    padding-bottom: 12px;

    margin-top: 4px;
    border-bottom: 1px solid #E6E8EC;


    &__avatar {
      width: 48px;
      height: 48px;
      border-radius: 48px;
      background-color: #9757D7;
    }

    &__avatar-status {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      position: relative;
      top: 27px;
      right: 20px;
      opacity: 0;

      &_active {
        opacity: 1;
      }
    }

    &__info {
    }

    &__status {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }

    &__name {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      margin-top: 2px;
    }
  }

  .card-buyer {
    height: 240px;
    width: 384px;
    margin-top: 68px;
    border: 1px solid #E6E8EC;
    box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
    border-radius: 16px;

    &__info {
      display: flex;
      margin-top: 24px;
      margin-left: 24px;
    }

    &__avatar {
      width: 48px;
      height: 48px;
      background: #45B36B;
      border-radius: 48px;
    }

    &__info-block {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
    }

    &__name {
      color: #23262F;
    }

    &__text {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #777E91;
    }

    &__price {
      display: flex;
      gap: 12px;
    }

    &__price-crypto {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #23262F;
    }

    &__price-dollar {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      color: #777E91;
    }

    &__button {
      margin-top: 32px;
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    &__button-purchase {
      width: 43%;
      height: 48px;
      border-radius: 90px;
      border: none;
      background-color: #3772FF;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #FCFCFD;
      cursor: pointer;
      transition: transform .3s, box-shadow .3s;
    }

    &__button-purchase:hover {
      transform: scale(1.02);
      box-shadow: 5px 5px 5px #777E91;
    }

    &__button-bid {
      background-color: white;
      width: 43%;
      height: 48px;
      border: 2px solid #E6E8EC;
      border-radius: 90px;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #23262F;
      cursor: pointer;
      transition: transform .3s, box-shadow .3s;
    }

    &__button-bid:hover {
      transform: scale(1.02);
      box-shadow: 5px 5px 5px #777E91;
    }

    &__service-fee {
      display: flex;
      margin-left: 24px;
      margin-top: 32px;
      gap: 12px;

      &-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
      }

      &-percent {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #23262F;
      }

      &-price {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
      }
    }
  }

  .card-navigation {
    //position: relative;
    //top: 96px;
    //left: 1276px;
    margin-left: 56px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    //position: absolute;

    &__block {
      width: 48px;
      height: 48px;
      border: 2px solid #E6E8EC;
      box-shadow: 0px 64px 64px -48px rgba(31, 47, 70, 0.12);
      border-radius: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform .3s, box-shadow .3s;
    }

    &__block:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 5px #777E91;
    }
    
    &__exit {
      border: none;
      background-color: #23262F;
    }

    &__img-exit {
    }

    &__img-download {
    }

    &__img-like {
    }

    &__img-menu {
    }

    &__menu {
    }

    .nav {

      &__card-item {
        width: 197px;
        height: 280px;
        box-shadow: 0px 16px 64px -48px rgba(31, 47, 70, 0.3);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        row-gap: 18px;
        padding-top: 34px;
        background-color: white;
        position: relative;
        right: 110px;
        //display: none;
      }

      //&__card-item::before {
      //  content: '';
      //  width: 0;
      //  height: 0;
      //  border-left: 50px solid transparent;
      //  border-right: 50px solid transparent;
      //  border-bottom: 100px solid red;
      //  top: 10px;
      //}

      &__item {
        display: flex;
        gap: 9.6px;
        margin-left: 16.6px;
        margin-right: 16.6px;
        border-bottom: 1px solid #E6E8EC;
        padding-bottom: 14px;
        cursor: pointer;
        color: black;
      }

      &__img {
        width: 16px;
        height: 16px;
      }

      &__text {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #777E91;
        transition: color .3s;
      }
      
      &__text:hover {
        color: black;
      }
    }


    .checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 10px 0 0 20px;
    }

    .checkbox + label {
      position: relative;
      padding: 0 80px 0 0px;
      cursor: pointer;
    }

    .checkbox + label:before {
      content: '';
      position: absolute;
      top: -4px;
      left: 0;
      width: 40px;
      height: 20px;
      border-radius: 13px;
      background: #CDD1DA;
      box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2);
      transition: .2s;
    }

    .checkbox + label:after {
      content: '';
      position: absolute;
      top: 0px;
      left: 4px;
      width: 12px;
      height: 12px;
      border-radius: 10px;
      background: #3772FF;
      box-shadow: 0 2px 5px rgba(0, 0, 0, .3);
      transition: .2s;
    }

    .checkbox:checked + label:before {
      background: #3772FF;
    }

    .checkbox:checked + label:after {
      left: 24px;
      background: #FFFFFF;
    }

    //.checkbox:focus + label:before {
    //  box-shadow: inset 0 2px 3px rgba(0, 0, 0, .2), 0 0 0 3px rgba(255, 255, 0, .7);
    //}



    .popup__container {
      width: 430px;
      border-radius: 10px;
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .popup {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: visibility 0.5s, opacity 0.5s linear;
    }

    .popup_opened {
      opacity: 1;
      visibility: visible;
    }
    
  }
`