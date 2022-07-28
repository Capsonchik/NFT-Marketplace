import { StyledEarnFreeCrypto } from './earn-free-crypto.styled';
import { Container } from '../../globalStyled/styled.global'

const EarnFreeCrypto = () => {
    return (
        <StyledEarnFreeCrypto>
            <Container>
                <div className='earn-free-crypto-wraper'>
                    <div className='earn-free-crypto__header'>
                        <p>Save your time with Stacks</p>
                        <h2>Earn free crypto with Crypter</h2>
                        <p className='description'>A creative agency that lead and inspire</p>
                        <div className='buttons'>
                            <button className='earn'>Earn now</button>
                            <button className='discover'>Discover more</button>
                        </div>
                    </div>
                    <img src='img/picture/footer-triengle.png' alt="earn-free-crypto" />
                </div>
            </Container>
        </StyledEarnFreeCrypto>
    );
}

export default EarnFreeCrypto;