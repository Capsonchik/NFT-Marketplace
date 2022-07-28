import { StyledEconomyBlock, FlexBoxColumn } from'./new-creative-economy.styled';
import { Container } from '../../globalStyled/styled.global';

const NewEconomyBlock = () => {
    return(
        <StyledEconomyBlock>
            <section className='economy-block'>
                <Container>
                    <FlexBoxColumn>
                        <p>Create, explore, & collect digital art NFTs.</p>
                        <h2>The new creative economy.</h2>
                        <button className='economy-button'>Start your search</button>
                    </FlexBoxColumn>
                </Container>
            </section>
        </StyledEconomyBlock>
    )
}

export default NewEconomyBlock;