import { StyledHotBid } from './hot-bid.styled';
import { Container, Header } from '../../globalStyled/styled.global';
import Card from '../card/card';

const HotBid = ({cards}) => {
    const sortedCardsArray = []
    cards.map(card => {
        if(sortedCardsArray.length < 4) {
            sortedCardsArray.push(card)
        }
    })

    const mapCards = sortedCardsArray.map((sortedCard, i) => {
        return (
            <div key={sortedCard.id} className="card">
                <Card data={sortedCard}/>
            </div>
        )
    })

    return (
        <StyledHotBid>
            <Container>
                <Header>Hot Bid</Header>
                <div className='cards'>
                    {mapCards}
                </div>
            </Container>
        </StyledHotBid>
    );
}

export default HotBid;