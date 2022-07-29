import { StyledHotCollection } from './hot-collection.styled';
import {Container, Header} from '../../globalStyled/styled.global';
import CollectionCard from '../collectionCards/collection-cards';

const HotCollection = ({cards, users}) => {
    const userCollection = []
    // cards.forEach(card => {
    //     users.forEach(user => {
    //         if(user.nickName === card.owner && userCollection.length <4) {
    //             userCollection.push(card)
    //         }
    //     })
    // })



    console.log(userCollection)
    return (
        <StyledHotCollection>
            <Container>
                <Header>Hot collections</Header>
                <div className="collections">
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                    <div className="collections__card">
                        <CollectionCard/>
                    </div>
                </div>
            </Container>
        </StyledHotCollection>
    );
}

export default HotCollection;