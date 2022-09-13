import Header from './components/header/header'
import {Outlet, useLocation} from 'react-router-dom'
import Footer from './components/footer/footer'
import Login from './components/login/login'
import {ProfileButton} from './pages/profile/buttonProfile/profile-button'

export const TemplatePage = () => {
  const location = useLocation()

  const headerButton = () => {
    return location.pathname.startsWith('/profile') || location.pathname.startsWith('/upload')
      ? <ProfileButton/>
      : <Login/>
  }

  return (
    <div className='App'>
      <Header actionButton={headerButton()}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}