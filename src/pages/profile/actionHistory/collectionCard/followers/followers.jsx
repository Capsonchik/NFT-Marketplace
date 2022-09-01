import {ButtonUser, StyledCollectionCard} from '../collection-card.styled'
import {ContainerFlex} from '../../../../../globalStyled/styled.global'
import {useContext, useEffect, useState} from 'react'
import UserContext from '../../../../../userContext'
import CardContext from '../../../../../context'


export const Followers = () => {
  const users = useContext(UserContext)
  const cards = useContext(CardContext)
    /* Задача: Добавить  cardsCollections в useState инициалировать useEffect в зависимости от users */

  const [cardsCollections, setCardsCollections] = useState(new Map()) //todo: https://learn.javascript.ru/ read about data types

  useEffect(() => {
    const newCards = new Map()
    users.forEach(user => {
      const collect = user.collections.map(el => (el.cardsCollection)).flat()// todo: read documentation
      newCards.set(user.id, collect)// todo: read documentation
    })
    setCardsCollections(newCards)
  }, [users])


  const getUserImages = (userId) => (
     cardsCollections.get(userId)?.map(cardId => { //todo: read documentation
      const image = cards.find(card => card.id === cardId).img

      return (
        <img className='user__card' key={cardId} src={image} alt="flat" />
      )
    })
  )

  const usersToRender = users.map(user => (
      <div className='user' key={user.id}>
        <div>
          <img className='user__img' src={user.photo}/>
        </div>
        <div className='user__info'>
          <p className='user__name'>{user.name}</p>
          <p className='user__followers'>{user.followers}</p>
          <ButtonUser>Follow</ButtonUser>
        </div>
        <div className='user__collection'>
          {getUserImages(user.id)}
        </div>
      </div>
    )
  )

  return (
    <StyledCollectionCard>
      <ContainerFlex>
        <div className='collection-flex'>
          {usersToRender}
        </div>
      </ContainerFlex>
    </StyledCollectionCard>
  )
}