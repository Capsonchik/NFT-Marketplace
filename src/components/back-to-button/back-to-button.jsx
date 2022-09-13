import {Link, useLocation} from 'react-router-dom'
import {ButtonBack} from '../../pages/editProfile/edit-profile.styled'
import {StyledBackToButton} from './back-to-button.styled'

export const BackToButton = () => {
  const location = useLocation()

  const backToProfile = {
    label: 'Back to profile',
    path: '/profile'
  }

  const backToHome = {
    label: 'Back to home',
    path: '/'
  }

  const buttonData = location.pathname === '/profile/edit' ? backToProfile : backToHome


  return (
    <StyledBackToButton>
      <div className='back-profile'>
        <Link to={buttonData.path}>
          <ButtonBack className='back-profile__btn'>
            <img
              className='vector-img'
              src='/img/icons/vector-arrow-left.png'
              alt='arrow'/>
            {buttonData.label}
          </ButtonBack>
        </Link>
      </div>
    </StyledBackToButton>
  )
}