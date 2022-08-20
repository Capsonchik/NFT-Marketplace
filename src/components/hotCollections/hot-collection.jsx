import {StyledHotCollection} from './hot-collection.styled';
import {Container, Header} from '../../globalStyled/styled.global';
import CollectionCard from '../collectionCards/collection-cards';

const HotCollection = ({cards, users}) => {
  const userCollection = []
  // Сортировка и получение исключительно 3х пользователей
  // чья коллекция карточек больше 4-х
  const sortedUsersCollection = users.forEach(user => {
    user.collections.forEach(collection => {
      if (collection.cardsCollection.length >= 4) {
        if (userCollection.length < 3) {
          userCollection.push(user)
        }
      }
    })
  })

  const renderCardsCollections = userCollection.map(collection => {
    return (
        <div key={collection.id} className="collections__card">
          <CollectionCard cardCollection={collection} cards={cards}/>
        </div>
    )
  })


  return (
      <StyledHotCollection>
        <Container>
          <Header>Hot collections</Header>
          <div className="collections">
            {renderCardsCollections}
          </div>
        </Container>
      </StyledHotCollection>
  );
}

export default HotCollection;