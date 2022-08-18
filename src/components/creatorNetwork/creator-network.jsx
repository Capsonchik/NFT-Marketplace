import {useState, useEffect} from 'react'
import {StyledCreatorNetwork} from './creator-network.styled'
import {Container} from '../../globalStyled/styled.global'
import {VicupPrice} from "./vicupPrice/vicup-price"
import {Course} from "./course/course";

export const CreatorNetwork = ({cards, users}) => {

  const [index, setIndex] = useState(0)
  const auctionCard = {
    user:[],
    card:[]
  }

  const newArrAuction = []

  // проблемма в том что id карточек собираються каждый раз в нвый массив что плохо useEfect не помог если не получиться с ним мправиться
  //то можно запустить от сюда другую функцию
  useEffect(()=>{
    users.forEach((user) => {
      if (user.auction.length > 0) {
        user.auction.forEach((id) => {
          newArrAuction.push(id)
          // console.log(user)
          auctionCard.user.push(user)
        })
      }
    })
    fun()
  },[])


    // cards.forEach((el) => {
    //   if (el.id == newArrAuction[index]) {
    //     auctionCard.card = el
    //   }
    // })
const fun = () => {
  newArrAuction.forEach((id)=>{
    cards.forEach((card)=>{
      if(id === card.id){
        auctionCard.card.push(card)
      }
    })
  })
}



    // users.forEach((user) => {
    //   if (user.auction.length > 0) {
    //     user.auction.forEach((id) => {
    //       if (id == newArrAuction[index]) {
    //         auctionCard.user = user
    //       }
    //     })
    //   }
    // })

  console.log('auctionCard', auctionCard)
  // console.log('auctionCard', auctionCard.user)
  // console.log('auctionCard', auctionCard.card)
  console.log('newArrAuction', newArrAuction)


  const perecklPlus = () => {
    if (index === newArrAuction.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const precklMinus = () => {
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

                  <VicupPrice card={auctionCard.card}/>

                </div>
              </div>

            </div>

            <Course card={auctionCard.card}/>

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
