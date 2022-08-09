import {useState, useEffect} from 'react'
import {StyledCreatorNetwork} from './creator-network.styled'
import {Container} from '../../globalStyled/styled.global'
import {Timer} from './timer/timer'

export const CreatorNetwork = ({cards, users}) => {

  const [index, setIndex] = useState(5)
  const auctionCard = {}

  const newArrAuction = []
  // содаю масив id карточек для аукционна
  users.forEach((user) => {
    if (user.auction.length > 0) {
      user.auction.forEach((id) => {
        newArrAuction.push(id)
      })
    }
  })

  const setDataCardAuction = () => {
    cards.forEach((el) => {
      if (el.id == newArrAuction[index]) {
        auctionCard.card = el
      }
    })
  }

  const setDataUserAuction = () => {
    users.forEach((user) => {
      if (user.auction.length > 0) {
        user.auction.forEach((id) => {
          if (id == newArrAuction[index]) {
            auctionCard.user = user
          }
        })
      }
    })
  }

  setDataUserAuction()
  setDataCardAuction()

  const perecklPlus = () => {
    if(index > newArrAuction.length - 1){
      setIndex( 0)
    }else{
      setIndex(index + 1)
    }
  }

  const precklMinus = () => {
    if(index < 0){
      setIndex(newArrAuction.length -1)
    }else{
      setIndex(index - 1)
    }
  }

  const [ vicupPrice, setVicupPrice] = useState('')


  const [course, setCourse] = useState({course: 1595.1, crypto: auctionCard.card.price, value: 0})

  useEffect(() => {
    setCourse({value: (course.course * course.crypto), course: 1595.1, crypto: auctionCard.card.price})
    setVicupPrice(auctionCard.card.price * 3.5)
  },)

  return (
    <Container>
      <StyledCreatorNetwork>
        <div className='creator-network '>
          <img className='creator-network__img' src={auctionCard.card.img} alt='nft'/>
          <div className='creator-network__block-info'>

            <div className='creator-info'>
              <h2 className='creator-info__title'>{auctionCard.card.cardName}</h2>

              <div className='creator-man'>
                <div className='creator-man__block'>
                  <img className='creator-man__img' src={auctionCard.user.photo} alt='creator'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Creator</p>
                    <p className='creator-man__nickname'>{auctionCard.user.name}</p>
                  </div>
                </div>

                <div className='creator-man__block'>
                  <img className='creator-man__img' src='img/icons/ETH.png' alt='logo-ETH'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Instant price</p>
                    <p className='creator-man__nickname'>{vicupPrice} ETH</p>
                  </div>
                </div>
              </div>

            </div>

            <div className='creator-current-bid'>
              <h4 className='creator-current-bid__text'>Current Bid</h4>
              <h3 className='creator-current-bid__price-eth'>{course.crypto} {auctionCard.card.value}</h3>
              <p className='creator-current-bid__price-dolar'>${course.value}</p>
              <h4 className='creator-current-bid__text'>Auction ending in</h4>

              <Timer/>

            </div>

            <button className='creator-button__place-bid'>Place a bid</button>
            <button className='creator-button__view-item'>View item</button>

            <div className='creator-button__pereckl-auction'>
              <button className='creator-button__minus' onClick={precklMinus}>-</button>
              <button className='creator-button__plus' onClick={perecklPlus}>+</button>
            </div>

          </div>
        </div>
      </StyledCreatorNetwork>
    </Container>
  )
}
