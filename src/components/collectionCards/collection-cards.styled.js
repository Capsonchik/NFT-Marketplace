import styled from "styled-components";

export const StyledCollectionCard = styled.div`
  .main-photo {
    width: 100%;
    height: 240px;
    border-radius: 8px;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .collections__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .collections__item {
    width: 31%;
    

    & img {
      object-fit: cover;
      width: 100%;
      height: 75px;
      border-radius: 8px;
    }
  }

  .collections__name {
    margin-top: 16px;
    font-weight: 600;
    font-size: 24px;
  }

  .collections__owner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & img {
      border-radius: 48px;
      width: 24px;
      height: 24px;
    }
  }
  
  .owner-info {
    display: flex;
    align-items: center;
    
    & p {
      margin-left: 12px;
      font-weight: 500;
      font-size: 14px;
      color: #353945;
    }
  }

  .collections__owner-summary {
    width: auto;
    border: 2px solid #E6E8EC;
    border-radius: 4px;
    background: inherit;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    padding: 6px;
  }
`