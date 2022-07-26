import styled from 'styled-components';

export const StyledSellersSortBlock = styled.div`
    .sellers-sort-wraper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .sellers-sort-left-block {
        display: flex;
        align-items: center;
    }

    h2 {
        font-weight: 600;
        font-size: 24px;
        color: #777E91;
    }

    span {
        font-weight: 700;
        font-size: 40px;
        margin-right: 20px;
    }

    .popular-sellers__date-sort {
        position: relative;
        width: 256px;
        height: 48px;
        background: #FCFCFD;
        border: 2px solid #E6E8EC;
        border-radius: 12px;
        padding-left: 8px;
        padding-right: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & span {
            font-weight: 500;
            font-size: 14px;
        }

        & img {
            transition: all 0.7s;
            cursor: pointer;
        }
    }

    .block-open {
        border-radius: 12px 12px 0px 0px;
        border-bottom: 0;

        & img {
            transition: all 0.7s;
            transform: rotate(180deg)
        }
    }

    .popular-sellers__open {
        display: none;
        position: absolute;
        width: 256px;
        flex-direction: column;
        border: 2px solid #E6E8EC;
        background: #FCFCFD;
        padding: 0 8px;
        border-radius: 0px 0px 12px 12px;

        & span {
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
            padding: 8px 0;
        }
    }

    .active {
        border-top: 0;
        display: flex;
        z-index: 1;
    }
`