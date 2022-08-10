import {
  ButtonAccount, ButtonClear, ButtonMoreSocial, ButtonUpdate,
  ButtonUpload,
  Input, InputBorder,
  StyledPersonalInformation,
  Subtitle,
  Title
} from './edit-personal-information.styled';
import {Container, ContainerFlex} from '../../../globalStyled/styled.global';


export const EditPersonalInformation = ({user}) => {
  return (
    <StyledPersonalInformation>
      <Container>
        <ContainerFlex>
          <div className='profile-photo'>
            <div className='profile-photo__img'>
              <img className='profile-photo__avatar' src={user.photo} alt="CardPhoto" />
            </div>
            <div className='information-user'>
              <h2 className='information-user__subtitle'>Profile photo</h2>
              <p className='information-user__title'>We recommend an image of at least 400x400.</p>
              <p className='information-user__title-br'>Gifs work too 🙌</p>
              <ButtonUpload className='information-user__btn'>Upload</ButtonUpload>
            </div>
          </div>
          <div className='account'>
            <div className='account-info'>
              <form className='account-info__form'>
                <Subtitle>Account info</Subtitle>
                <Title>display name</Title>
                <Input
                  type='text'
                  placeholder='Enter your display name'/>
                <Title>Custom url</Title>
                <Input
                  type='text'
                  placeholder='ui8.net/Your custom URL'/>
                <Title>Bio</Title>
                <textarea
                  className='text-yourself'
                  rows="4"
                  cols="35"
                  placeholder='About yourselt in a few words'/>

                <Subtitle>Social</Subtitle>
                <Title>portfolio or website</Title>
                <Input
                  type='text'
                  placeholder='Enter URL'/>
                <Title>twitter</Title>
                <div className='social-input'>
                  <InputBorder type='text' placeholder='@twitter username'/>
                  <ButtonAccount>Verify account</ButtonAccount>
                </div>
                <ButtonMoreSocial>
                  <img className='plus' src='/img/icons/plus.png' alt='plus'/>
                  Add more social account
                </ButtonMoreSocial>
                <p className='social-text'>To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
                <div className='social-update__btn'>
                  <ButtonUpdate>Update Profile</ButtonUpdate>
                  <ButtonClear>
                    <img className='social-img__cross' src='/img/icons/cross.png' alt='cross'></img>
                    Clear all
                  </ButtonClear>
                </div>
              </form>
            </div>
          </div>
        </ContainerFlex>
      </Container>
    </StyledPersonalInformation>
  )
}