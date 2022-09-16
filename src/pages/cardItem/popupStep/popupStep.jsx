export const PopupStep = ({ none, upload, uploaded, loader, changeUpload, see, changeSee }) => {

  return (
    <div className={ see ? 'none' : '' }>
      <div className={ none ? '' : 'none' }>
        <div className='block-offer'>
          <div className={ upload ? 'none' : 'block-offer__img_off' }>
            <img src='/img/icons/checkmark-gray.png' alt='checkmark' className='block-offer__img'/>
          </div>
          <div className={ uploaded ? 'block-offer__img_on' : 'none' }>
            <img src='/img/icons/checkmark-white.png' alt='checkmark' className='block-offer__img'/>
          </div>

          <div className={ loader ? 'spinner-2' : 'none' }></div>

          <div className='block-offer__texts'>
            <h4 className='block-offer__title'>Approve</h4>
            <p className='block-offer__text'>Approve perfoming transactions with your wallet</p>
          </div>
        </div>

        <button onClick={ changeUpload } className={ uploaded ? 'button_off' : 'button_on' }>
          { loader ? <div className='lds-spinner'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> : 'Start now' }

        </button>

        <div className='block-offer'>
          <div className='block-offer__img_off'>
            <img src='/img/icons/pencil.png' alt='checkmark' className='block-offer__img-pencil'/>
          </div>
          <div className='block-offer__texts'>
            <h4 className='block-offer__title'>Sign sell order</h4>
            <p className='block-offer__text'>Sign sell order using your wallet</p>
          </div>
        </div>

        <button onClick={ changeSee } className={ uploaded ? 'button_on' : 'button_off' }>Start now</button>
      </div>
    </div>
  )
}