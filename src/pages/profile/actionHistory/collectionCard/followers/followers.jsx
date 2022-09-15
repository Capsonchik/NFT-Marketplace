import {StyledCollectionCard} from '../collection-card.styled'
import {ContainerFlex} from '../../../../../globalStyled/styled.global'
import {useContext, useEffect, useState} from 'react'
import UserContext from '../../../../../userContext'
import CardContext from '../../../../../context'
import {useLocation} from 'react-router-dom'
import {ButtonFollow} from '../actionButton/button-follow'
import {followButtonConfig, unFollowButtonConfig} from './button-configuration'


export const Followers = () => {
  const users = useContext(UserContext)
  const cards = useContext(CardContext)
  const [cardsCollections, setCardsCollections] = useState(new Map()) //todo: https://learn.javascript.ru/ read about data types
  const location = useLocation()


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
        <img className='user__card' key={cardId} src={image} alt='flat'/>
      )
    })
  )


  const actionButton = () => {
    return location.pathname === '/profile/followers'
      ? <ButtonFollow config={followButtonConfig} />
      : <ButtonFollow config={unFollowButtonConfig} />
  }


  const usersToRender = users.map(user => (
      <div className='user' key={user.id}>
        <div>
          <img className='user__img' src={user.photo} alt='user'/>
        </div>
        <div className='user__info'>
          <p className='user__name'>{user.name}</p>
          <p className='user__followers'>{user.followers}</p>
          {actionButton(user)}
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