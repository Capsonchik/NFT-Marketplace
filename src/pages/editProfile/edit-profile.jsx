import {ButtonBack, StyledEditProfile} from './edit-profile.styled';
import {Container} from "../../globalStyled/styled.global";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {BackToProfile} from "./back-to-profile-btn/back-to-profile-btn";


export const EditProfile = () => {
  return(
    <StyledEditProfile>
      <Container>
        <div className='breadcrumbs-profile'>
          <BackToProfile/>
          <Breadcrumbs/>
        </div>
      </Container>
    </StyledEditProfile>
  )
}