import {ContainerBreadcrumbs, ContainerInPercentage, StyledEditProfile} from './edit-profile.styled';
import {Container} from '../../globalStyled/styled.global';
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs';
import {BackToProfile} from './back-to-profile-btn/back-to-profile-btn';
import {EditingHeader} from './editing-header/editing-header';
import {EditPersonalInformation} from './edit-personal-information/edit-personal-information';


export const EditProfile = ({users}) => {
  const user = users.find(user => user.id === 1)

  return(
    <StyledEditProfile>
      <Container>
        <ContainerBreadcrumbs>
          <BackToProfile/>
          <Breadcrumbs/>
        </ContainerBreadcrumbs>
        <ContainerInPercentage>
          <EditingHeader/>
          <EditPersonalInformation user={user}/>
        </ContainerInPercentage>
      </Container>
    </StyledEditProfile>
  )
}