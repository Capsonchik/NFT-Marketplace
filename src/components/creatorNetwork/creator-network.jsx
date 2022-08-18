import {useLayoutEffect, useState} from 'react'
import { StyledCreatorNetwork } from './creator-network.styled'
import { Container } from '../../globalStyled/styled.global'
import { RedemptionPrice } from './redemptionPrice/redemption-price'
import { Course } from './course/course';

export const CreatorNetwork = ({cards, users}) => {

  const [index, setIndex] = useState(0)
  const auctionCard = {
    user: [],
    card: []
  }

  const newArrAuction = []

    users.forEach((user) => {
      if (user.auction.length > 0) {
        user.auction.forEach((id) => {
          newArrAuction.push(id)
          auctionCard.user.push(user)
        })
      }
    })

    newArrAuction.forEach((id) => {
      cards.forEach((card) => {
        if (id === card.id) {
          auctionCard.card.push(card)
        }
      })
    })

  const stepUp = () => {
    if (index === newArrAuction.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const stepDown = () => {
    if (index === 0) {
      setIndex(newArrAuction.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <Container>
      <StyledCreatorNetwork>
        <div className='creator-network '>
          <img className='creator-network__img' src={auctionCard.card[index].img} alt='nft'/>
          <div className='creator-network__block-info'>

            <div className='creator-info'>
              <h2 className='creator-info__title'>{auctionCard.card[index].cardName}</h2>

              <div className='creator-man'>
                <div className='creator-man__block'>
                  <img className='creator-man__img' src={auctionCard.user[index].photo}
                       alt='creator'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Creator</p>
                    <p className='creator-man__nickname'>{auctionCard.user[index].nickName}</p>
                  </div>
                </div>

                <div className='creator-man__block'>
                  <img className='creator-man__img' src='img/icons/ETH.png' alt='logo-ETH'/>

                  <RedemptionPrice
                    card={auctionCard.card}
                    index={index}/>
                </div>
              </div>
            </div>

            <Course
              card={auctionCard.card}
              index={index}/>

            <button className='creator-button__place-bid'>Place a bid</button>
            <button className='creator-button__view-item'>View item</button>

            <div className='creator-button__switching-auction'>
              <button className='creator-button__left creator-button__arrow' onClick={stepDown}>
                <img src="img/icons/arrowLeft.png" alt="arrow left"/>
              </button>
              <button className='creator-button__right creator-button__arrow' onClick={stepUp}>
                <img src="img/icons/arrowRight.png" alt="arrow right"/>
              </button>
            </div>

          </div>
        </div>
      </StyledCreatorNetwork>
    </Container>
  )
}
