import {Link} from "react-router-dom";
import {ButtonBack} from "../edit-profile.styled";
import styled from "styled-components";

const StyledBackToProfile = styled.div`
  .vector-img {
    padding-right: 15px;
  }

  .back-btn {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #23262F;
    cursor: pointer;

    &:hover {
      background-color: #f0f3f7;
    }
  }
`

export const BackToProfile = () => {
  return(
    <StyledBackToProfile>
      <div className='back-profile'>
        <Link to='/profile'>
          <ButtonBack className='back-btn'><img className='vector-img' src='/img/icons/vector-arrow-left.png' alt='arrow'/>
            Back to profile
          </ButtonBack>
        </Link>
      </div>
    </StyledBackToProfile>
  )
}