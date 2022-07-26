import { Link } from "react-router-dom";
import Login from "../login/login"
import { NotificationModal } from './NotificationModal/NotificationModal';
import { useState } from 'react';
import { StyledHeader, HeaderFlexContainer } from './header.styled';
import Logo from "../logo/logo";



const Header = () => {

    const [showModal, setShowModal] = useState(false)
    const openModal = ()=> {
        setShowModal(!showModal)
    }

    return(
        <StyledHeader>
            <HeaderFlexContainer>
                <Logo/>
                <nav>
                    <Link className="nav-link" to='/'>Discover</Link>
                    <Link className="nav-link" to='/'>How it work</Link>
                </nav>
                <div className="header-input">
                    <input className="header-search" type="text" placeholder='Search'/>
                    <button className="search-button" type='submit'>
                        <img src="img/icons/search.png" alt="search"/>
                    </button>
                </div>
                <button onClick={openModal} className="img">
                    <img src="img/icons/bell.png" alt="bell"/>
                    <NotificationModal showModal={showModal} setShowModal={setShowModal}/>
                </button>

                <button className="header-upload-btn">Upload</button>
                <Login/>
            </HeaderFlexContainer>
        </StyledHeader>
    )
}

export default Header;