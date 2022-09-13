import styled from 'styled-components'
import {ButtonBlue} from '../../../../globalStyled/styled.global'

export const StyledCollectionCard = styled.div`
  .cards {
    margin-bottom: 40px;
    width: 17vw;
  }
  .card {
    width: 17vw;
  }
  
  .cards-flex {
    display: flex;
    padding: 0;
    gap: 32px;
    width: 800px;
    margin-left: 62px;
  }
  
  .collectibles-flex {
    display: flex;
    padding: 0;
    gap: 32px;
    width: 800px;
    margin-left: 62px;
    flex-wrap: wrap;
  }
  
  .collection-flex {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 32px;
    width: 800px;
    margin-left: 62px;
  }
  
  .user:first-child {
    margin-top: 10px;
  }

  .user {
    display: flex;
    margin-top: 26px;
    padding-bottom: 31px;
    border-bottom: 1px solid #E6E8EC;

    &__img {
      width: 88px;
      height: 88px;
      margin-right: 20px;
      background: #9757D7;
      border-radius: 128px;
    }

    &__info {
      min-width: 196px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0;
    }

    &__name {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #23262F;
    }

    &__followers {
      color: #777E91;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 12px;
    }

    &__card {
      width: 112px;
      height: 88px;
      object-fit: cover;
      object-position: 50% 50%;
      background: #E6E8EC;
      border-radius: 12px;
      margin-right: 8px;
    }
    
    &__button-blue {
      padding: 8px 12px;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      background: #3772FF;
      border-radius: 90px;
      color: white;
      margin: 0;
      border: 1px solid transparent;
      cursor: pointer;
    }
    
    &__button-white {
      padding: 8px 12px;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      background: white;
      border-radius: 90px;
      border: 1px solid gray;
      margin: 0;
      cursor: pointer;
    }
  }
`

