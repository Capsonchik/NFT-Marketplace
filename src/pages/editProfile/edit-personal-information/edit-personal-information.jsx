import {
  ButtonAccount, ButtonClear, ButtonUpdate,
  ButtonUpload,
  Input, InputArea,
  StyledPersonalInformation,
  Subtitle,
  Title
} from './edit-personal-information.styled'
import {Container, ContainerFlex} from '../../../globalStyled/styled.global'
import {useContext, useState} from 'react'
import {ButtonAddInput} from '../../../components/dynamicAddInput/add-input'
import {AddInput, AddTitle} from '../../../components/dynamicAddInput/add-input'
import UserContext from '../../../userContext'


export const EditPersonalInformation = () => {
  const userCard = useContext(UserContext)
  const user = userCard.find(user => user.id === 1)
  const [components, setComponents] = useState(['twitter'])
  const [componentNames, setComponentNames] = useState(['facebook', 'instagram', 'telegram', 'whatsApp'])

  const addComponent = () => {
    if (componentNames.length > 0) {
      setComponents([...components, componentNames[0]])
      componentNames.splice(0, 1)
    } else {
      window.alert('No more social media to add!')
    }
  }

  return (
    <StyledPersonalInformation>
      <Container>
        <ContainerFlex>
          <div className="profile-photo">
            <div className="profile-photo__img">
              <img className="profile-photo__avatar" src={user.photo} alt="CardPhoto"/>
            </div>
            <div className="information-user">
              <h2 className="information-user__subtitle">Profile photo</h2>
              <p className="information-user__title">We recommend an image of at least 400x400.</p>
              <p className="information-user__title-br">Gifs work too 🙌</p>
              <ButtonUpload className="information-user__btn">Upload</ButtonUpload>
            </div>
          </div>
          <div className="account">
            <div className="account-info">
              <div className="account-info__form">
                <Subtitle>Account info</Subtitle>
                <Title>display name</Title>
                <Input
                  type="text"
                  placeholder="Enter your display name"/>
                <Title>Custom url</Title>
                <Input
                  type="text"
                  placeholder="ui8.net/Your custom URL"/>
                <Title>Bio</Title>
                <InputArea
                  type="text"
                  className="text-youselt"
                  placeholder="About yourselt in a few words"/>
                <Subtitle>Social</Subtitle>
                <Title>portfolio or website</Title>
                <Input
                  type="text"
                  placeholder="Enter URL"/>

                <div className="dynamic-add__input">
                  {components.map((item, index) => (
                    <div key={index}>
                      <AddTitle title={item}/>
                      <div className="social-input">
                        <AddInput type="text" text={item}/>
                        <ButtonAccount>Verify account</ButtonAccount>
                      </div>
                    </div>
                  ))}
                  <ButtonAddInput onClick={addComponent} text="Add more social account"/>
                </div>

                <p className="social-text">To update your settings you should sign message through your wallet. Click
                  'Update profile' then sign the message</p>
                <div className="social-update__btn">
                  <ButtonUpdate>Update Profile</ButtonUpdate>
                  <ButtonClear>
                    <img className="social-img__cross" src="/img/icons/cross.png" alt="cross"></img>
                    Clear all
                  </ButtonClear>
                </div>
              </div>
            </div>
          </div>
        </ContainerFlex>
      </Container>
    </StyledPersonalInformation>
  )
}