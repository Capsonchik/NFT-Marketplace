import { BtnModal, StyledNotificationModal } from './notification-modal.styled'
import {Cards} from '../../state/cards.js'

export const NotificationModal = () => {
    const data = Cards.map(el => {
        return(
            <div key={el.id} className='products-card'>
                <div className='info-card'>
                    <img className='img' src={el.img} alt='cardModalOne' />
                    <div className='modal-text'>
                        <p className='modal-title'>ETH received</p>
                        <p className='modal-subtitle'>{el.price} ETH recived</p>
                        <span>{el.day} days ago</span>
                    </div>
                </div>
                <img src='/img/icons/modal-blue-dot.png' alt='dot' />
            </div>
        )
    })

    return(
        <StyledNotificationModal className='modal-wrapper'>
            <div className='modal'>
            <div className='modal-popup-active block'>
                <div className='header-modal'>
                    <span>Notification</span>
                    <BtnModal>See all</BtnModal>
                </div>
                {data}
            </div>
            </div>
        </StyledNotificationModal>
    )
}
