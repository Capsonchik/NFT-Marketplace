import { PopupYay } from '../popupYay/popupYay'
import { PopupStep } from '../popupStep/popupStep'

export const Popup = ({
                        see,
                        none,
                        upload,
                        closed,
                        loader,
                        checked,
                        uploaded,
                        changeSee,
                        changeNone,
                        changeClosed,
                        changeUpload,
                        changeCheckbox
                      }) => {

  return (
    <div className={ `popup  ${ closed ? 'popup_opened' : '' }` }>
      <div className='popup__container'>
        <div className='popup__row'>
          <div className={ `yay ${ see ? '' : 'none' }` }>
            <img src='/img/icons/Yay.png' alt='yay' className='yay__img'/>
          </div>
          <div className={ see ? 'none' : '' }>
            <h3 className='popup__title'>{ none ? 'Folow steps' : 'Put on sale' }</h3>
          </div>
          <button className='popup__exit' onClick={ changeClosed }>
            <img src='/img/icons/exit.png' alt='exit' className='popup__img-exit'/>
          </button>
        </div>

        <div className={ none ? 'none' : '' }>
          <div className='form'>
            <div className='block-img'>
              <img src='/img/icons/dollar-white.png' alt='currency' className='popup__img-dollar'/>
            </div>
            <div className='block-text'>
              <h4 className='block-text__title'>Instant sale price</h4>
              <p className='block-text__text'>Enter the price for which the item will be instanly sold</p>
            </div>
            <>
              <form className='popup__checkbox'>
                <input placeholder='placeholder' checked={ checked } onChange={ changeCheckbox } type='checkbox'
                       className='checkbox' id='checkbox'/>
                <label className='label' htmlFor='checkbox'></label>
              </form>
            </>
          </div>

          <div className={ `block - info ${ checked ? '' : 'none' }` }>
            <div className='block-info__texts'>
              <p className='block-info__text'>Enter your price</p>
              <p className='block-info__currency'>ETH</p>
            </div>
            <div className='block-info__content'>
              <p className='block-info__text'>Service fee</p>
              <p className='block-info__currency'>1.5%</p>
            </div>
            <div className='block-info__content'>
              <p className='block-info__text'>Total bid amount</p>
              <div className='block-info__input'>
                <input type='text' className='block-input__input' placeholder='0' maxLength='6'/>
                <p className='block-info__currency'>ETH</p>
              </div>
            </div>
          </div>

          <div className='block-btn'>
            <button onClick={ changeNone } className={ checked ? 'button_on' : 'button_off' }>Continue</button>
            <button className='block-btn__cancel' onClick={ changeClosed }>Cancel</button>
          </div>

        </div>

        <PopupStep
          see={ see }
          none={ none }
          loader={ loader }
          upload={ upload }
          uploaded={ uploaded }
          changeSee={ changeSee }
          changeUpload={ changeUpload }
        />

        <PopupYay
          see={ see }
        />

      </div>
    </div>
  )
}