export const PopupYay = ({ see }) => {
  return (
    <div className={ see ? '' : 'none' }>
      <div className='yay__block-text'>
        <p className='yay__text'>You successfully purchase</p>
        <p className='yay__text'>C O I N Z from UI8</p>
      </div>
      <div className='yay__block-transaction'>
        <div className='yay__block-status'>
          <p className='yay__status-text'>Status</p>
          <p className='yay__processing-text'>Processing</p>
        </div>
        <div className='yay__block-status'>
          <p className='yay__status-text'>Transaction ID</p>
          <p className='yay__score-text'>0msx836930...87r398</p>
        </div>
      </div>
      <div className='yay__block-social'>
        <p className='yay__social-text'>Time to show-off</p>
        <div className='yay__social-icons'>
          <button className='yay__social--btn'>
            <img src='/img/icons/facebook.png' alt='facebook' className='yay__social-icon'/>
          </button>
          <button className='yay__social--btn'>
            <img src='/img/icons/twiter.png' alt='twitter' className='yay__social-icon'/>
          </button>
          <button className='yay__social--btn'>
            <img src='/img/icons/insta.png' alt='insta' className='yay__social-icon'/>
          </button>
          <button className='yay__social--btn'>
            <img src='/img/icons/pin.png' alt='pin' className='yay__social-icon'/>
          </button>
        </div>
      </div>
    </div>)
}