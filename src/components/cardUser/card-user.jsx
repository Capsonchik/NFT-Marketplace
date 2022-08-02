import { Container } from '../../globalStyled/styled.global'
import { Link } from 'react-router-dom'
import { StyledCardUser } from './card-user.styled';
import {BtnCard, BtnDownload, BtnMore, BtnSocial, StyledCardInfo} from "./card-info.styled";


export const CardUser = () => {
    return(
        <div>
            <StyledCardUser>
            <Container>
                 <StyledCardInfo >
                     <img className='img-avatar' src='img/avatars/edd-harrys.png' alt="CardPhoto" />
                     <h1>Enrico Cole</h1>
                     <div>
                        <span>0xc4c16a645...b21a</span>
                         <img src='img/icons/card-filled.png' alt="filed" />
                     </div>
        
                     <p>A wholesome farm owner in Montana. Upcoming gallery solo show in Germany</p>
                     <div className='card-link'>
                         <img src='img/icons/card-globe.svg' alt="globe" />
                         <Link to='#' className='card-link__text'>https://ui8.net</Link>
                     </div>

                     <div className='btn-wrapper'>
                         <BtnCard className='btnText'>Follow</BtnCard>
                         <BtnDownload><img src='img/icons/card-shape-btn.svg' alt="shape" /></BtnDownload>
                         <BtnMore><img src='img/icons/card-vector-btn.svg' alt="vector" /></BtnMore>
                     </div>

                     <div className='btn-social'>
                         <BtnSocial><img src='img/icons/card-twitter-btn.svg' alt="twitter" /></BtnSocial>
                         <BtnSocial><img src='img/icons/card-instagram-btn.svg' alt="instagram" /></BtnSocial>
                         <BtnSocial><img src='img/icons/card-facebook-btn.svg' alt="facebook" /></BtnSocial>
                     </div>
                     <div className='history'>
                        <p>Member since Mar 15, 2021</p>
                     </div>
                 </StyledCardInfo>
            </Container>
            </StyledCardUser>
        </div>


    )
}