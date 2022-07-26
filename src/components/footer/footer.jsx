import { Link } from "react-router-dom";
import { StyledFooter, ContainerFlex } from './footer.styled';
import Logo from "../logo/logo";


const Footer = () => {
    return(
        <StyledFooter>
            <ContainerFlex>
                <div className="footer-logo">
                    <Logo/>
                    <p>The New Creative Economy.</p>
                </div>
                <nav className="footer-nav">
                    <h3>Crypter.</h3>
                    <Link className="footer-link" to='/'>Discover</Link>
                    <Link className="footer-link"  to='/'>Connect wallet</Link>
                    <Link className="footer-link"  to='/'>Create item</Link>
                </nav>
                <nav className="footer-nav">
                    <h3>Info</h3>
                    <Link className="footer-link"  to='/'>Download</Link>
                    <Link className="footer-link"  to='/'>Demos</Link>
                    <Link className="footer-link"  to='/'>Support</Link>
                </nav>
                <div className="footer-news">
                    <h3>Join Newslatter</h3>
                    <p>Subscribe our newsletter to get more free design course and resource</p>
                    <div className="footer-input">
                        <input type="text" placeholder='Enter your email' />
                        <button className="footer-btn">
                            <img src="/img/icons/footer-button.png" alt="button" />
                        </button>
                    </div>
                </div>
            </ContainerFlex>
            <div className="copiright">
                <div className="copiright-text">
                    <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
                </div>
                <div className="copiright-text">
                    <p>We use cookies for better service.</p>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;