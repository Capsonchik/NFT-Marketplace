import { StyledCardItem } from './card-item.styled.js'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Popup } from './popup/popup'

export const CardItem = ({ users, cards }) => {

  const [closed, setClosed] = useState(false)
  const [checked, setChecked] = useState(false)
  const [none, setNone] = useState(false)
  const [upload, setUpload] = useState(false)
  const [loader, setLoader] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [see, setSee] = useState(false)
  const [nav, setNav] = useState(true)
  const { id } = useParams()
  const navigate = useNavigate()


  const toBack = () => {
    navigate(-1)
  }

  const content = {
    user: '', card: ''
  }

  users.forEach((user) => {
    if (user.auction.length > 0) {
      user.auction.forEach((userId) => {
        if (userId == id) {
          content.user = user
        }
      })
    }
  })

  cards.forEach((card) => {
    if (card.id == id) {
      content.card = card
    }
  })

  const changeNav = () => {
    setNav(!nav)
  }

  const changeCheckbox = () => {
    setChecked(!checked)
  }

  const changeNone = () => {
    checked ? setNone(true) : setNone(false)
  }

  const changeClosed = () => {
    setClosed(false)
  }

  const changeUpload = () => {
    if (!uploaded) {
      setUpload(true)
      setLoader(true)
      timer()
    }
  }

  const changeSee = () => {
    uploaded && setSee(true)
  }

  const timer = () => {
    setTimeout(() => {
      setLoader(false)
      setUploaded(true)
    }, 5000)
  }

  const changeOpened = () => {
    setClosed(true)
    setNone(false)
    setChecked(false)
    setUpload(false)
    setUploaded(false)
    setSee(false)
  }

  return (

    <StyledCardItem>
      <div className='wrap'>
        <div className='card-item__block'>
          <img src={ content.card.img } alt='nft' className='card-item__img img'/>

          <div className='card-block'>
            <div className='card-info'>
              <h1 className='card-info__title'>The amazing art</h1>

              <div className='card-info__price'>
                <p className='card-info__price-crypto'>{ content.card.price } ETH</p>
                <p className='card-info__price-dollar'>$4,429.87</p>
                <p className='card-info__price-availability'>{ content.user.auction.length } in stock</p>
              </div>

              <p className='card-info__text'>This NFT Card will give you Access to Special Airdrops. To learn more about
                UI8 please visit <a href='#' className='card-info__text-link'>https://ui8.net</a></p>
            </div>

            <div className='card-nav'>
              <p className='card-nav__link card-nav__link_active'>Info</p>
              <p className='card-nav__link'>Owners</p>
              <p className='card-nav__link'>History</p>
              <p className='card-nav__link'>Bids</p>
            </div>

            <div className='card-people'>
              <img src='/img/avatars/Raquel-Will.png' alt='avatar' className='card-people__avatar'/>
              <img src='/img/icons/crystal.png' alt='crystal'
                   className='card-people__avatar-status card-people__avatar-status_active'/>
              <div className='card-people__info'>
                <p className='card-people__status'>Owner</p>
                <p className='card-people__name'>Raquel Will</p>
              </div>
            </div>

            <div className='card-people'>
              <img src='/img/avatars/edd-harrys.png' alt='avatar' className='card-people__avatar'/>
              <img src='/img/icons/crystal.png' alt='crystal'
                   className='card-people__avatar-status'/>
              <div className='card-people__info'>
                <p className='card-people__status'>Creator</p>
                <p className='card-people__name'>Selina Mayert</p>
              </div>
            </div>

            <div className='card-buyer'>
              <div className='card-buyer__info'>
                <img src='/img/avatars/edd-harrys.png' alt='avatar' className='card-buyer__avatar'/>
                <div className='card-buyer__info-block'>
                  <p className='card-buyer__text'>Highest bid by <b
                    className='card-buyer__name'>{ content.user.name }</b>
                  </p>
                  <div className='card-buyer__price'>
                    <h3 className='card-buyer__price-crypto'>1.46 ETH</h3>
                    <h3 className='card-buyer__price-dollar'>$2,764.89</h3>
                  </div>
                </div>
              </div>
              <div className='card-buyer__button'>
                <button className='card-buyer__button-purchase' onClick={ changeOpened }>Purchase now</button>
                <button className='card-buyer__button-bid'>Place a bid</button>
              </div>
              <div className='card-buyer__service-fee'>
                <p className='card-buyer__service-fee-text'>Service fee &ensp; <b
                  className='card-buyer__service-fee-percent'>1.5%</b></p>
                <p className='card-buyer__service-fee-price'>2.563 ETH &ensp; $4,540.62</p>
              </div>
            </div>
          </div>

          <div className='card-navigation'>
            <div onClick={ toBack } className='card-navigation__block card-navigation__exit'>
              <img src='/img/icons/exit.png' alt='exit' className='card-navigation__img-exit'/>
            </div>
            <div className='card-navigation__block'>
              <img src='/img/icons/download.png' alt='download' className='card-navigation__img-download'/>
            </div>
            <div className='card-navigation__block'>
              <img src='/img/icons/red-like.png' alt='like' className='card-navigation__img-like'/>
            </div>
            <div onClick={ changeNav } className='card-navigation__block'>
              <img src='/img/icons/menu.png' alt='menu' className='card-navigation__img-menu'/>
            </div>

            <div className={ `nav__card-item ${ nav && 'none' } ` }>
              <div className='nav__item'>
                <img src='/img/icons/currency.png' alt='currency' className='nav__img'/>
                <p className='nav__text'>Change price</p>
              </div>
              <div className='nav__item'>
                <img src='/img/icons/right-arrow-in-square.png' alt='right arrow in square' className='nav__img'/>
                <p className='nav__text'>Transfer token</p>
              </div>
              <div className='nav__item'>
                <img src='/img/icons/cross.png' alt='cross' className='nav__img'/>
                <p className='nav__text'>Remove from sale</p>
              </div>
              <div className='nav__item'>
                <img src='/img/icons/red-cross.png' alt='red cross' className='nav__img'/>
                <p className='nav__text'>Burn token</p>
              </div>
              <div className='nav__item'>
                <img src='/img/icons/exclamation-point.png' alt='exclamation point' className='nav__img'/>
                <p className='nav__text'>Report</p>
              </div>
            </div>

            <Popup
              see={ see }
              none={ none }
              closed={ closed }
              upload={ upload }
              loader={ loader }
              checked={ checked }
              uploaded={ uploaded }
              changeSee={ changeSee }
              changeNone={ changeNone }
              changeClosed={ changeClosed }
              changeUpload={ changeUpload }
              changeCheckbox={ changeCheckbox }
            />

          </div>
        </div>
      </div>
    </StyledCardItem>)
}