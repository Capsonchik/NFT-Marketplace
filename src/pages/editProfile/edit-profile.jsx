import {ContainerBreadcrumbs, ContainerInPercentage, StyledEditProfile} from './edit-profile.styled';
import {Container} from '../../globalStyled/styled.global';
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs';
import {BackToButton} from '../../components/back-to-button/back-to-button'
import {EditHeader} from './edit-header/edit-header';
import {EditPersonalInformation} from './edit-personal-information/edit-personal-information';


export const EditProfile = ({users}) => {
  const user = users.find(user => user.id === 1)

  return(
    <StyledEditProfile>
      <Container>
        <ContainerBreadcrumbs>
          <BackToButton/>
          <Breadcrumbs/>
        </ContainerBreadcrumbs>
        <ContainerInPercentage>
          <EditHeader/>
          <EditPersonalInformation user={user}/>
        </ContainerInPercentage>
      </Container>
    </StyledEditProfile>
  )
}