import styled from 'styled-components'

const StyledProfileButton = styled.div`
  .profile-btn {
    display: flex;
    align-items: center;
    padding: 4px 12px 4px 4px;
    border: 2px solid #E6E8EC;
    border-radius: 90px;
    background-color: transparent;
    cursor: pointer;

    & img {
      width: 32px;
      height: 32px;
      background: #45B36B;
      border-radius: 48px;
    }

    & p {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #23262F;
      padding: 0 4px 0 12px;
    }

    & span {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #45B36B;
    }
  }
`

export const ProfileButton = () => {
  return (
    <StyledProfileButton>
      <button className="profile-btn">
        <img src="/img/avatars/edd-harrys.png" alt="user"/>
        <p>7.00698</p>
        <span>ETH</span>
      </button>
    </StyledProfileButton>

  )
}