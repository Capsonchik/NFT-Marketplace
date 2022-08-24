import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StyledNavigation } from './navigation.styled.js';


export const Navigation = () => {
  const [activeLink, setActiveLink] = useState(true)

  const clickActiveLink = () => {
    setActiveLink(true)
  }

  const clickLink = () => {
    setActiveLink(false)
  }

  return(
    <StyledNavigation>
      <NavLink
        onClick={clickActiveLink}
        to='on-sale'
        className={ activeLink ? 'nav-link-active' : 'nav-link'}
      >
        On Sale
      </NavLink>
      <NavLink
        onClick={clickLink}
        to='collectibles'
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
      >
        Collectibles
      </NavLink>
      <NavLink
        onClick={clickLink}
        to='created'
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
      >
        Created
      </NavLink>
      <NavLink
        onClick={clickLink}
        to='following'
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
      >
        Following
      </NavLink>
      <NavLink
        onClick={clickLink}
        to='followers'
        className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
      >
        Followers
      </NavLink>
    </StyledNavigation>
  )
}