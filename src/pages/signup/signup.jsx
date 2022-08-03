import { StyledSignup } from "./signup.styled"
import { Link } from 'react-router-dom'
import Logo from '../../components/logo/logo'

export const Signup = () => {

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <StyledSignup>
      <div className={'popup'}>
        <div className='popup__container'>
          <div className='popup__logo'>
            <Logo/>
          </div>
          <Link to='/'>
            <div className='popup__cross'></div>
            </Link>
          <h2 className='popup__title'>Registration</h2>
          <form
            name='signup'
            action='#'
            method='post'
            encType='multipart/form-data'
            className='popup__form'
            noValidate
            onSubmit={onSubmit}>
            <input
              type='text'
              className='popup__input'
              minlength='3'
              maxlength='40'
              placeholder='Nic name'/>
            <input
              type='email'
              className='popup__input'
              minlength='5'
              maxlength='40'
              placeholder='Email'/>
            <input
              type='password'
              className='popup__input'
              minlength='4'
              maxlength='30'
              placeholder='Password'/>
            <input
              type='password'
              className='popup__input'
              minlength='4'
              maxlength='30'
              placeholder='Repeat password'/>
            <div className='popup__checkbox-block'>
              <input
                type="checkbox"
                className="custom-checkbox"
                id="license"
                name="license"
                value="true"/>
              <label for="license" className='popup__license'>accept the license agreement</label>
            </div>
            <Link to='/signin'>
              <button type='submit' className='popup__submit'>Sign up</button>
              </Link>
            <dib className='popup__block-img'>
              <img className='popup__img' src='img/icons/card-twitter-btn.svg' alt='twitter'/>
              <img className='popup__img' src='img/icons/card-instagram-btn.svg' alt='instagram'/>
              <img className='popup__img' src='img/icons/card-facebook-btn.svg' alt='facebook'/>
            </dib>
            <Link to='/signin' className='popup__link'>Log in</Link>
          </form>
        </div>
      </div>
    </StyledSignup>
  )
}
