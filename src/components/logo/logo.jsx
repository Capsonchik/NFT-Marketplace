import { StyledLogo } from './logo.styled'
import { Link } from 'react-router-dom'


const Logo = () => {
    return(
        <StyledLogo>
            <Link to='/' className="logo">
                <img src="img/icons/logo.png" alt='logo'/>
                <h1>crypter</h1>
            </Link>
        </StyledLogo>
    )
}

export default Logo;