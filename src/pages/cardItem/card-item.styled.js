import styled from 'styled-components'

export const StyledCardItem = styled.div`
  .wrap {
    display: flex;
    justify-content: center;
    margin-left: 104px;
  }

  .card-item {

    &__block {
      max-width: 1224px;
      display: flex;
      gap: 56px;
      margin-top: 96px;
      margin-bottom: 97px;
    }

    &__img {
      height: 768px;
      width: 52.3%;
      border-radius: 20px;
    }
  }

  .card-block {
    max-width: 384px;
    margin-left: 40px;
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
    
    &__button-purchase:active {
      transform: scale(1.01);
      box-shadow: 3px 3px 3px #777E91;
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
    
    &__button-bid:active {
      transform: scale(1.01);
      box-shadow: 3px 3px 3px #777E91;
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
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__block {
      width: 48px;
      height: 48px;
      border: 2px solid #E6E8EC;
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
    
    &__block:active {
      transform: scale(1.01);
      box-shadow: 3px 3px 3px #777E91;
    }

    &__exit {
      border: none;
      background-color: #23262F;
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
      }

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

    .popup {
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      top: 0;
      left: 0;
      visibility: hidden;
      opacity: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: visibility 0.5s, opacity 0.5s linear;

      &_opened {
        opacity: 1;
        visibility: visible;
      }

      &__container {
        width: 448px;
        border-radius: 20px;
        background-color: #FCFCFD;
        padding: 32px;
      }

      &__row {
        display: flex;
        justify-content: space-between;
      }

      &__title {
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.01em;
        color: #23262F;
      }

      &__exit {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: #FCFCFD;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: border .2s;
      }

      &__exit:hover {
        border: 2px solid #E6E8EC;
      }

      &__img-exit {
        width: 14px;
        height: 14px;
      }

      &__img-dollar {
        color: #FFFFFF;
      }

      &__checkbox {
        width: 50px;
        height: 20px;
        position: relative;
      }
    }

    .form {
      display: flex;
      gap: 16px;
      margin-top: 32px;
    }

    .block-img {
      width: 62.5px;
      height: 48px;
      background-color: #9757D7;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .block-text {

      &__title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
      }

      &__text {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
      }
    }

    .checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
      margin: 10px 0 0 20px;
    }

    .checkbox + label:before {
      content: '';
      position: absolute;
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
      top: 4px;
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

    .block-info {

      &__texts {
        border-bottom: 2px solid #E6E8EC;
        display: flex;
        justify-content: space-between;
        padding-bottom: 12px;
        margin-top: 32px;
      }

      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #777E91;
      }

      &__currency {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
      }

      &__content {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
      }

      &__input {
        display: flex;
        gap: 5px;
      }
    }

    .block-input {

      &__input {
        background-color: #FCFCFD;
        width: 80px;
        direction: rtl;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
        border: none;
        margin: 0;
        outline: 0 !important;
      }
    }

    .block-btn {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      gap: 8px;

      &__continue {
        height: 48px;
        background-color: #3772FF;
        border-radius: 90px;
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #FCFCFD;
        border: none;
        cursor: pointer;
        transition: transform .3s, box-shadow .3s;
      }

      &__continue:hover {
        transform: scale(1.02);
        box-shadow: 5px 5px 5px #777E91;
      }
      
      &__continue:active {
        transform: scale(1.01);
        box-shadow: 3px 3px 3px #777E91;
      }

      &__cancel {
        height: 48px;
        background-color: #FCFCFD;
        border-radius: 90px;
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #23262F;
        border: 2px solid #E6E8EC;
        cursor: pointer;
        transition: transform .3s, box-shadow .3s;
      }

      &__cancel:hover {
        transform: scale(1.02);
        box-shadow: 5px 5px 5px #777E91;
      }
      
      &__cancel:active {
        transform: scale(1.01);
        box-shadow: 3px 3px 3px #777E91;
      }
    }

    .block-offer {
      margin-top: 32px;
      display: flex;
      gap: 20px;

      &__img {
        width: 14px;
        height: 10px;

        &_off {
          width: 48px;
          height: 48px;
          background-color: #E6E8EC;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &_on {
          width: 48px;
          height: 48px;
          background-color: #45B36B;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &-pencil {
          width: 20px;
          height: 19px;
        }
      }

      &__texts {
      }

      &__title {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
      }

      &__text {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #777E91;
        margin-top: 4px;
      }
    }

    .spinner-2 {
      width: 48px;
      aspect-ratio: 1;
      border-radius: 50%;
      border: 5px solid #B1B5C4;
      border-right-color: #3772FF;
      animation: s2 1s infinite linear;
    }

    @keyframes s2 {
      to {
        transform: rotate(1turn)
      }
    }

    .lds-spinner {
      color: white;
      display: inline-block;
      position: relative;
      width: 20px;
      height: 20px;
      top: -26px;
      right: 31px;
    }

    .lds-spinner div {
      transform-origin: 40px 40px;
      animation: lds-spinner 0.8s linear infinite;
    }

    .lds-spinner div:after {
      content: " ";
      display: block;
      position: absolute;
      top: 30px;
      left: 39px;
      width: 2px;
      height: 5px;
      border-radius: 20%;
      background: white;
    }

    .lds-spinner div:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -0.7s;
    }

    .lds-spinner div:nth-child(2) {
      transform: rotate(45deg);
      animation-delay: -0.6s;
    }

    .lds-spinner div:nth-child(3) {
      transform: rotate(90deg);
      animation-delay: -0.5s;
    }

    .lds-spinner div:nth-child(4) {
      transform: rotate(135deg);
      animation-delay: -0.4s;
    }

    .lds-spinner div:nth-child(5) {
      transform: rotate(180deg);
      animation-delay: -0.3s;
    }

    .lds-spinner div:nth-child(6) {
      transform: rotate(225deg);
      animation-delay: -0.2s;
    }

    .lds-spinner div:nth-child(7) {
      transform: rotate(270deg);
      animation-delay: -0.1s;
    }

    .lds-spinner div:nth-child(8) {
      transform: rotate(315deg);
      animation-delay: 0s;
    }

    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    .button {

      &_on {
        width: 100%;
        height: 48px;
        background-color: #3772FF;
        border-radius: 90px;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #FCFCFD;
        border: none;
        margin-top: 16px;
        cursor: pointer;
        transition: transform .3s, box-shadow .3s;
      }

      &_on:hover {
        transform: scale(1.02);
        box-shadow: 5px 5px 5px #777E91;
      }

      &_on:active {
        transform: scale(1.01);
        box-shadow: 3px 3px 3px #777E91;
      }

      &_off {
        width: 100%;
        height: 48px;
        background-color: #3772FF;
        border-radius: 90px;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #FCFCFD;
        opacity: 0.5;
        border: none;
        margin-top: 16px;
      }
    }

    .none {
      display: none;
    }

    .yay {
      padding-top: 40px;
      padding-left: 145px;

      &__img {
      }

      &__block-text {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
      }

      &__block-transaction {
        margin-top: 32px;
        border: 1px solid #E6E8EC;
        border-radius: 12px;
        padding: 24px;
        display: flex;
        justify-content: space-between;
      }

      &__block-status {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      &__status-text {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #777E91;
      }

      &__processing-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #9757D7;
      }

      &__score-text {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #23262F;
      }

      &__block-social {
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      &__social-text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #23262F;
      }

      &__social-icons {
        display: flex;
        gap: 16px;
      }

      &__social--btn {
        width: 48px;
        height: 48px;
        cursor: pointer;
        background-color: #FCFCFD;;
        border: none;
        transition: border .2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__social--btn:hover {
        border: 2px solid #E6E8EC;
        border-radius: 48px;
      }
    }
  }
`