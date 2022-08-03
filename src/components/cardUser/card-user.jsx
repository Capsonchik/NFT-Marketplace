import { Container } from '../../globalStyled/styled.global'
import { Link } from 'react-router-dom'
import { StyledCardUser } from './card-user.styled';
import {BtnCard, BtnDownload, BtnMore, BtnSocial, StyledCardInfo} from "./card-info.styled";


export const CardUser = ({user}) => {
    return(
        <StyledCardUser>
            <Container>
                 <StyledCardInfo >
                     <img className='img-avatar' src={user.photo} alt="CardPhoto" />
                     <h1>{user.name}</h1>
                     <div>
                        <span>{user.id}</span>
                         <img src='img/icons/card-filled.png' alt="filed" />
                     </div>
        
                     <p>{user.description}</p>
                     <div className='card-link'>
                         <img src='img/icons/card-globe.svg' alt="globe" />
                         <Link to='#' className='card-link__text'>{user.personalSite}</Link>
                     </div>

                     <div className='btn-wrapper'>
                         <BtnCard className='btnText'>Follow</BtnCard>
                         <BtnDownload><img src='img/icons/card-shape-btn.svg' alt="shape" /></BtnDownload>
                         <BtnMore><img src='img/icons/card-vector-btn.svg' alt="vector" /></BtnMore>
                     </div>

                     <div className='btn-social'>
                       <a href='https://twitter.com/?lang=ru' target="_blank">
                         <BtnSocial><img src='img/icons/card-twitter-btn.svg' alt="twitter" /></BtnSocial>
                       </a>
                       <a href='https://www.instagram.com/' target="_blank">
                         <BtnSocial><img src='img/icons/card-instagram-btn.svg' alt="instagram" /></BtnSocial>
                       </a>
                       <a href='https://www.facebook.com/' target="_blank">
                         <BtnSocial><img src='img/icons/card-facebook-btn.svg' alt="facebook" /></BtnSocial>
                       </a>
                     </div>
                     <div className='history'>
                        <p>Member since {user.registerDate}</p>
                     </div>
                 </StyledCardInfo>
            </Container>
        </StyledCardUser>
    )
}