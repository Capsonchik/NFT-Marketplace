import { Link } from 'react-router-dom'
import Login from '../login/login'
import { StyledHeader, HeaderFlexContainer } from './header.styled'
import Logo from '../logo/logo'
import {Modal} from '../modalPopUp/modal-pop-up'

const Header = () => {
    return(
        <StyledHeader>
            <HeaderFlexContainer>
                <Logo/>
                <nav>
                    <Link className='nav-link' to='/'>Discover</Link>
                    <Link className='nav-link' to='/'>How it work</Link>
                </nav>
                <div className='header-input'>
                    <input className='header-search' type='text' placeholder='Search'/>
                    <button className='search-button' type='submit'>
                        <img src='/img/icons/search.png' alt='search'/>
                    </button>
                </div>
                <Modal/>
                <button className='header-upload-btn'>Upload</button>
                <Login/>
            </HeaderFlexContainer>
        </StyledHeader>
    )
}

export default Header;