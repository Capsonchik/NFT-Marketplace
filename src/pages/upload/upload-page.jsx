import {Container} from '../../globalStyled/styled.global'
import {Breadcrumbs} from '../../components/breadcrumbs/breadcrumbs'
import {StyledUploadPage} from './upload-page.styled'
import {BackToButton} from '../../components/back-to-button/back-to-button'
import {ContainerBreadcrumbs} from '../editProfile/edit-profile.styled'
import {UploadContent} from './uploadContent/upload-content'


export const UploadPage = () => {
  return (
    <StyledUploadPage>
      <Container>
        <ContainerBreadcrumbs>
          <BackToButton/>
          <Breadcrumbs/>
        </ContainerBreadcrumbs>
        <UploadContent/>
      </Container>
    </StyledUploadPage>
  )
}