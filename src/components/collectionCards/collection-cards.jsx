import {StyledCollectionCard} from './collection-cards.styled';

const CollectionCard = ({cardCollection, cards}) => {
  // Делаю массив исключительно с фото карточке объекта
  const cardPhoto = []
  let collectionName = ""
  cardCollection.collections.forEach(card => {
    collectionName = card.collectionName
    card.cardsCollection.forEach(cardcol => {
      cards.forEach(el => {
        if (cardcol === el.id) {
          cardPhoto.push(el.img)
        }
      })
    })
  })


  return (
      <StyledCollectionCard>
        <img className='main-photo' src={cardPhoto[0]} alt="bird"/>
        <div className="collections__items">
          <div className="collections__item">
            <img src={cardPhoto[1]} alt="bird"/>
          </div>
          <div className="collections__item">
            <img src={cardPhoto[2]} alt="bird"/>
          </div>
          <div className="collections__item">
            <img src={cardPhoto[3]} alt="bird"/>
          </div>
        </div>
        <p className="collections__name">{collectionName}</p>
        <div className="collections__owner">
          <div className="owner-info">
            <img src={cardCollection.photo} alt="avatar"/>
            <p>By {cardCollection.name}</p>
          </div>
          <div className="collections__owner-summary">28 items</div>
        </div>
      </StyledCollectionCard>
  );
}

export default CollectionCard;