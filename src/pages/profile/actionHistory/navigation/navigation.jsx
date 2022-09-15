import {NavLink} from 'react-router-dom'
import {StyledNavigation} from './navigation.styled.js'


export const Navigation = () => {

  return (
    <StyledNavigation>
      <NavLink
        to="on-sale"
        className="nav-link"
      >
        On Sale
      </NavLink>
      <NavLink
        to="collectibles"
        className="nav-link"
      >
        Collectibles
      </NavLink>
      <NavLink
        to="created"
        className="nav-link"
      >
        Created
      </NavLink>
      <NavLink
        to="likes"
        className="nav-link"
      >
        Likes
      </NavLink>
      <NavLink
        to="following"
        className="nav-link"
      >
        Following
      </NavLink>
      <NavLink
        to="followers"
        className="nav-link"
      >
        Followers
      </NavLink>
    </StyledNavigation>
  )
}