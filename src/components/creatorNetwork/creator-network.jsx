import { useState, useEffect } from 'react'
import { StyledCreatorNetwork } from './creator-network.styled'
import { Container } from '../../globalStyled/styled.global'

export const CreatorNetwork = () => {

  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [course, setCourse] = useState({course:1595.1, crypto: 1.01, value: 0})

  useEffect(() => {
    setCourse({value:( course.course * course.crypto), course:1595.1, crypto: 1.01})
  }, [])

  setInterval(() => {
      setHours(23 - new Date().getHours())
      setMinutes(59 - new Date().getMinutes())
      setSeconds(59 - new Date().getSeconds())
  }, 1000)

  return (
    <Container>
      <StyledCreatorNetwork>
        <div className='creator-network '>
          <img className='creator-network__img' src='img/cards/img103.png' alt="nft"/>
          <div className='creator-network__block-info'>

            <div className='creator-info'>
              <h2 className='creator-info__title'>the creator network®</h2>

              <div className='creator-man'>
                <div className='creator-man__block'>
                  <img className='creator-man__img' src='img/avatars/edd-harrys.png' alt='creator'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Creator</p>
                    <p className='creator-man__nickname'>Enrico Cole</p>
                  </div>
                </div>

                <div className='creator-man__block'>
                  <img className='creator-man__img' src='img/icons/ETH.png' alt='logo-ETH'/>

                  <div className='creator-man__block-text'>
                    <p className='creator-man__text'>Instant price</p>
                    <p className='creator-man__nickname'>3.5 ETH</p>
                  </div>
                </div>
              </div>

            </div>

            <div className='creator-current-bid'>
              <h4 className='creator-current-bid__text'>Current Bid</h4>
              <h3 className='creator-current-bid__price-eth'>{course.crypto} ETH</h3>
              <p className='creator-current-bid__price-dolar'>${course.value}</p>
              <h4 className='creator-current-bid__text'>Auction ending in</h4>

              <div className='creator-current-bid__block-time'>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>{hours}</p>
                  <p className='creator-current-bid__time-text'>Hrs</p>
                </div>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>{minutes}</p>
                  <p className='creator-current-bid__time-text'>mins</p>
                </div>

                <div className='creator-current-bid__auction-ending'>
                  <p className='creator-current-bid__time'>{seconds}</p>
                  <p className='creator-current-bid__time-text'>secs</p>
                </div>

              </div>
            </div>

            <button className='creator-button__place-bid'>Place a bid</button>
            <button className='creator-button__view-item'>View item</button>

          </div>
        </div>
      </StyledCreatorNetwork>
     </Container>
  )
}
